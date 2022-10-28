# Minecraft Server MOTD Parser
![Version](https://img.shields.io/github/languages/top/SnowFireWolf/minecraft-motd-parser?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/@sfirew/mc-motd-parser?label=version&style=for-the-badge)](https://www.npmjs.com/package/@sfirew/mc-motd-parser?style=for-the-badge)
[![License](https://img.shields.io/npm/l/minecraft-server-util?style=for-the-badge)](https://github.com/SnowFireWolf/minecraft-motd-parser/blob/master/LICENSE)
![npm weekly downloads](https://img.shields.io/npm/dw/@sfirew/mc-motd-parser?style=for-the-badge)



## Introduction
Can convert minecraft server motd data to text, json, html, and clean tags.

Support **1.16** custom **hex color** parser, Support auto check motd data type.

Don't have other dependencies.


### Some good custom motd hex color servers
The parser does not have the Minecraft font by default.

#### Minecraft font example
![Image_2022_01_2022d-2022h_58___002](https://user-images.githubusercontent.com/14024836/149810729-71909ca5-5705-43cf-ab3c-bdd66db00b78.png)

![Image_2022_01_2022d-2022h_00___004](https://user-images.githubusercontent.com/14024836/149811040-5ddc35a0-38cf-4434-856a-968c94a4d6b4.png)

#### No Minecraft font
![Image_2022_01_2022d-2022h_04___003](https://user-images.githubusercontent.com/14024836/149811501-d1376d90-d9ad-4092-912a-de1f78fa42eb.png)

![Image_2022_01_2022d-2022h_01___002](https://user-images.githubusercontent.com/14024836/149811151-d9270d63-aead-46f9-b496-c88eb3b00c72.png)


You can try server status view in my created service

![https://mcsv.top/server/play.mcforests.com](https://sr-api.sfirew.com/server/play.mcforests.com/banner/motd.png?hl=en&v=MI84ydhafV)
[https://mcsv.top/server/play.mcforests.com](https://mcsv.top/server/play.mcforests.com)



## Installation
### NPM
```bash
$ npm install @sfirew/mc-motd-parser
```

### yarn
```bash
$ yarn add @sfirew/mc-motd-parser
```



## Usage
support **deno** and **node.js**

### CommonJS
```typescript
const { motdParser } = require('@sfirew/mc-motd-parser');
```

### ES6 Modules
```typescript
import { motdParser } from '@sfirew/mc-motd-parser'
```

### Deno
```typescript
import { motdParser } from "https://deno.land/x/minecraft_motd_parser@v1.0.4-deno-main/mod.ts";
```



## Example
Some examples here, you can use **TypeScript** or **JavaScript**.


### `cleanTags(string)`
clean text color tags.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
let result = motdParser.cleanTags(motdText);
console.log(result);

/* result, callback Text:
 * Hypixel Network 1.8/1.9/1.10/1.11/1.12 NEW PTL GAME: THE BRIDGE
 */
```


### `autoToHtml(string | object)`
auto check data type then return same html result.

```typescript
let jsonExample = {
  "extra": [
    {
      "bold": true,
      "color": "gold",
      "text": "Viper "
    },
    {
      "color": "gray",
      "text": "┃ "
    },
    {
      "color": "yellow",
      "text": "Summer Sale"
    },
    {
      "color": "white",
      "text": " at "
    },
    {
      "color": "gold",
      "text": "store.vipermc.net\n"
    },
    {
      "color": "gray",
      "text": "► "
    },
    {
      "color": "yellow",
      "text": "EOTW "
    },
    {
      "color": "white",
      "text": "on "
    },
    {
      "color": "gold",
      "text": "Infernal"
    },
    {
      "color": "white",
      "text": " is this Thursday at "
    },
    {
      "color": "yellow",
      "text": "5PM ET"
    },
    {
      "color": "white",
      "text": "."
    }
  ],
  "text": ""
};
let autoJsonResult = motdParser.autoToHtml(jsonExample);
console.log(autoJsonResult);

/* auto JSON Result, callback HTML:
<span style="color: #FFAA00;font-weight: bold;">Viper </span><span style="color: #AAAAAA;">┃ </span><span style="color: #FFFF55;">Summer Sale</span><span style="color: #FFFFFF;"> at </span><span style="color: #FFAA00;">store.vipermc.net<br/></span><span style="color: #AAAAAA;">► </span><span style="color: #FFFF55;">EOTW </span><span style="color: #FFFFFF;">on </span><span style="color: #FFAA00;">Infernal</span><span style="color: #FFFFFF;"> is this Thursday at </span><span style="color: #FFFF55;">5PM ET</span><span style="color: #FFFFFF;">.</span>
*/

let textExample = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
let autoTextResult = motdParser.autoToHtml(textExample);
console.log(autoTextResult);

/* auto Text Result, callback HTML:
<span style="color: #55FF55;">Hypixel Network <span style="color: #AAAAAA;"><span style="color: #FF5555;">1.8/1.9/1.10/1.11/1.12 <span style="color: #FFFF55;"><span style="font-weight: bold;">NEW PTL GAME:<span style="color: acqua;"><span style="font-weight: bold;"> THE BRIDGE</span></span></span></span></span></span></span>
*/
```



### `textToHTML(string)`
convert motd text to html.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
let result = motdParser.textToHTML(motdText);
console.log(result);

/* result, callback HTML:
 * <span style="color: #55FF55;">Hypixel Network <span style="color: #AAAAAA;"><span style="color: #FF5555;">1.8/1.9/1.10/1.11/1.12 <span style="color: #FFFF55;"><span style="font-weight: bold;">NEW PTL GAME:<span style="color: acqua;"><span style="font-weight: bold;"> THE BRIDGE</span></span></span></span></span></span></span>
 */
```

![Image_2021_08_2021d-2021h_23___001](https://user-images.githubusercontent.com/14024836/129277576-e94914f3-35f7-45a6-8ba3-58163f71d5a1.png)




### `textToJSON(string)`
convert motd json to html.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
let result = motdParser.textToJSON(motdText);
console.log(result);

/* result, callback JSON:
{
  text: '',
  extra: [
    { text: '', extra: [] },
    { text: 'Hypixel Network ', extra: [], color: '#55FF55' },
    { text: '', extra: [], color: '#AAAAAA' },
    { text: '1.8/1.9/1.10/1.11/1.12 ', extra: [], color: '#FF5555' },
    { text: '', extra: [], color: '#FFFF55' },
    { text: 'NEW PTL GAME:', extra: [], bold: true, color: '#FFFF55' },
    { text: '', extra: [], bold: true, color: '#55FFFF' },
    { text: ' THE BRIDGE', extra: [], bold: true, color: '#55FFFF' }
  ]
}
 */
```


### `JSONToHtml(object)`
convert text to motd json.
```typescript
let mcfalloutJson = {
  "extra": [
    {
      "color": "gray",
      "text": "  "
    },
    {
      "color": "gold",
      "text": "廢土伺服器  "
    },
    {
      "color": "white",
      "text": "mcFallout.net"
    },
    {
      "color": "dark_gray",
      "text": " - "
    },
    {
      "color": "gray",
      "text": "版本 1.17.1 "
    },
    {
      "color": "gold",
      "text": "洞穴"
    },
    {
      "color": "light_purple",
      "text": "與"
    },
    {
      "color": "aqua",
      "text": "山崖\n"
    },
    {
      "color": "gray",
      "text": "  "
    },
    {
      "color": "dark_gray",
      "text": "享受工廠、農場、建築與紅石"
    }
  ],
  "text": ""
}
let result = motdParser.JSONToHtml(mcfalloutJson);
console.log(result)

/* result, callback HTML:
<span style="color: #AAAAAA;">  </span><span style="color: #FFAA00;">廢土伺服器  </span><span style="color: #FFFFFF;">mcFallout.net</span><span style="color: #555555;"> - </span><span style="color: #AAAAAA;">版本 1.17.1 </span><span style="color: #FFAA00;">洞穴</span><span style="color: #FF55FF;">與</span><span style="color: #55FFFF;">山崖<br/></span><span style="color: #AAAAAA;">  </span><span style="color: #555555;">享受工廠、農場、建築與紅石</span>
*/
```

![Image_2021_08_2021d-2021h_24___001](https://user-images.githubusercontent.com/14024836/129277638-fe8c5735-54fe-4ff1-afc5-4b5493706be9.png)


