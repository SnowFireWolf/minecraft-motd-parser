// import test, { describe, it } from "node:test";
import { describe, expect, it } from "@jest/globals";
import motdParser from "../src";



const testMOTDString = "§f§l『§e§lFC夢幻峽谷§f§l』 §7§lFantasyCanyon \n §b§l<<§9§l◎§b§l------------§e§l加入冒險!§b§l------------§9§l◎§b§l>>";
const testMotdJSON = {
  "extra": [
    {
      "color": "#808080",
      "text": "             "
    },
    {
      "bold": true,
      "italic": false,
      "underlined": false,
      "strikethrough": false,
      "obfuscated": false,
      "extra": [
        {
          "color": "#1991EA",
          "text": "D"
        },
        {
          "color": "#1C93EB",
          "text": "r"
        },
        {
          "color": "#2096EC",
          "text": "e"
        },
        {
          "color": "#2499ED",
          "text": "a"
        },
        {
          "color": "#289CEE",
          "text": "m"
        },
        {
          "color": "#2C9EEF",
          "text": "C"
        },
        {
          "color": "#30A1F0",
          "text": "r"
        },
        {
          "color": "#33A4F1",
          "text": "a"
        },
        {
          "color": "#37A7F2",
          "text": "f"
        },
        {
          "color": "#3BA9F3",
          "text": "t"
        },
        {
          "color": "#3FACF4",
          "text": "e"
        },
        {
          "color": "#43AFF5",
          "text": "r"
        },
        {
          "color": "#47B2F6",
          "text": " "
        },
        {
          "color": "#4BB4F7",
          "text": "N"
        },
        {
          "color": "#4EB7F8",
          "text": "e"
        },
        {
          "color": "#52BAF9",
          "text": "t"
        },
        {
          "color": "#56BDFA",
          "text": "w"
        },
        {
          "color": "#5ABFFB",
          "text": "o"
        },
        {
          "color": "#5EC2FC",
          "text": "r"
        },
        {
          "color": "#62C5FD",
          "text": "k"
        }
      ],
      "text": ""
    },
    {
      "text": " "
    },
    {
      "color": "#1f92ed",
      "text": "- "
    },
    {
      "bold": true,
      "italic": false,
      "underlined": false,
      "strikethrough": false,
      "obfuscated": false,
      "extra": [
        {
          "color": "#66C8FF",
          "text": "築"
        },
        {
          "color": "#52BAF9",
          "text": "夢"
        },
        {
          "color": "#3FACF4",
          "text": "物"
        },
        {
          "color": "#2C9EEF",
          "text": "語"
        }
      ],
      "text": ""
    },
    {
      "text": "\n                §f 在這裡 -- 實現你的理想! "
    }
  ],
  "text": ""
};



