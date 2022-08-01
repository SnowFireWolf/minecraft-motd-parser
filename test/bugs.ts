import { motdParser } from '../src';
import type { motdJsonType } from '../src/types';


const testString = `                §aHypixel Network §c[1.8-1.19]
§B§LNEW: DROPPER §7§l| §6§lSUMMER EVENT§7§l+§e§lSALE`;

const replacedString = testString.replace(/&/g, '§');
console.log(motdParser.autoToHtml(replacedString));


// const testFromCodeBug = `&r&f                &r&9&m&l   &r&8&m&l[ &r&f &r&6&lMineplex&r&f &r&f&lGames&r&f &r&8&m&l ]&r&9&m&l   &r&f
//                         &r&e&lSTATS REVAMP&r &a&l&n testesest
// `;
// const replacedString = testFromCodeBug.replace(/&/g, '§');
// console.log(motdParser.autoToHtml(replacedString));






// const testNumberContentFromJson: motdJsonType = {
//   "extra":  
//     [{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"life boost: "}, 
//     {"italic":false,"color":"white","text":5}],
//   "text":""
// }
// console.log(motdParser.autoToHtml(testNumberContentFromJson));







// console.log('--------------------------------------------');
// const testString = 'Minecraft Server';
// console.log(motdParser.autoToHtml(testString));






// console.log('----------------------------------------');
// const testFromCode = `§e§l§m-------------§r§7§l[ §f§lMC §c§lPGST §7§l]§e§l§m------------§r
// §7Pixelmon §f8.4.2 §8| §e§l造型寶可夢 §8| §e§l懸賞系統 §8| §e§l自製系統      `;
// console.log(motdParser.autoToHtml(testFromCode));
// console.log('----------------------------------------');





// const testFromJSON = {
//   "extra": [
//     {
//       "color": "#808080",
//       "text": "             "
//     },
//     {
//       "bold": true,
//       "italic": false,
//       "underlined": false,
//       "strikethrough": false,
//       "obfuscated": false,
//       "extra": [
//         {
//           "color": "#1991EA",
//           "text": "D"
//         },
//         {
//           "color": "#1C93EB",
//           "text": "r"
//         },
//         {
//           "color": "#2096EC",
//           "text": "e"
//         },
//         {
//           "color": "#2499ED",
//           "text": "a"
//         },
//         {
//           "color": "#289CEE",
//           "text": "m"
//         },
//         {
//           "color": "#2C9EEF",
//           "text": "C"
//         },
//         {
//           "color": "#30A1F0",
//           "text": "r"
//         },
//         {
//           "color": "#33A4F1",
//           "text": "a"
//         },
//         {
//           "color": "#37A7F2",
//           "text": "f"
//         },
//         {
//           "color": "#3BA9F3",
//           "text": "t"
//         },
//         {
//           "color": "#3FACF4",
//           "text": "e"
//         },
//         {
//           "color": "#43AFF5",
//           "text": "r"
//         },
//         {
//           "color": "#47B2F6",
//           "text": " "
//         },
//         {
//           "color": "#4BB4F7",
//           "text": "N"
//         },
//         {
//           "color": "#4EB7F8",
//           "text": "e"
//         },
//         {
//           "color": "#52BAF9",
//           "text": "t"
//         },
//         {
//           "color": "#56BDFA",
//           "text": "w"
//         },
//         {
//           "color": "#5ABFFB",
//           "text": "o"
//         },
//         {
//           "color": "#5EC2FC",
//           "text": "r"
//         },
//         {
//           "color": "#62C5FD",
//           "text": "k"
//         }
//       ],
//       "text": ""
//     },
//     {
//       "text": " "
//     },
//     {
//       "color": "#1f92ed",
//       "text": "- "
//     },
//     {
//       "bold": true,
//       "italic": false,
//       "underlined": false,
//       "strikethrough": false,
//       "obfuscated": false,
//       "extra": [
//         {
//           "color": "#66C8FF",
//           "text": "築"
//         },
//         {
//           "color": "#52BAF9",
//           "text": "夢"
//         },
//         {
//           "color": "#3FACF4",
//           "text": "物"
//         },
//         {
//           "color": "#2C9EEF",
//           "text": "語"
//         }
//       ],
//       "text": ""
//     },
//     {
//       "text": "\n                §f 在這裡 -- 實現你的理想! "
//     }
//   ],
//   "text": ""
// };
// console.log(motdParser.autoToHtml(testFromJSON));