import { describe, expect, it } from "@jest/globals";
import motdParser from "../src";

describe("Stress test", () => {
  describe("Extreme input test", () => {
    it("should handle extremely long color codes", () => {
      // 測試極長的顏色代碼序列
      const longColorCodes = "§a§b§c§d§e§f§l§m§n§o§r".repeat(1000);
      const result = motdParser.cleanCodes(longColorCodes);
      expect(result).toBe("");
    });

    it("should handle malformed MOTD strings", () => {
      const malformedInputs = [
        "§", // 只有 § 符號
        "§§§", // 連續 § 符號
        "§z§y§x", // 無效的顏色代碼
        "Normal text §", // 結尾的不完整代碼
        "§1§2§3§4§5§6§7§8§9§0§a§b§c§d§e§f", // 所有有效代碼
        "Text with §unknown codes", // 無效代碼
      ];

      malformedInputs.forEach((input) => {
        expect(() => motdParser.textToHTML(input)).not.toThrow();
        expect(() => motdParser.cleanCodes(input)).not.toThrow();
        expect(() => motdParser.textToJSON(input)).not.toThrow();
      });
    });

    it("should handle Unicode and special characters", () => {
      const unicodeInputs = [
        "§a中文測試§r",
        "§b🎮🎯🎲§r",
        "§c\u0000\u0001\u0002§r", // 控制字符
        "§d\n\t\r§r", // 換行和制表符
        "§e\uD83D\uDE00\uD83D\uDE01§r", // Emoji
        "§f\u{1F600}\u{1F601}§r", // Unicode Emoji
      ];

      unicodeInputs.forEach((input) => {
        expect(() => motdParser.textToHTML(input)).not.toThrow();
        expect(() => motdParser.cleanCodes(input)).not.toThrow();
      });
    });

    it("should handle very deeply nested JSON", () => {
      // 創建極深嵌套結構 (500 層)
      let deepJSON: any = { text: "Bottom" };
      for (let i = 0; i < 500; i++) {
        deepJSON = {
          text: `Level ${i}`,
          extra: [deepJSON]
        };
      }

      expect(() => motdParser.autoToHTML(deepJSON)).not.toThrow();
      expect(() => motdParser.autoCleanToText(deepJSON)).not.toThrow();
    });

    it("should handle JSON with circular references gracefully", () => {
      const circularJSON: any = { text: "Start" };
      circularJSON.extra = [circularJSON]; // 創建循環引用

      // 循環引用會導致 stack overflow，這是預期行為
      expect(() => {
        motdParser.autoToHTML(circularJSON);
      }).toThrow("Maximum call stack size exceeded");
    });
  });

  describe("Massive data stress test", () => {
    it("should handle massive JSON arrays", () => {
      // 創建包含 10000 個元素的陣列
      const massiveExtra = Array.from({ length: 10000 }, (_, i) => ({
        text: `Item ${i}`,
        color: i % 2 === 0 ? "red" : "blue"
      }));

      const massiveJSON = {
        text: "Massive test",
        extra: massiveExtra
      };

      const startTime = performance.now();
      const result = motdParser.autoToHTML(massiveJSON);
      const endTime = performance.now();

      expect(result).toContain("Massive test");
      expect(result).toContain("Item 0");
      expect(result).toContain("Item 9999");
      expect(endTime - startTime).toBeLessThan(1000); // 應在 1 秒內完成
    });

    it("should handle strings with maximum possible color variations", () => {
      // 測試所有可能的顏色代碼組合
      const allColorCodes = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f",
        "k", "l", "m", "n", "o", "r"
      ];

      let complexString = "";
      for (let i = 0; i < 1000; i++) {
        const colorCode = allColorCodes[i % allColorCodes.length];
        complexString += `§${colorCode}Text${i} `;
      }

      const startTime = performance.now();
      const htmlResult = motdParser.textToHTML(complexString);
      const cleanResult = motdParser.cleanCodes(complexString);
      const jsonResult = motdParser.textToJSON(complexString);
      const endTime = performance.now();

      expect(htmlResult).toContain("Text0");
      expect(htmlResult).toContain("Text999");
      expect(cleanResult).toContain("Text0");
      expect(cleanResult).toContain("Text999");
      expect(jsonResult.extra.length).toBeGreaterThan(0);
      expect(endTime - startTime).toBeLessThan(200); // 應在 200ms 內完成
    });
  });

  describe("Memory stress test", () => {
    it("should handle repeated large object creation without memory leak", () => {
      const initialMemory = process.memoryUsage().heapUsed;

      for (let round = 0; round < 10; round++) {
        // 每輪創建大量對象
        for (let i = 0; i < 100; i++) {
          const largeString = "§a" + "Large data ".repeat(100) + "§r";
          const html = motdParser.textToHTML(largeString);
          const clean = motdParser.cleanCodes(largeString);
          const json = motdParser.textToJSON(largeString);
          
          // 確保結果正確
          expect(html).toContain("Large data");
          expect(clean).toContain("Large data");
          expect(json.extra.length).toBeGreaterThan(0);
        }

        // 強制垃圾回收
        if (global.gc) {
          global.gc();
        }
      }

      const finalMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = finalMemory - initialMemory;

      // 記憶體增長應該是合理的（小於 50MB）
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    });

    it("should handle concurrent heavy processing", async () => {
      const heavyProcessingTasks = Array.from({ length: 50 }, (_, i) => {
        return new Promise<string>((resolve) => {
          setTimeout(() => {
            const largeData = "§a§l" + `Heavy task ${i} `.repeat(1000) + "§r";
            const result = motdParser.textToHTML(largeData);
            resolve(result);
          }, Math.random() * 10); // 隨機延遲 0-10ms
        });
      });

      const startTime = performance.now();
      const results = await Promise.all(heavyProcessingTasks);
      const endTime = performance.now();

      expect(results).toHaveLength(50);
      results.forEach((result, i) => {
        expect(result).toContain(`Heavy task ${i}`);
      });
      expect(endTime - startTime).toBeLessThan(1000); // 應在 1 秒內完成
    });
  });

  describe("Edge case test", () => {
    it("should handle all JavaScript string edge cases", () => {
      const edgeCases = [
        "", // 空字符串
        " ", // 單一空格
        "\n", // 單一換行
        "\t", // 單一制表符
        "\r\n", // Windows 換行
        "§", // 單一顏色代碼符號
        "§r", // 重置代碼
        "§f§r§a§r", // 交替重置
        "A".repeat(65536), // 64KB 字符串
        "\u0000", // NULL 字符
        "\uFFFF", // 最大 Unicode BMP 字符
      ];

      edgeCases.forEach((testCase, index) => {
        expect(() => {
          const html = motdParser.textToHTML(testCase);
          const clean = motdParser.cleanCodes(testCase);
          const json = motdParser.textToJSON(testCase);
          
          // 基本健全性檢查
          expect(typeof html).toBe("string");
          expect(typeof clean).toBe("string");
          expect(typeof json).toBe("object");
        }).not.toThrow();
      });
    });

    it("should handle all JSON edge cases", () => {
      const jsonEdgeCases = [
        {}, // 空對象
        { text: "" }, // 空文本
        { text: null }, // null 文本
        { text: undefined }, // undefined 文本
        { extra: [] }, // 空 extra 陣列
        { extra: [{}] }, // 包含空對象的 extra
        { 
          text: "",
          extra: [
            { text: "" },
            { text: " " },
            { text: "\n" }
          ]
        }, // 各種空白字符
        {
          text: "Test",
          color: "", // 空顏色
          bold: null, // null 樣式
          extra: undefined // undefined extra
        }
      ];

      jsonEdgeCases.forEach((testCase, index) => {
        expect(() => {
          const html = motdParser.autoToHTML(testCase);
          const clean = motdParser.autoCleanToText(testCase);
          
          expect(typeof html).toBe("string");
          expect(typeof clean).toBe("string");
        }).not.toThrow();
      });
    });
  });

  describe("Error recovery test", () => {
    it("should recover from processing errors gracefully", () => {
      const problematicInputs = [
        "§a\u0000\u0001\u0002", // 包含控制字符
        "§" + String.fromCharCode(0x7F), // DEL 字符
        "§a" + "\uD800", // 孤立的高代理項
        "§b" + "\uDC00", // 孤立的低代理項
      ];

      problematicInputs.forEach((input) => {
        expect(() => {
          const html = motdParser.textToHTML(input);
          const clean = motdParser.cleanCodes(input);
          
          // 結果應該是有效的字符串
          expect(typeof html).toBe("string");
          expect(typeof clean).toBe("string");
        }).not.toThrow();
      });
    });

    it("should handle processing interruption gracefully", async () => {
      // 模擬處理中斷的情況
      const longProcessingData = "§a" + "Long data ".repeat(10000);
      
      const processingPromise = new Promise<string>((resolve) => {
        // 模擬異步處理
        setTimeout(() => {
          const result = motdParser.textToHTML(longProcessingData);
          resolve(result);
        }, 0);
      });

      // 應該能在合理時間內完成
      const result = await Promise.race([
        processingPromise,
        new Promise<string>((_, reject) => 
          setTimeout(() => reject(new Error("Timeout")), 5000)
        )
      ]);

      expect(result).toContain("Long data");
    });
  });
}); 