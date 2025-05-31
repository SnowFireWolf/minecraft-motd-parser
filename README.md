# Minecraft Server MOTD Parser

![Version](https://img.shields.io/github/languages/top/SnowFireWolf/minecraft-motd-parser?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/@sfirew/minecraft-motd-parser?label=version&style=for-the-badge)](https://www.npmjs.com/package/@sfirew/minecraft-motd-parser?style=for-the-badge)
[![License](https://img.shields.io/npm/l/minecraft-server-util?style=for-the-badge)](https://github.com/SnowFireWolf/minecraft-motd-parser/blob/master/LICENSE)
![npm weekly downloads](https://img.shields.io/npm/dw/@sfirew/minecraft-motd-parser?style=for-the-badge)

A powerful and lightweight library to parse Minecraft server MOTD (Message of the Day) data into various formats.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [Auto Detection](#auto-detection)
  - [Text Parsing](#text-parsing)
  - [JSON Parsing](#json-parsing)
  - [Clean Text](#clean-text)
- [Examples](#examples)
- [Visual Examples](#visual-examples)
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

### ES6 Modules
```typescript
import { autoToHTML } from '@sfirew/minecraft-motd-parser'

const motd = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
const html = autoToHTML(motd);
console.log(html);
```

### CommonJS
```typescript
const { autoToHTML } = require('@sfirew/minecraft-motd-parser');
```

### Default Import
```typescript
import motdParser from '@sfirew/minecraft-motd-parser'
motdParser.autoToHTML('motdString...');
```

## API Reference

### Auto Detection

#### `autoToHTML(data: string | object): string`
Automatically detects the MOTD data type and converts it to HTML.

```typescript
import { autoToHTML } from '@sfirew/minecraft-motd-parser'

// Works with both text and JSON formats
const textMOTD = "§aHypixel Network §c1.8-1.19";
const jsonMOTD = { text: "", extra: [{ color: "green", text: "Hello World" }] };

console.log(autoToHTML(textMOTD));
console.log(autoToHTML(jsonMOTD));
```

#### `autoCleanToText(data: string | object): string`
Automatically detects the MOTD data type and returns clean text without formatting codes.

```typescript
import { autoCleanToText } from '@sfirew/minecraft-motd-parser'

const motd = "§aHypixel Network §c1.8-1.19";
console.log(autoCleanToText(motd)); // "Hypixel Network 1.8-1.19"
```

### Text Parsing

#### `textToHTML(text: string): string`
Converts MOTD text format to HTML.

```typescript
import { textToHTML } from '@sfirew/minecraft-motd-parser'

const motd = "§aGreen §lBold §rReset §cRed";
const html = textToHTML(motd);
// Output: <span style="color:#55FF55;">Green <span style="font-weight:bold;">Bold </span></span><span style="color:#FF5555;">Red</span>
```

#### `textToJSON(text: string): object`
Converts MOTD text format to JSON structure.

```typescript
import { textToJSON } from '@sfirew/minecraft-motd-parser'

const motd = "§aHello §bWorld";
const json = textToJSON(motd);
console.log(json);
```

### JSON Parsing

#### `JSONToHTML(json: object): string`
Converts MOTD JSON format to HTML.

```typescript
import { JSONToHTML } from '@sfirew/minecraft-motd-parser'

const motdJson = {
  text: "",
  extra: [
    { color: "green", text: "Hello " },
    { color: "blue", text: "World", bold: true }
  ]
};

const html = JSONToHTML(motdJson);
```

### Clean Text

#### `cleanCodes(text: string): string`
Removes all formatting codes from MOTD text.

```typescript
import { cleanCodes } from '@sfirew/minecraft-motd-parser'

const motd = "§aHypixel Network §c1.8-1.19";
const clean = cleanCodes(motd);
console.log(clean); // "Hypixel Network 1.8-1.19"
```

## Examples

### Complex MOTD with Multiple Formats

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

### Hex Color Support (Minecraft 1.16+)

```typescript
// The parser automatically handles hex colors
const hexMotd = "§x§§f§f§0§0§0§0Hello §x§§0§0§f§f§0§0World";
console.log(autoToHTML(hexMotd));
```

## Visual Examples

The parser supports rich formatting including colors, bold, italic, underline, and strikethrough text.

### With Minecraft Font
![Minecraft Font Example](https://user-images.githubusercontent.com/14024836/149810729-71909ca5-5705-43cf-ab3c-bdd66db00b78.png)

### Standard Font
![Standard Font Example](https://user-images.githubusercontent.com/14024836/149811501-d1376d90-d9ad-4092-912a-de1f78fa42eb.png)

> **Try it live**: Check out the [Minecraft Server Status Viewer](https://mcsv.top/server/mc.hypixel.net) to see the parser in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


