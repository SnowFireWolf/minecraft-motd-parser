import motdParser from "../src";

const text =
  "§f§l『§e§lFC夢幻峽谷§f§l』 §7§lFantasyCanyon \n §b§l<<§9§l◎§b§l------------§e§l加入冒險!§b§l------------§9§l◎§b§l>>";

let start = 0;

// clean tags
console.log("清除 MOTD Tags HTML");
start = new Date().getTime();
let cleanedString = motdParser.cleanTags(text);

console.log(cleanedString);
console.log(`執行時間: ${new Date().getTime() - start} ms`);

// text to html
console.log("自動轉成 HTML");
start = new Date().getTime();

const motdHtml = motdParser.autoToHtml(text);
console.log("-------------------------");
console.log(motdHtml);
console.log("-------------------------");

console.log(`執行時間: ${new Date().getTime() - start} ms`);

// mcfallout test
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

const mcfalloutMotdHtml = motdParser.autoToHtml(mcfalloutSourceMotd);
console.log("-------------------------");
console.log(mcfalloutMotdHtml);
console.log("-------------------------");
