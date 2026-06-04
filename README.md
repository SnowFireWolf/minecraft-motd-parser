# Minecraft Server MOTD Parser

![Version](https://img.shields.io/github/languages/top/SnowFireWolf/minecraft-motd-parser?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/@sfirew/minecraft-motd-parser?label=version&style=for-the-badge)](https://www.npmjs.com/package/@sfirew/minecraft-motd-parser?style=for-the-badge)
[![License](https://img.shields.io/npm/l/minecraft-server-util?style=for-the-badge)](https://github.com/SnowFireWolf/minecraft-motd-parser/blob/master/LICENSE)
![npm weekly downloads](https://img.shields.io/npm/dw/@sfirew/minecraft-motd-parser?style=for-the-badge)

A powerful and lightweight library to parse Minecraft server MOTD (Message of the Day) data into various formats.

## Quick Decision Table

Not sure which function to use? Find your use case below:

| What you want | Function | When to use |
|---------------|----------|------------|
| 🎯 **Convert to HTML** (any format) | `autoToHTML` | You don't know if input is text or JSON |
| 🎯 **Extract plain text** (any format) | `autoCleanToText` | You need clean text, format unknown |
| Format HTML from `§` text | `textToHTML` | Input is definitely `§` formatted text |
| Format HTML from JSON | `JSONToHTML` | Input is definitely a JSON object |
| Extract text from `§` text | `cleanCodes` | Remove § codes from text string |
| Extract text from JSON | `JSONToCleanedText` | Extract plain text from JSON object |
| Parse `§` text to JSON | `textToJSON` | Convert text format to JSON structure |

**Tip:** Start with the 🎯 marked functions if unsure. They auto-detect input format.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Use Cases](#use-cases)
- [Visual Examples](#visual-examples)
- [Advanced API Reference](#advanced-api-reference)
- [Contributing](#contributing)



## Features

✨ **Zero Dependencies** - Lightweight and fast  
🔄 **Auto Detection** - Automatically detects MOTD data type  
🎨 **Multiple Formats** - Convert to HTML, JSON, or clean text  
🌈 **Full Color Support** - Including Minecraft 1.16+ hex colors  
📦 **Module Support** - CommonJS, ES Modules, and tree shaking  
🎯 **TypeScript Ready** - Full TypeScript support



## Installation

Choose your favorite package manager:

```bash
# npm
npm install @sfirew/minecraft-motd-parser

# yarn
yarn add @sfirew/minecraft-motd-parser

# pnpm
pnpm add @sfirew/minecraft-motd-parser
```



## Quick Start

Choose your import style:

**ES6 Modules**
```typescript
import { autoToHTML } from '@sfirew/minecraft-motd-parser'
```

**CommonJS**
```javascript
const { autoToHTML } = require('@sfirew/minecraft-motd-parser')
```

Then use it the same way:

```typescript
const motd = "§aHypixel §7Network §c1.8-1.19";
const html = autoToHTML(motd);
// → <span style="color:#55FF55;">Hypixel </span><span style="color:#AAAAAA;">Network </span><span style="color:#FF5555;">1.8-1.19</span>

// Works with JSON too
const json = { text: "", extra: [{ color: "green", text: "Hello" }] };
console.log(autoToHTML(json)); // Detects format automatically
```



## Use Cases

### Converting to HTML

#### Automatic format detection (recommended for most cases)

```typescript
import { autoToHTML } from '@sfirew/minecraft-motd-parser'

// Works with both text and JSON formats - detects automatically
const textMOTD = "§aHypixel §cNetwork";
const jsonMOTD = { text: "", extra: [{ color: "green", text: "Hello" }] };

console.log(autoToHTML(textMOTD));   // <span style="color:#55FF55;">Hypixel </span><span style="color:#FF5555;">Network</span>
console.log(autoToHTML(jsonMOTD));   // <span style="color:#55FF55;">Hello</span>
```

#### From `§` formatted text

```typescript
import { textToHTML } from '@sfirew/minecraft-motd-parser'

const motd = "§aGreen §lBold §rReset §cRed";
const html = textToHTML(motd);
```

#### From JSON object

```typescript
import { JSONToHTML, JSONRender } from '@sfirew/minecraft-motd-parser'

const motdJson = {
  text: "",
  extra: [
    { color: "green", text: "Hello " },
    { color: "blue", text: "World", bold: true }
  ]
};

// JSONToHTML: strict type checking
const html1 = JSONToHTML(motdJson);

// JSONRender: works with any object (useful when parsing JSON from servers)
const serverResponse = JSON.parse(apiResponse);
const html2 = JSONRender(serverResponse);
```

### Extracting Plain Text

#### Automatic format detection

```typescript
import { autoCleanToText } from '@sfirew/minecraft-motd-parser'

const motd = "§aHypixel §c1.8-1.19";
console.log(autoCleanToText(motd)); // "Hypixel 1.8-1.19"

// Also works with JSON
const json = { text: "Welcome", extra: [{ text: " to Hypixel" }] };
console.log(autoCleanToText(json)); // "Welcome to Hypixel"
```

#### From `§` formatted text

```typescript
import { cleanCodes } from '@sfirew/minecraft-motd-parser'

const motd = "§aServer §bStatus";
const clean = cleanCodes(motd); // "Server Status"
```

#### From JSON object

```typescript
import { JSONToCleanedText } from '@sfirew/minecraft-motd-parser'

const motdJson = {
  text: "Welcome",
  extra: [{ color: "green", text: " to", bold: true }, { text: " Hypixel" }]
};
const text = JSONToCleanedText(motdJson); // "Welcome to Hypixel"
```

### Converting Format

#### Parse `§` text to JSON structure

```typescript
import { textToJSON } from '@sfirew/minecraft-motd-parser'

const motd = "§aHello §bWorld";
const json = textToJSON(motd);
// → { text: "", extra: [{ color: "#55FF55", text: "Hello " }, { color: "#5555FF", text: "World" }] }
```

### Advanced: Data Sanitization

#### Remove HTML tags safely (XSS prevention)

```typescript
import { cleanHtmlTags } from '@sfirew/minecraft-motd-parser'

const untrusted = '<span>Hello</span><script>alert("xss")</script> World';
const safe = cleanHtmlTags(untrusted); // "Hello World"
```

#### Escape HTML special characters

```typescript
import { htmlStringFormatting } from '@sfirew/minecraft-motd-parser'

const userInput = '<script>alert("xss")</script>';
const safe = htmlStringFormatting(userInput);
// → "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
```

#### Validate MOTD JSON format (TypeScript)

```typescript
import { isMotdJSONType, JSONToHTML } from '@sfirew/minecraft-motd-parser'

const data: unknown = JSON.parse(response);
if (isMotdJSONType(data)) {
  const html = JSONToHTML(data);
} else {
  console.error('Invalid MOTD JSON format');
}
```



## Visual Examples

The parser supports rich formatting including colors, bold, italic, underline, and strikethrough text.

### With Minecraft Font
![Minecraft Font Example](https://user-images.githubusercontent.com/14024836/149810729-71909ca5-5705-43cf-ab3c-bdd66db00b78.png)

### Standard Font
![Standard Font Example](https://user-images.githubusercontent.com/14024836/149811501-d1376d90-d9ad-4092-912a-de1f78fa42eb.png)

> **Try it live**: Check out the [Minecraft Server Status Viewer](https://mcsv.top/server/mc.hypixel.net) to see the parser in action.

## Advanced API Reference

Complete API documentation for all functions. Most users can stick with the [Use Cases](#use-cases) section above.

### Core Functions

#### `autoToHTML(data: string | object): string`
Automatically detects MOTD data type (text or JSON) and converts to HTML.

```typescript
const textResult = autoToHTML("§aGreen §lBold");
const jsonResult = autoToHTML({ color: "green", text: "Hello", bold: true });
```

#### `autoCleanToText(data: string | object): string`
Automatically detects MOTD data type and returns plain text.

```typescript
const text = autoCleanToText("§aServer §cStatus");
```

#### `textToHTML(text: string): string`
Converts `§` formatted text to HTML.

```typescript
const html = textToHTML("§aGreen §lBold §rReset §cRed");
```

#### `textToJSON(text: string): object`
Parses `§` formatted text into JSON structure.

```typescript
const json = textToJSON("§aHello §bWorld");
// → { text: "", extra: [{ color: "#55FF55", text: "Hello " }, ...] }
```

#### `JSONToHTML(json: object): string`
Converts MOTD JSON object to HTML.

```typescript
const html = JSONToHTML({
  text: "",
  extra: [{ color: "green", text: "Hello", bold: true }]
});
```

#### `JSONRender(json: object): string`
Type-loose wrapper around `JSONToHTML`. Accepts any object without strict type checking.

```typescript
const serverData = JSON.parse(apiResponse);
const html = JSONRender(serverData);
```

#### `JSONToCleanedText(json: object): string`
Extracts plain text from MOTD JSON object.

```typescript
const text = JSONToCleanedText({
  text: "Welcome",
  extra: [{ text: " to Hypixel", color: "green" }]
});
// → "Welcome to Hypixel"
```

### Utility Functions

#### `cleanCodes(text: string): string`
Removes all `§` formatting codes from text.

```typescript
const clean = cleanCodes("§aServer §bStatus"); // "Server Status"
```

#### `cleanHtmlTags(text: string): string`
Safely removes HTML tags using FSM-based parsing. Dangerous tags (script, iframe, etc.) are removed along with their contents for XSS prevention.

```typescript
const safe = cleanHtmlTags('<span>Hello</span><script>bad()</script>');
// → "Hello"
```

#### `htmlStringFormatting(text: string): string`
Escapes HTML special characters to entities. Prevents double-encoding of existing entities.

```typescript
const safe = htmlStringFormatting('<script>alert("xss")</script>');
// → "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
```

#### `isMotdJSONType(object: unknown): object is motdJsonType`
TypeScript type guard to validate MOTD JSON format.

```typescript
if (isMotdJSONType(data)) {
  const html = JSONToHTML(data);
}
```

### Complex Examples

```typescript
import motdParser from '@sfirew/minecraft-motd-parser'

// Text format example
const textExample = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
console.log(motdParser.autoToHTML(textExample));

// JSON format example
const jsonExample = {
  "text": "",
  "extra": [
    { "bold": true, "color": "gold", "text": "Viper " },
    { "color": "gray", "text": "┃ " },
    { "color": "yellow", "text": "Summer Sale" },
    { "color": "white", "text": " at " },
    { "color": "gold", "text": "store.vipermc.net\n" }
  ]
};
console.log(motdParser.autoToHTML(jsonExample));
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