describe("Minecraft MOTD Parser", () => {
  describe("autoToHTML", () => {
    describe("- string to HTML", () => {
      it("should convert MOTD string to HTML", () => {
        const expectedOutput = "<span style=\"color:#FFFFFF;font-weight: bold;\">『</span><span style=\"color:#FFFF55;font-weight: bold;font-weight: bold;\">FC夢幻峽谷</span><span style=\"color:#FFFFFF;font-weight: bold;\">』 </span><span style=\"color:#AAAAAA;font-weight: bold;font-weight: bold;\">FantasyCanyon <br/> </span><span style=\"color:#55FFFF;font-weight: bold;font-weight: bold;font-weight: bold;\">&lt;&lt;</span><span style=\"color:#5555FF;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">◎</span><span style=\"color:#55FFFF;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">------------</span><span style=\"color:#FFFF55;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">加入冒險!</span><span style=\"color:#55FFFF;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">------------</span><span style=\"color:#5555FF;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">◎</span><span style=\"color:#55FFFF;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;font-weight: bold;\">&gt;&gt;</span>";
        const result = motdParser.autoToHTML(testMOTDString);
        expect(result).toEqual(expectedOutput);
      });
    });

    describe("- object (JSON) to HTML", () => {
      it("should convert MOTD json to HTML", () => {
        const expectedOutput = "<span style=\"color:#808080;\">             </span><span style=\"font-weight: bold;\"><span style=\"color:#1991EA;\">D</span><span style=\"color:#1C93EB;\">r</span><span style=\"color:#2096EC;\">e</span><span style=\"color:#2499ED;\">a</span><span style=\"color:#289CEE;\">m</span><span style=\"color:#2C9EEF;\">C</span><span style=\"color:#30A1F0;\">r</span><span style=\"color:#33A4F1;\">a</span><span style=\"color:#37A7F2;\">f</span><span style=\"color:#3BA9F3;\">t</span><span style=\"color:#3FACF4;\">e</span><span style=\"color:#43AFF5;\">r</span><span style=\"color:#47B2F6;\"> </span><span style=\"color:#4BB4F7;\">N</span><span style=\"color:#4EB7F8;\">e</span><span style=\"color:#52BAF9;\">t</span><span style=\"color:#56BDFA;\">w</span><span style=\"color:#5ABFFB;\">o</span><span style=\"color:#5EC2FC;\">r</span><span style=\"color:#62C5FD;\">k</span></span> <span style=\"color:#1f92ed;\">- </span><span style=\"font-weight: bold;\"><span style=\"color:#66C8FF;\">築</span><span style=\"color:#52BAF9;\">夢</span><span style=\"color:#3FACF4;\">物</span><span style=\"color:#2C9EEF;\">語</span></span><br/>                <span style=\"color:#FFFFFF;\"> 在這裡 -- 實現你的理想! </span>";
        const result = motdParser.autoToHTML(testMotdJSON);
        expect(result).toEqual(expectedOutput);
      });
    });
  });



  describe("cleanCodes", () => {
    it("should clean MOTD color tags", () => {
      const expectedOutput = "『FC夢幻峽谷』 FantasyCanyon \n <<◎------------加入冒險!------------◎>>";
      expect(motdParser.cleanCodes(testMOTDString)).toEqual(expectedOutput);
    });
  });

  describe("autoCleanToText", () => {
    describe("- string to cleaned text", () => {
      it("string type should clean MOTD color tags and converted to text", () => {
        const expectedOutput = "『FC夢幻峽谷』 FantasyCanyon \n <<◎------------加入冒險!------------◎>>";
        expect(motdParser.autoCleanToText(testMOTDString)).toEqual(expectedOutput);
      });
    });

    describe("- JSON to cleaned text", () => {
      it("object type should clean MOTD color tags and converted to text", () => {
        const expectedOutput = "             DreamCrafter Network - 築夢物語\n                 在這裡 -- 實現你的理想! ";
        expect(motdParser.autoCleanToText(testMotdJSON)).toEqual(expectedOutput);
      });
    });
  });



  describe("textToHTML", () => {
    it("should convert simple text to HTML", () => {
      const input = "Hello, world!";
      const expectedOutput = "Hello, world!";
      expect(motdParser.textToHTML(input)).toEqual(expectedOutput);
    });

    it("should convert text with color codes to HTML", () => {
      const input = "§cRed text";
      const expectedOutput = '<span style="color:#FF5555;">Red text</span>';
      expect(motdParser.textToHTML(input)).toEqual(expectedOutput);
    });
  });

  describe("textToJSON", () => {
    it("should convert simple text to JSON", () => {
      const input = "Hello, world!";
      const expectedOutput = { "extra": [{ "extra": [], "text": "Hello, world!" }], "text": "" };
      expect(motdParser.textToJSON(input)).toEqual(expectedOutput);
    });

    it("should convert text with color codes to JSON", () => {
      const input = "§cRed text";
      const expectedOutput = { "extra": [{ "color": "#FF5555", "extra": [], "text": "Red text" }], "text": "" };
      expect(motdParser.textToJSON(input)).toEqual(expectedOutput);
    });
  });

  describe("hex color parsing", () => {
    describe("JSONToHTML hex color validation", () => {
      it("should handle standard 6-digit hex colors with #", () => {
        const testJson = {
          "color": "#FF0000",
          "text": "Red text"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#FF0000;">Red text</span>');
      });

      it("should handle lowercase hex colors", () => {
        const testJson = {
          "color": "#00ff00",
          "text": "Green text"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#00ff00;">Green text</span>');
      });

      it("should handle mixed case hex colors", () => {
        const testJson = {
          "color": "#0000Ff",
          "text": "Blue text"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#0000Ff;">Blue text</span>');
      });

      it("should handle short hex format with leading zeros", () => {
        const testJson = {
          "color": "#123",
          "text": "Short hex"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#000123;">Short hex</span>');
      });

      it("should handle hex colors with leading + sign", () => {
        const testJson = {
          "color": "#+FF0000",
          "text": "Plus sign test"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#FF0000;">Plus sign test</span>');
      });

      it("should ignore hex colors with leading - sign", () => {
        const testJson = {
          "color": "#-FF0000",
          "text": "Minus sign test"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Minus sign test");
      });

      it("should handle hex colors with multiple leading zeros", () => {
        const testJson = {
          "color": "#000FF",
          "text": "Leading zeros"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#0000FF;">Leading zeros</span>');
      });

      it("should handle hex colors with +0 prefix", () => {
        const testJson = {
          "color": "#+0FF0000",
          "text": "Plus zero prefix"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#FF0000;">Plus zero prefix</span>');
      });

      it("should ignore hex colors with -0 prefix", () => {
        const testJson = {
          "color": "#-0FF0000",
          "text": "Minus zero prefix"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Minus zero prefix");
      });

      it("should handle single non-zero digit", () => {
        const testJson = {
          "color": "#A",
          "text": "Single digit"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#00000A;">Single digit</span>');
      });

      it("should handle valid 5-digit hex", () => {
        const testJson = {
          "color": "#1ABCD",
          "text": "Five digits"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#01ABCD;">Five digits</span>');
      });

      it("should ignore invalid hex colors (no # prefix)", () => {
        const testJson = {
          "color": "FF0000",
          "text": "Invalid no hash"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Invalid no hash");
      });

      it("should ignore invalid hex colors (invalid characters)", () => {
        const testJson = {
          "color": "#GG0000",
          "text": "Invalid characters"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Invalid characters");
      });

      it("should ignore invalid hex colors (too long)", () => {
        const testJson = {
          "color": "#1234567",
          "text": "Too long"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Too long");
      });

      it("should ignore empty color value", () => {
        const testJson = {
          "color": "",
          "text": "Empty color"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Empty color");
      });

      it("should ignore only # symbol", () => {
        const testJson = {
          "color": "#",
          "text": "Only hash"
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual("Only hash");
      });

      it("should handle complex JSON with valid hex colors", () => {
        const testJson = {
          "extra": [
            {
              "color": "#FF0000",
              "text": "Red "
            },
            {
              "color": "#00FF00",
              "text": "Green "
            },
            {
              "color": "#123",
              "text": "Short"
            }
          ],
          "text": ""
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#FF0000;">Red </span><span style="color:#00FF00;">Green </span><span style="color:#000123;">Short</span>');
      });

      it("should handle mixed valid and invalid hex colors", () => {
        const testJson = {
          "extra": [
            {
              "color": "#FF0000",
              "text": "Valid "
            },
            {
              "color": "invalid",
              "text": "Invalid "
            },
            {
              "color": "#00FF00",
              "text": "Valid again"
            }
          ],
          "text": ""
        };
        const result = motdParser.autoToHTML(testJson);
        expect(result).toEqual('<span style="color:#FF0000;">Valid </span>Invalid <span style="color:#00FF00;">Valid again</span>');
      });
    });
  });

  describe("JSONRender", () => {
    it("should render JSON object directly to HTML", () => {
      const input = {
        text: "Test",
        color: "red",
        bold: true
      };
      const expectedOutput = '<span style="color:#FF5555;font-weight: bold;">Test</span>';
      const result = motdParser.JSONRender(input);
      expect(result).toEqual(expectedOutput);
    });

    it("should handle empty JSON object", () => {
      const input = {};
      const result = motdParser.JSONRender(input);
      expect(typeof result).toBe("string");
    });
  });

  describe("cleanHtmlTags", () => {
    it("should remove HTML tags", () => {
      const input = "<span>Hello</span> <b>World</b>";
      const expectedOutput = "Hello World";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual(expectedOutput);
    });

    it("should remove dangerous script tags", () => {
      const input = "Safe <script>alert('xss')</script> text";
      const expectedOutput = "Safe  text";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual(expectedOutput);
    });

    it("should handle HTML comments", () => {
      const input = "Text <!-- comment --> more";
      const expectedOutput = "Text  more";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual(expectedOutput);
    });
  });

  // Merged tests from coverage.test.ts
  describe("isMotdJSONType utility", () => {
    it("should return true for valid MOTD JSON with text", () => {
      const validJson = { text: "Hello" };
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType(validJson)).toBe(true);
    });

    it("should return true for valid MOTD JSON with extra", () => {
      const validJson = { extra: [{ text: "Hello" }] };
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType(validJson)).toBe(true);
    });

    it("should return true for valid MOTD JSON with translate", () => {
      const validJson = { translate: "item.apple" };
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType(validJson)).toBe(true);
    });

    it("should return false for invalid types", () => {
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType(null)).toBe(false);
      expect(isMotdJSONType(undefined)).toBe(false);
      expect(isMotdJSONType("string")).toBe(false);
      expect(isMotdJSONType(123)).toBe(false);
      expect(isMotdJSONType([])).toBe(false);
    });

    it("should return false for empty object", () => {
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType({})).toBe(false);
    });

    it("should return false for object with only unrelated properties", () => {
      const invalidJson = { color: "red", bold: true };
      const { isMotdJSONType } = require("../src/utils");
      expect(isMotdJSONType(invalidJson)).toBe(false);
    });
  });

  describe("JSONToCleanedText function", () => {
    it("should convert simple JSON to clean text", () => {
      const json = { text: "§cHello §lWorld" };
      const result = motdParser.JSONToCleanedText(json);
      expect(result).toBe("Hello World");
    });

    it("should handle JSON with extra array", () => {
      const json = {
        text: "Start",
        extra: [
          { text: "§a Green" },
          { text: "§l Bold" }
        ]
      };
      const result = motdParser.JSONToCleanedText(json);
      expect(result).toBe("Start Green Bold");
    });

    it("should handle mixed elements in extra array", () => {
      const json = {
        text: "",
        extra: [
          { text: "Object element" }
        ]
      };
      const result = motdParser.JSONToCleanedText(json);
      expect(result).toBe("Object element");
    });

    it("should handle numeric text values", () => {
      const json = { text: 12345 };
      const result = motdParser.JSONToCleanedText(json);
      expect(result).toBe("12345");
    });
  });

  describe("Error handling and edge cases", () => {
    describe("autoToHTML error handling", () => {
      it("should handle unknown data types", () => {
        const result = motdParser.autoToHTML(123 as any);
        expect(result).toBe("unknown motd data type");
      });

      it("should handle null input", () => {
        expect(() => motdParser.autoToHTML(null as any)).toThrow();
      });

      it("should handle undefined input", () => {
        const result = motdParser.autoToHTML(undefined as any);
        expect(result).toBe("unknown motd data type");
      });

      it("should handle empty string input", () => {
        expect(motdParser.autoToHTML("")).toEqual("");
      });

      it("should handle empty object input", () => {
        const result = motdParser.autoToHTML({});
        expect(typeof result).toBe("string");
      });

      it("should handle array input", () => {
        try {
          const result = motdParser.autoToHTML([]);
          expect(typeof result).toBe("string");
        } catch (error) {
          expect(error).toBeDefined();
        }
      });
    });

    describe("autoCleanToText error handling", () => {
      it("should handle unknown data types", () => {
        const result = motdParser.autoCleanToText(123 as any);
        expect(result).toBe("unknown motd data type");
      });

      it("should handle null input", () => {
        expect(() => motdParser.autoCleanToText(null as any)).toThrow();
      });

      it("should handle undefined input", () => {
        const result = motdParser.autoCleanToText(undefined as any);
        expect(result).toBe("unknown motd data type");
      });

      it("should handle empty string input", () => {
        expect(motdParser.autoCleanToText("")).toEqual("");
      });
    });

    describe("Edge case testing", () => {
      it("should handle empty string input for all functions", () => {
        expect(motdParser.textToHTML("")).toBe("");
        expect(motdParser.textToJSON("")).toEqual({ text: "", extra: [] });
        expect(motdParser.cleanCodes("")).toBe("");
      });

      it("should handle very long strings", () => {
        const longString = "§c" + "A".repeat(10000);
        const htmlResult = motdParser.textToHTML(longString);
        const cleanResult = motdParser.cleanCodes(longString);
        
        expect(htmlResult).toContain("A".repeat(10000));
        expect(cleanResult).toBe("A".repeat(10000));
      });

      it("should handle strings with only color codes", () => {
        const colorOnlyString = "§a§l§r§c";
        const result = motdParser.textToHTML(colorOnlyString);
        expect(result).toBe("");
      });
    });
  });
});