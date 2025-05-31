import motdParser from "../src";




const text =
  "§f§l『§e§lFC夢幻峽谷§f§l』 §7§lFantasyCanyon \n §b§l<<§9§l◎§b§l------------§e§l加入冒險!§b§l------------§9§l◎§b§l>>";

let start = 0;

// clean tags
console.log("清除 MOTD Tags HTML");
start = performance.now();
const cleanedString = motdParser.cleanCodes(text);

console.log(cleanedString);
console.log(`執行時間: ${performance.now() - start} ms`);




// text to cleaned text
console.log("自動轉成 TEXT");
start = performance.now();

const motdText = motdParser.autoCleanToText(text);
console.log("-------------------------");
console.log(motdText);
console.log("-------------------------");

console.log(`執行時間: ${performance.now() - start} ms`);






// json object test
const mcfalloutSourceMotd = {
  extra: [
    {
      color: "gray",
      text: "  ",
    },
    {
      color: "gold",
      text: "廢土伺服器  ",
    },
    {
      color: "white",
      text: "mcFallout.net",
    },
    {
      color: "dark_gray",
      text: " - ",
    },
    {
      color: "gray",
      text: "1.18 版本更新中 \n",
    },
    {
      color: "gray",
      text: "  ",
    },
    {
      color: "red",
      text: "更新時間 2022/1/18(二) 00:00AM ~ 2022/1/19(三) 06:00PM 暫停服務",
    },
  ],
  text: "",
};

const mcfalloutMotdHtml = motdParser.autoCleanToText(mcfalloutSourceMotd);
console.log("-------------------------");
console.log(mcfalloutMotdHtml);
console.log("-------------------------");




// json object test
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

const jsonObjectTestTwo = motdParser.autoCleanToText(testMotdJSON);
console.log("-------------------------");
console.log(jsonObjectTestTwo);
console.log("-------------------------");


