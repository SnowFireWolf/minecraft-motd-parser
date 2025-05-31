import { describe, expect, it } from "@jest/globals";
import motdParser from "../src";

describe("Security Tests", () => {
  describe("htmlStringFormatting", () => {
    describe("Basic HTML Entity Escaping", () => {
      it("should escape basic HTML special characters", () => {
        const input = '<script>alert("XSS")</script>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });

      it("should escape ampersand character", () => {
        const input = 'Tom & Jerry';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Tom &amp; Jerry');
      });

      it("should escape quotes properly", () => {
        const input = 'He said "Hello" and she said \'Hi\'';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('He said &quot;Hello&quot; and she said &#39;Hi&#39;');
      });

      it("should convert newlines to HTML breaks", () => {
        const input = 'Line 1\nLine 2\nLine 3';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Line 1<br/>Line 2<br/>Line 3');
      });

      it("should handle empty and null inputs safely", () => {
        expect(motdParser.htmlStringFormatting('')).toEqual('');
        expect(motdParser.htmlStringFormatting(null as any)).toEqual('');
        expect(motdParser.htmlStringFormatting(undefined as any)).toEqual('');
      });

      it("should handle non-string inputs safely", () => {
        expect(motdParser.htmlStringFormatting(123 as any)).toEqual('');
        expect(motdParser.htmlStringFormatting({} as any)).toEqual('');
        expect(motdParser.htmlStringFormatting([] as any)).toEqual('');
      });
    });

    describe("Prevent Double Encoding", () => {
      it("should not double-encode existing HTML entities", () => {
        const input = 'This is &lt;script&gt; tag and &amp; symbol';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('This is &lt;script&gt; tag and &amp; symbol');
        expect(result).not.toContain('&amp;lt;');
        expect(result).not.toContain('&amp;amp;');
      });

      it("should encode raw special characters", () => {
        const input = 'This is <script> tag and & symbol';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('This is &lt;script&gt; tag and &amp; symbol');
      });

      it("should handle mixed encoded and raw characters", () => {
        const input = 'Mixed: &lt;encoded&gt; and <unencoded> & symbol';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Mixed: &lt;encoded&gt; and &lt;unencoded&gt; &amp; symbol');
      });

      it("should preserve numeric HTML entities", () => {
        const input = 'Contains &#39; and regular \' quotes';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Contains &#39; and regular &#39; quotes');
      });

      it("should preserve hexadecimal HTML entities", () => {
        const input = 'Contains &#x27; and regular \' quotes';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Contains &#x27; and regular &#39; quotes');
      });

      it("should not break existing &quot; entities", () => {
        const input = 'Already encoded &quot;text&quot; and new "text"';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Already encoded &quot;text&quot; and new &quot;text&quot;');
      });

      it("should not break existing &#39; entities", () => {
        const input = 'Already encoded &#39;text&#39; and new \'text\'';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Already encoded &#39;text&#39; and new &#39;text&#39;');
      });
    });

    describe("XSS Attack Protection", () => {
      it("should prevent script tag injection", () => {
        const input = '<script>document.cookie</script>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;script&gt;document.cookie&lt;/script&gt;');
        expect(result).not.toContain('<script>');
      });

      it("should prevent iframe injection", () => {
        const input = '<iframe src="javascript:alert(1)"></iframe>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;iframe src=&quot;javascript:alert(1)&quot;&gt;&lt;/iframe&gt;');
        expect(result).not.toContain('<iframe');
      });

      it("should prevent img onerror attacks", () => {
        const input = '<img src=x onerror="alert(1)">';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
        expect(result).not.toContain('onerror="alert(1)"');
      });

      it("should prevent style tag injection", () => {
        const input = '<style>body{background:url("javascript:alert(1)")}</style>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;style&gt;body{background:url(&quot;javascript:alert(1)&quot;)}&lt;/style&gt;');
        expect(result).not.toContain('<style>');
        expect(result).not.toContain('</style>');
      });

      it("should prevent data URI attacks", () => {
        const input = '<img src="data:text/html,<script>alert(1)</script>">';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;img src=&quot;data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;&quot;&gt;');
        expect(result).not.toContain('<script>');
        expect(result).not.toContain('<img');
      });

      it("should prevent event handler attributes", () => {
        const input = '<div onclick="alert(1)" onload="malicious()">content</div>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).not.toContain('onclick="alert(1)"');
        expect(result).not.toContain('onload="malicious()"');
      });
    });

    describe("Edge Cases and Special Characters", () => {
      it("should handle unicode characters properly", () => {
        const input = 'Unicode: 你好世界 🌍 <script>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Unicode: 你好世界 🌍 &lt;script&gt;');
        expect(result).toContain('你好世界 🌍');
      });

      it("should handle very long strings", () => {
        const longString = 'A'.repeat(10000) + '<script>alert(1)</script>' + 'B'.repeat(10000);
        const result = motdParser.htmlStringFormatting(longString);
        expect(result).toContain('A'.repeat(10000));
        expect(result).toContain('B'.repeat(10000));
        expect(result).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
        expect(result).not.toContain('<script>');
      });

      it("should handle multiple consecutive special characters", () => {
        const input = '<<>>""\'\'&&';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;&lt;&gt;&gt;&quot;&quot;&#39;&#39;&amp;&amp;');
      });

      it("should handle mixed newlines and special characters", () => {
        const input = 'Line 1\n<script>\nLine 2\n</script>\nLine 3';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Line 1<br/>&lt;script&gt;<br/>Line 2<br/>&lt;/script&gt;<br/>Line 3');
      });

      it("should handle numeric and hexadecimal entities correctly", () => {
        const input = 'Test &#38; test &#x26; test & test';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Test &#38; test &#x26; test &amp; test');
      });

      it("should preserve whitespace properly", () => {
        const input = '  <tag>  spaced  content  </tag>  ';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('  &lt;tag&gt;  spaced  content  &lt;/tag&gt;  ');
      });
    });

    describe("Minecraft MOTD Specific Cases", () => {
      it("should handle MOTD color codes with HTML tags", () => {
        const input = '§a<script>alert("green text")</script>§r';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('§a&lt;script&gt;alert(&quot;green text&quot;)&lt;/script&gt;§r');
        expect(result).not.toContain('<script>');
      });

      it("should handle MOTD with mixed content", () => {
        const input = '§lServer Name§r\n<script>evil</script>\n§7Welcome!';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('§lServer Name§r<br/>&lt;script&gt;evil&lt;/script&gt;<br/>§7Welcome!');
      });

      it("should preserve MOTD formatting while escaping HTML", () => {
        const input = '§a§lGreen Bold§r normal <b>fake bold</b>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('§a§lGreen Bold§r normal &lt;b&gt;fake bold&lt;/b&gt;');
        expect(result).toContain('§a§l');
        expect(result).not.toContain('<b>');
      });
    });

    describe("Performance Tests", () => {
      it("should handle extremely long input efficiently", () => {
        const hugeString = 'test<script>'.repeat(100000);
        const startTime = Date.now();
        const result = motdParser.htmlStringFormatting(hugeString);
        const endTime = Date.now();
        
        expect(endTime - startTime).toBeLessThan(1000); // Should complete within 1 second
        expect(result).not.toContain('<script>');
        expect(result).toContain('&lt;script&gt;');
      });

      it("should handle many special characters efficiently", () => {
        const specialString = '<>&"\''.repeat(10000);
        const startTime = Date.now();
        const result = motdParser.htmlStringFormatting(specialString);
        const endTime = Date.now();
        
        expect(endTime - startTime).toBeLessThan(500); // Should complete within 0.5 seconds
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });
    });

    describe("Advanced Edge Test Cases", () => {
      it("should handle malformed HTML entities", () => {
        const input = 'Test &amp &lt &gt &quot &#39 incomplete entities';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Test &amp;amp &amp;lt &amp;gt &amp;quot &amp;#39 incomplete entities');
      });

      it("should handle zero-width characters", () => {
        const input = 'Text\u200B<script>\u2060alert\u200C(1)\u200D</script>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toContain('\u200B');
        expect(result).toContain('\u2060');
        expect(result).toContain('\u200C');
        expect(result).toContain('\u200D');
        expect(result).not.toContain('<script>');
      });

      it("should handle RTL and LTR marks", () => {
        const input = 'Text\u202A<script>\u202Balert(1)\u202C</script>\u202D';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toContain('\u202A');
        expect(result).toContain('\u202B');
        expect(result).toContain('\u202C');
        expect(result).toContain('\u202D');
        expect(result).not.toContain('<script>');
      });

      it("should handle null bytes and control characters", () => {
        const input = 'Test\x00<script>\x01alert\x02(1)\x03</script>';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toContain('\x00');
        expect(result).toContain('\x01');
        expect(result).toContain('\x02');
        expect(result).toContain('\x03');
        expect(result).not.toContain('<script>');
      });

      it("should handle extremely nested HTML entities", () => {
        const input = '&amp;amp;amp;lt;script&amp;amp;gt; nested encoding';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&amp;amp;amp;lt;script&amp;amp;gt; nested encoding');
        expect(result).not.toContain('&amp;&amp;');
      });

      it("should preserve tab characters and other whitespace", () => {
        const input = 'Line 1\t<tag>\r\nLine 2\v<script>\fLine 3';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('Line 1\t&lt;tag&gt;\r<br/>Line 2\v&lt;script&gt;\fLine 3');
        expect(result).toContain('\t');
        expect(result).toContain('\v');
        expect(result).toContain('\f');
      });

      it("should handle repeated HTML entity patterns", () => {
        const input = '&lt;&lt;&lt;<>&gt;&gt;&gt;';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&lt;&lt;&lt;&lt;&gt;&gt;&gt;&gt;');
      });

      it("should handle mixed case in potential HTML entities", () => {
        const input = '&LT;Script&GT; and &AMP; test';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&amp;LT;Script&amp;GT; and &amp;AMP; test');
      });

      it("should handle incomplete hex entities", () => {
        const input = '&#x &'+ 'amp; &#39';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&amp;#x &amp; &amp;#39');
      });

      it("should handle boundaries of regex lookahead", () => {
        const input = '& &a &am &ampe &amp &amp; &amp;x';
        const result = motdParser.htmlStringFormatting(input);
        expect(result).toEqual('&amp; &amp;a &amp;am &amp;ampe &amp;amp &amp; &amp;x');
      });
    });
  });

  describe("cleanHtmlTags", () => {
    describe("basic functionality", () => {
      it("should remove basic HTML tags", () => {
        const input = '<span>Hello World</span>';
        const expectedOutput = 'Hello World';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should remove nested HTML tags", () => {
        const input = '<div><span>Hello</span> <strong>World</strong></div>';
        const expectedOutput = 'Hello World';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should handle empty input", () => {
        expect(motdParser.cleanHtmlTags('')).toEqual('');
      });

      it("should handle null/undefined input safely", () => {
        expect(motdParser.cleanHtmlTags(null as any)).toEqual('');
        expect(motdParser.cleanHtmlTags(undefined as any)).toEqual('');
      });

      it("should remove self-closing tags", () => {
        const input = 'Hello <br/> <img src="test.jpg"/> World';
        const expectedOutput = 'Hello   World';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should handle mixed case tags", () => {
        const input = '<DIV><Span>Hello</Span></DIV>';
        const expectedOutput = 'Hello';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should preserve content and remove only tags", () => {
        const input = '<div>Content with <span>nested</span> tags</div>';
        const expectedOutput = 'Content with nested tags';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });
    });

    describe("XSS prevention", () => {
      it("should prevent script injection", () => {
        const input = '<script>alert("XSS")</script>Hello World';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).toContain('Hello World');
      });

      it("should handle malicious iframe tags", () => {
        const input = '<iframe src="javascript:alert(1)">content</iframe>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('iframe');
        expect(result).not.toContain('javascript:');
        expect(result.trim()).toEqual('');
      });

      it("should remove incomplete/malformed tags", () => {
        const input = '<script src="evil.js" incomplete tag';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });

      it("should handle nested malicious content", () => {
        const input = '<<script>alert(1)<</script>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).toContain('alert(1)');
      });

      it("should remove dangerous event handlers", () => {
        const input = '<img src=x onerror=alert(1)>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('onerror');
      });

      it("should handle complex nested attacks", () => {
        const input = '<script<script>>alert(1)</script>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result.trim()).toEqual('');
      });

      it("should remove SVG with dangerous content", () => {
        const input = '<svg onload=alert(1)>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('onload');
      });

      it("should handle mixed content with dangerous elements", () => {
        const input = 'Safe text <script>dangerous()</script> more safe text';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).toContain('Safe text');
        expect(result).toContain('more safe text');
      });

      it("should remove all bracket characters for safety", () => {
        const input = 'Math: 5 < 10 > 3';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).toContain('Math: 5');
        expect(result).toContain('3');
      });

      it("should handle attributes with potential XSS", () => {
        const input = '<span style="color: red;" onclick="alert(1)">Hello</span>';
        const expectedOutput = 'Hello';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should remove HTML comments", () => {
        const input = 'Before <!-- this is a comment --> After';
        const expectedOutput = 'Before  After';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should remove style tags and content", () => {
        const input = '<style>body { background: red; }</style>Hello World';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).toEqual('Hello World');
        expect(result).not.toContain('background');
      });

      it("should handle mixed dangerous and safe content", () => {
        const input = 'Safe text <div>normal</div> more text <script>evil()</script> end text';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).toEqual('Safe text normal more text  end text');
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });

      it("should handle malformed HTML comments", () => {
        const input = 'Before <!-- incomplete comment';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).toEqual('Before');
        expect(result).not.toContain('<!--');
      });

      it("should handle nested dangerous tags correctly", () => {
        const input = '<script><iframe>nested</iframe></script>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result.trim()).toEqual('');
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });
    });

    describe("edge cases and advanced attacks", () => {
      it("should handle only tags without content", () => {
        const input = '<div></div>';
        const expectedOutput = '';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should preserve whitespace and newlines in content", () => {
        const input = '<div>\n  <p>Hello\n  World</p>\n</div>';
        const expectedOutput = 'Hello\n  World';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should handle incomplete tag at end", () => {
        const input = 'Normal text <incomplete';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).toContain('Normal text');
      });

      it("should handle multiple spaces between content", () => {
        const input = '<div>Hello   <span>   World   </span>   !</div>';
        const expectedOutput = 'Hello      World      !';
        expect(motdParser.cleanHtmlTags(input)).toEqual(expectedOutput);
      });

      it("should handle deeply nested attacks", () => {
        const input = '<div><p><span><script>malicious()</script></span></p></div>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('script');
        expect(result.trim()).toEqual('');
      });

      it("should handle multiple attack vectors in one input", () => {
        const input = '<script>evil1()</script><iframe src="javascript:evil2()"></iframe><img onerror="evil3()">';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('javascript:');
        expect(result).not.toContain('script');
        expect(result).not.toContain('iframe');
        expect(result.trim()).toEqual('');
      });

      it("should handle unicode and encoded characters", () => {
        const input = '<script>alert("unicode: \u003cscript\u003e")</script>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });

      it("should prevent data URI attacks", () => {
        const input = '<iframe src="data:text/html,<script>alert(1)</script>">content</iframe>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
        expect(result).not.toContain('iframe');
        expect(result).not.toContain('data:');
        expect(result.trim()).toEqual('');
      });
    });

    describe("performance and stability", () => {
      it("should handle very long input without hanging", () => {
        const longInput = '<div>' + 'A'.repeat(10000) + '</div>';
        const result = motdParser.cleanHtmlTags(longInput);
        expect(result).toEqual('A'.repeat(10000));
      });

      it("should handle many nested tags", () => {
        let nestedInput = 'content';
        for (let i = 0; i < 100; i++) {
          nestedInput = `<div>${nestedInput}</div>`;
        }
        const result = motdParser.cleanHtmlTags(nestedInput);
        expect(result).toEqual('content');
      });

      it("should handle empty tags", () => {
        const input = '<><><>';
        const result = motdParser.cleanHtmlTags(input);
        expect(result).not.toContain('<');
        expect(result).not.toContain('>');
      });
    });
  });
}); 