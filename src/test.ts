import { motdParser } from './index';

const text = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";//
const json = '{"text":"","extra":[{"text":"Hypixel Network ","extra":[{"text":"","extra":[{"text":"1.8/1.9/1.10/1.11/1.12 ","extra":[{"text":"","extra":[{"text":"NEW PTL GAME:","extra":[{"text":"","extra":[{"text":" THE BRIDGE","extra":[],"bold":true}],"color":"acqua"}],"bold":true}],"color":"yellow"}],"color":"red"}],"color":"gray"}],"color":"green"}]}';
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

let start = 0;



// clean tags
console.log('清除 MOTD Tags HTML')
start = new Date().getTime();
let cleanedString = motdParser.cleanTags(text)

console.log(cleanedString)
console.log(`執行時間: ${(new Date().getTime() - start)} ms`)



// text to html
console.log('文字轉成 HTML')
start = new Date().getTime();
let motdHtml = motdParser.textToHTML(text)

console.log(motdHtml)
console.log(`執行時間: ${(new Date().getTime() - start)} ms`)



// text to html
console.log('文字轉成 JSON')
start = new Date().getTime();
let textToHtml = motdParser.textToJSON(text)

console.log(textToHtml)
console.log(`執行時間: ${(new Date().getTime() - start)} ms`)



// json to html
console.log('JSON 轉成 HTML')
start = new Date().getTime();
let jsonToHtml = motdParser.JSONToHtml(JSON.parse(json))
let jsonToHtml2 = motdParser.JSONToHtml(mcfalloutJson)

console.log(jsonToHtml)
console.log('-------------------------')
console.log(jsonToHtml2)
console.log(`執行時間: ${(new Date().getTime() - start)} ms`)



// 自動類型
console.log('自動檢查類型並轉成 HTML')
start = new Date().getTime();
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

let textExample = "§5§m                  §6>§7§l§6§l>§6§l[§5§l§oPurple §8§l§oPrison§6§l]§6§l<§6<§5§m                     §R §7   §5§k§l;;;§r  §d§lNEW BLACK-MARKET §5§l» §6§L/BLACKMARKET  §5§k§l;;;";
let autoToHtml = motdParser.autoToHtml(jsonExample)
let TextAutoToHtml = motdParser.autoToHtml(textExample)

console.log('-------------------------')
console.log(autoToHtml)
console.log('-------------------------')
console.log(TextAutoToHtml)
console.log(`執行時間: ${(new Date().getTime() - start)} ms`)