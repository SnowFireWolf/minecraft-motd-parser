import { describe, expect, it } from "@jest/globals";
import motdParser from "../src";

describe("Additional MOTD Parser Tests", () => {
  
  describe("JSONRender function", () => {
    it("should render JSON object to HTML correctly", () => {
      const input = {
        text: "Hello",
        color: "red",
        bold: true
      };
      const result = motdParser.JSONRender(input);
      expect(result).toEqual('<span style="color:#FF5555;font-weight: bold;">Hello</span>');
    });

    it("should handle complex nested JSON", () => {
      const input = {
        text: "",
        extra: [
          { text: "Red", color: "red" },
          { text: " and ", color: "white" },
          { text: "Blue", color: "blue", bold: true }
        ]
      };
      const result = motdParser.JSONRender(input);
      expect(result).toEqual('<span style="color:#FF5555;">Red</span><span style="color:#FFFFFF;"> and </span><span style="color:#5555FF;font-weight: bold;">Blue</span>');
    });
  });

  describe("cleanHtmlTags utility", () => {
    it("should remove simple HTML tags", () => {
      const input = "<span>Hello</span> <b>World</b>";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual("Hello World");
    });

    it("should remove dangerous script tags completely", () => {
      const input = "Safe text <script>alert('xss')</script> more text";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual("Safe text  more text");
    });

    it("should handle HTML comments", () => {
      const input = "Text <!-- this is a comment --> more text";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual("Text  more text");
    });

    it("should handle nested tags", () => {
      const input = "<div><span><b>Bold text</b></span></div>";
      const result = motdParser.cleanHtmlTags(input);
      expect(result).toEqual("Bold text");
    });

    it("should handle empty or invalid input", () => {
      expect(motdParser.cleanHtmlTags("")).toEqual("");
      expect(motdParser.cleanHtmlTags(null as any)).toEqual("");
      expect(motdParser.cleanHtmlTags(undefined as any)).toEqual("");
    });
  });

  describe("Complex JSON structures", () => {
    it("should handle deeply nested extra arrays", () => {
      const input = {
        text: "",
        extra: [
          {
            text: "Level 1",
            extra: [
              {
                text: " Level 2",
                extra: [
                  { text: " Level 3", color: "red" }
                ]
              }
            ]
          }
        ]
      };
      const result = motdParser.autoToHTML(input);
      expect(result).toContain("Level 1");
      expect(result).toContain("Level 2");
      expect(result).toContain("Level 3");
    });

    it("should handle mixed string and object in extra array", () => {
      const input = {
        text: "",
        extra: [
          "Plain string",
          { text: " Formatted text", color: "blue" },
          " Another string"
        ]
      };
      const result = motdParser.autoToHTML(input);
      expect(result).toContain("Plain string");
      expect(result).toContain("Formatted text");
      expect(result).toContain("Another string");
    });

    it("should handle translate property", () => {
      const input = {
        translate: "multiplayer.player.joined",
        text: ""
      };
      const result = motdParser.autoToHTML(input);
      expect(typeof result).toBe("string");
    });
  });

  describe("Formatting codes coverage", () => {
    describe("All text styles", () => {
      it("should handle obfuscated (§k)", () => {
        const input = "§kObfuscated text§r Normal";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("obfuscated");
      });

      it("should handle bold (§l)", () => {
        const input = "§lBold text§r Normal";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("font-weight: bold");
      });

      it("should handle strikethrough (§m)", () => {
        const input = "§mStrike text§r Normal";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("line-through");
      });

      it("should handle underlined (§n)", () => {
        const input = "§nUnderlined text§r Normal";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("underline");
      });

      it("should handle italic (§o)", () => {
        const input = "§oItalic text§r Normal";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("font-style: italic");
      });

      it("should handle reset (§r)", () => {
        const input = "§cRed §lBold §rReset";
        const result = motdParser.textToHTML(input);
        expect(result).toContain("Reset");
        expect(result).toContain("Red");
        expect(result).toContain("Bold");
      });
    });

    describe("All base colors", () => {
      const colorTests = [
        { code: "§0", name: "black", hex: "#000000" },
        { code: "§1", name: "dark_blue", hex: "#0000AA" },
        { code: "§2", name: "dark_green", hex: "#00AA00" },
        { code: "§3", name: "dark_aqua", hex: "#00AAAA" },
        { code: "§4", name: "dark_red", hex: "#AA0000" },
        { code: "§5", name: "dark_purple", hex: "#AA00AA" },
        { code: "§6", name: "gold", hex: "#FFAA00" },
        { code: "§7", name: "gray", hex: "#AAAAAA" },
        { code: "§8", name: "dark_gray", hex: "#555555" },
        { code: "§9", name: "blue", hex: "#5555FF" },
        { code: "§a", name: "green", hex: "#55FF55" },
        { code: "§b", name: "aqua", hex: "#55FFFF" },
        { code: "§c", name: "red", hex: "#FF5555" },
        { code: "§d", name: "light_purple", hex: "#FF55FF" },
        { code: "§e", name: "yellow", hex: "#FFFF55" },
        { code: "§f", name: "white", hex: "#FFFFFF" }
      ];

      colorTests.forEach(({ code, name, hex }) => {
        it(`should handle ${name} color (${code})`, () => {
          const input = `${code}${name} text`;
          const result = motdParser.textToHTML(input);
          expect(result).toContain(`color:${hex}`);
          expect(result).toContain(`${name} text`);
        });
      });
    });
  });

  describe("JSON validation and utilities", () => {
    it("should handle empty arrays in extra", () => {
      const input = {
        text: "Main text",
        extra: []
      };
      const result = motdParser.autoToHTML(input);
      expect(result).toEqual("Main text");
    });

    it("should handle numeric text values", () => {
      const input = {
        text: 12345
      };
      const result = motdParser.autoToHTML(input);
      expect(result).toContain("12345");
    });

    it("should handle boolean formatting values", () => {
      const input = {
        text: "Test",
        bold: false,
        italic: true,
        underlined: false,
        strikethrough: true,
        obfuscated: false
      };
      const result = motdParser.autoToHTML(input);
      expect(result).toContain("font-style: italic");
      expect(result).toContain("text-decoration: line-through");
      expect(result).not.toContain("font-weight: bold");
      expect(result).not.toContain("text-decoration: underline");
    });
  });
}); 