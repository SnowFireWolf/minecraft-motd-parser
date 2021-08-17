# Minecraft Server MOTD Parser
Can convert minecraft server motd data to text, json, html, and clean tags.

Support 1.16 custom color parser.

Support text, json to html.

Support auto check motd data type.

Don't have other dependencies.



# Installation
## NPM
```bash
$ npm install @sfirew/mc-motd-parser
```

## yarn
```bash
$ yarn add @sfirew/mc-motd-parser
```

## Deno
```typescript
import { motdParser } from "https://deno.land/x/minecraft_motd_parser/mod.ts";
```



# Usuage
support **deno** and **node.js**

## ES6 Modules
```typescript
import { motdParser } from '@sfirew/mc-motd-parser'
```



# Example
Some examples here, use typescript.


## `cleanTags(string)`
clean text color tags
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
motdParser.cleanTags(motdText);
```

result:
```text
Hypixel Network 1.8/1.9/1.10/1.11/1.12 NEW PTL GAME: THE BRIDGE
```


## `textToHTML(string)`
convert motd text to html.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
motdParser.textToHTML(motdText);
```

result:
```html
<span style="color: #55FF55;">Hypixel Network <span style="color: #AAAAAA;"><span style="color: #FF5555;">1.8/1.9/1.10/1.11/1.12 <span style="color: #FFFF55;"><span style="font-weight: bold;">NEW PTL GAME:<span style="color: acqua;"><span style="font-weight: bold;"> THE BRIDGE</span></span></span></span></span></span></span>
```
![Image_2021_08_2021d-2021h_23___001](https://user-images.githubusercontent.com/14024836/129277576-e94914f3-35f7-45a6-8ba3-58163f71d5a1.png)



## `textToJSON(string)`
convert motd json to html.
```typescript
let motdText = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";
motdParser.textToJSON(motdText);
```

result:
```typescript
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
```


## `JSONToHtml(object)`
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
motdParser.JSONToHtml(mcfalloutJson);
```

result:
```html
<span style="color: #AAAAAA;">  </span><span style="color: #FFAA00;">廢土伺服器  </span><span style="color: #FFFFFF;">mcFallout.net</span><span style="color: #555555;"> - </span><span style="color: #AAAAAA;">版本 1.17.1 </span><span style="color: #FFAA00;">洞穴</span><span style="color: #FF55FF;">與</span><span style="color: #55FFFF;">山崖<br/></span><span style="color: #AAAAAA;">  </span><span style="color: #555555;">享受工廠、農場、建築與紅石</span>
```
![Image_2021_08_2021d-2021h_24___001](https://user-images.githubusercontent.com/14024836/129277638-fe8c5735-54fe-4ff1-afc5-4b5493706be9.png)




## `autoToHtml(string | object)`
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
motdParser.autoToHtml(jsonExample);


let textExample = {"text":"","extra":[{"text":"Hypixel Network ","extra":[{"text":"","extra":[{"text":"1.8/1.9/1.10/1.11/1.12 ","extra":[{"text":"","extra":[{"text":"NEW PTL GAME:","extra":[{"text":"","extra":[{"text":" THE BRIDGE","extra":[],"bold":true}],"color":"acqua"}],"bold":true}],"color":"yellow"}],"color":"red"}],"color":"gray"}],"color":"green"}]};
motdParser.autoToHtml(textExample);
```

result:
`from json data`
```html
<span style="color: #FFAA00;font-weight: bold;">Viper </span><span style="color: #AAAAAA;">┃ </span><span style="color: #FFFF55;">Summer Sale</span><span style="color: #FFFFFF;"> at </span><span style="color: #FFAA00;">store.vipermc.net<br/></span><span style="color: #AAAAAA;">► </span><span style="color: #FFFF55;">EOTW </span><span style="color: #FFFFFF;">on </span><span style="color: #FFAA00;">Infernal</span><span style="color: #FFFFFF;"> is this Thursday at </span><span style="color: #FFFF55;">5PM ET</span><span style="color: #FFFFFF;">.</span>
```

result:
`from text`
```html
<span style="color: #AA00AA;"></span><span style="color: #AA00AA;text-decoration: line-through;">                  </span><span style="color: #FFAA00;text-decoration: line-through;">></span><span style="color: #AAAAAA;text-decoration: line-through;"></span><span style="color: #AAAAAA;font-weight: bold;"></span><span style="color: #FFAA00;font-weight: bold;"></span><span style="color: #FFAA00;font-weight: bold;">></span><span style="color: #FFAA00;font-weight: bold;"></span><span style="color: #FFAA00;font-weight: bold;">[</span><span style="color: #AA00AA;font-weight: bold;"></span><span style="color: #AA00AA;font-weight: bold;"></span><span style="color: #AA00AA;font-style: italic;">Purple </span><span style="color: #555555;font-style: italic;"></span><span style="color: #555555;font-weight: bold;"></span><span style="color: #555555;font-style: italic;">Prison</span><span style="color: #FFAA00;font-style: italic;"></span><span style="color: #FFAA00;font-weight: bold;">]</span><span style="color: #FFAA00;font-weight: bold;"></span><span style="color: #FFAA00;font-weight: bold;"><</span><span style="color: #FFAA00;font-weight: bold;"><</span><span style="color: #AA00AA;font-weight: bold;"></span><span style="color: #AA00AA;text-decoration: line-through;">                     </span><span style="color: #AA00AA;"> </span><span style="color: #AAAAAA;">   </span><span style="color: #AA00AA;"></span><span style="color: #AA00AA;mc_obfuscated;"></span><span style="color: #AA00AA;font-weight: bold;">;;;</span><span style="color: #AA00AA;">  </span><span style="color: #FF55FF;"></span><span style="color: #FF55FF;font-weight: bold;">NEW BLACK-MARKET </span><span style="color: #AA00AA;font-weight: bold;"></span><span style="color: #AA00AA;font-weight: bold;">» </span><span style="color: #FFAA00;font-weight: bold;"></span><span style="color: #FFAA00;font-weight: bold;">/BLACKMARKET  </span><span style="color: #AA00AA;font-weight: bold;"></span><span style="color: #AA00AA;mc_obfuscated;"></span><span style="color: #AA00AA;font-weight: bold;">;;;</span>
```
