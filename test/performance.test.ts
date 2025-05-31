import { describe, expect, it } from "@jest/globals";
import motdParser from "../src";

describe("Performance test", () => {
  describe("Large data processing", () => {
    it("should handle large MOTD strings efficiently", () => {
      // 創建大型 MOTD 字符串 (10000 字符)
      const largeMOTD = "§a" + "Test ".repeat(2000) + "§r§l" + "Bold ".repeat(2000);
      
      const startTime = performance.now();
      const result = motdParser.textToHTML(largeMOTD);
      const endTime = performance.now();
      
      const processingTime = endTime - startTime;
      
      expect(result).toContain("Test");
      expect(result).toContain("Bold");
      expect(processingTime).toBeLessThan(100); // 應在 100ms 內完成
    });

    it("should handle large JSON objects efficiently", () => {
      // 創建大型 JSON 對象
      const largeExtra = Array.from({ length: 1000 }, (_, i) => ({
        text: `Item ${i}`,
        color: i % 2 === 0 ? "red" : "blue",
        bold: i % 3 === 0
      }));

      const largeJSON = {
        text: "Large JSON Test",
        extra: largeExtra
      };

      const startTime = performance.now();
      const result = motdParser.autoToHTML(largeJSON);
      const endTime = performance.now();
      
      const processingTime = endTime - startTime;
      
      expect(result).toContain("Large JSON Test");
      expect(result).toContain("Item 0");
      expect(result).toContain("Item 999");
      expect(processingTime).toBeLessThan(200); // 應在 200ms 內完成
    });

    it("should handle deeply nested JSON efficiently", () => {
      // 創建深度嵌套的 JSON
      let nestedJSON: any = { text: "Deep level" };
      for (let i = 0; i < 100; i++) {
        nestedJSON = {
          text: `Level ${i}`,
          extra: [nestedJSON]
        };
      }

      const startTime = performance.now();
      const result = motdParser.autoToHTML(nestedJSON);
      const endTime = performance.now();
      
      const processingTime = endTime - startTime;
      
      expect(result).toContain("Level");
      expect(result).toContain("Deep level");
      expect(processingTime).toBeLessThan(50); // 應在 50ms 內完成
    });
  });

  describe("Repeated operations performance", () => {
    it("should maintain performance with repeated conversions", () => {
      const testMOTD = "§a§lGreen Bold §r§cRed Text §b§nBlue Underlined";
      const iterations = 1000;

      const startTime = performance.now();
      
      for (let i = 0; i < iterations; i++) {
        motdParser.textToHTML(testMOTD);
        motdParser.cleanCodes(testMOTD);
        motdParser.textToJSON(testMOTD);
      }
      
      const endTime = performance.now();
      const averageTime = (endTime - startTime) / iterations;
      
      expect(averageTime).toBeLessThan(1); // 平均每次操作應在 1ms 內
    });

    it("should handle concurrent processing", async () => {
      const testMOTD = "§a§lConcurrent §r§cTest §b§nData";
      
      const promises: Promise<{
        html: string;
        clean: string;
        json: { text: string | number; extra: any[] };
      }>[] = [];

      for (let i = 0; i < 100; i++) {
        promises.push(
          Promise.resolve().then(() => {
            return {
              html: motdParser.textToHTML(testMOTD),
              clean: motdParser.cleanCodes(testMOTD),
              json: motdParser.textToJSON(testMOTD)
            };
          })
        );
      }

      const startTime = performance.now();
      const results = await Promise.all(promises);
      const endTime = performance.now();

      expect(results).toHaveLength(100);
      expect(results[0].html).toContain("Concurrent");
      expect(endTime - startTime).toBeLessThan(100); // 並發處理應在 100ms 內完成
    });
  });

  describe("Memory usage test", () => {
    it("should not leak memory with repeated operations", () => {
      const testMOTD = "§a§lMemory Test §r§c" + "X".repeat(1000);
      const initialMemory = process.memoryUsage().heapUsed;

      // 執行大量操作
      for (let i = 0; i < 1000; i++) {
        const html = motdParser.textToHTML(testMOTD);
        const clean = motdParser.cleanCodes(testMOTD);
        const json = motdParser.textToJSON(testMOTD);
        
        // 強制清理（模擬正常使用）
        if (i % 100 === 0 && global.gc) {
          global.gc();
        }
      }

      const finalMemory = process.memoryUsage().heapUsed;
      const memoryIncrease = finalMemory - initialMemory;
      
      // 記憶體增長應該合理（小於 10MB）
      expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024);
    });
  });

  describe("特殊情況效能", () => {
    it("should handle strings with many color codes efficiently", () => {
      // 創建有大量顏色代碼的字符串
      let colorCodeString = "";
      const colors = ["§a", "§b", "§c", "§d", "§e", "§f", "§1", "§2", "§3", "§4"];
      
      for (let i = 0; i < 1000; i++) {
        colorCodeString += colors[i % colors.length] + "Text" + i + " ";
      }

      const startTime = performance.now();
      const result = motdParser.textToHTML(colorCodeString);
      const endTime = performance.now();
      
      const processingTime = endTime - startTime;
      
      expect(result).toContain("Text0");
      expect(result).toContain("Text999");
      expect(processingTime).toBeLessThan(50); // 應在 50ms 內完成
    });

    it("should handle complex hex color patterns efficiently", () => {
      // 測試大量自定義 hex 顏色
      const hexColors = [
        "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
        "#00FFFF", "#FFA500", "#800080", "#FFC0CB", "#A52A2A"
      ];

      const complexJSON = {
        text: "",
        extra: Array.from({ length: 500 }, (_, i) => ({
          text: `Color${i} `,
          color: hexColors[i % hexColors.length]
        }))
      };

      const startTime = performance.now();
      const result = motdParser.autoToHTML(complexJSON);
      const endTime = performance.now();
      
      const processingTime = endTime - startTime;
      
      expect(result).toContain("Color0");
      expect(result).toContain("Color499");
      expect(processingTime).toBeLessThan(100); // 應在 100ms 內完成
    });
  });

  describe("Baseline test", () => {
    const benchmarkMOTD = "§f§l『§e§lFC夢幻峽谷§f§l』 §7§lFantasyCanyon §n§b§l<<§9§l◎§b§l------------§e§l加入冒險!§b§l------------§9§l◎§b§l>>";

    it("textToHTML baseline performance", () => {
      const iterations = 10000;
      
      const startTime = performance.now();
      for (let i = 0; i < iterations; i++) {
        motdParser.textToHTML(benchmarkMOTD);
      }
      const endTime = performance.now();
      
      const averageTime = (endTime - startTime) / iterations;
      console.log(`textToHTML average processing time: ${averageTime.toFixed(4)}ms`);
      
      expect(averageTime).toBeLessThan(0.1); // 每次應小於 0.1ms
    });

    it("cleanCodes baseline performance", () => {
      const iterations = 10000;
      
      const startTime = performance.now();
      for (let i = 0; i < iterations; i++) {
        motdParser.cleanCodes(benchmarkMOTD);
      }
      const endTime = performance.now();
      
      const averageTime = (endTime - startTime) / iterations;
      console.log(`cleanCodes average processing time: ${averageTime.toFixed(4)}ms`);
      
      expect(averageTime).toBeLessThan(0.05); // 每次應小於 0.05ms
    });
  });
}); 