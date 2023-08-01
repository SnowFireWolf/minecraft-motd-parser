import { autoToHTML, textToHTML } from "../src";




const testMOTDString = "§c§l            DDShen 大神伺服器§7§l|§r §b1.8-1.20 §a     ▁▂▃▄▅▆ 請勿破懷遊戲平衡 違規者嚴逞 ▆▅▄▃▂▁";
console.log('--------------------------');
console.log(textToHTML(testMOTDString));
console.log('--------------------------');
console.log(autoToHTML(testMOTDString));


const test2MOTDString = "§r             §d§l秘境之城 §eSecretsCity  §91.18 - 1.19 §r       多元伺服 §f§l｜ §b領地保護 §f§l｜ §e探索星球§f§l ｜ §6無限故事";
console.log('--------------------------');
console.log(textToHTML(test2MOTDString));
console.log('--------------------------');
console.log(autoToHTML(test2MOTDString));




// const testObject = {
//     "extra": [
//       {
//         "extra": [
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#336cfa",
//                 "text": "╔"
//               },
//               {
//                 "color": "#91b6fd",
//                 "text": "╗"
//               }
//             ],
//             "text": ""
//           },
//           {
//             "text": " "
//           },
//           {
//             "obfuscated": true,
//             "color": "white",
//             "text": "|"
//           },
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#3366ff",
//                 "text": "G"
//               },
//               {
//                 "color": "#2299ff",
//                 "text": "C"
//               },
//               {
//                 "color": "#11ccff",
//                 "text": "2"
//               },
//               {
//                 "extra": [
//                   {
//                     "color": "#00ffff",
//                     "text": "."
//                   },
//                   {
//                     "color": "#44ffff",
//                     "text": "P"
//                   },
//                   {
//                     "color": "#88ffff",
//                     "text": "L"
//                   }
//                 ],
//                 "text": ""
//               }
//             ],
//             "text": ""
//           },
//           {
//             "obfuscated": true,
//             "color": "white",
//             "text": "|"
//           },
//           {
//             "text": " "
//           },
//           {
//             "bold": true,
//             "color": "#008ae6",
//             "extra": [
//               {
//                 "color": "#33cccc",
//                 "text": ":"
//               },
//               {
//                 "text": ":"
//               }
//             ],
//             "text": ":"
//           },
//           {
//             "text": " "
//           },
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#3399ff",
//                 "text": "N"
//               },
//               {
//                 "color": "#3c9fff",
//                 "text": "A"
//               },
//               {
//                 "color": "#44a4ff",
//                 "text": "D"
//               },
//               {
//                 "color": "#4daaff",
//                 "text": "C"
//               },
//               {
//                 "color": "#55b0ff",
//                 "text": "I"
//               },
//               {
//                 "color": "#5eb5ff",
//                 "text": "A"
//               },
//               {
//                 "color": "#66bbff",
//                 "text": "G"
//               },
//               {
//                 "color": "#6fc1ff",
//                 "text": "A"
//               },
//               {
//                 "color": "#77c6ff",
//                 "text": "J"
//               },
//               {
//                 "color": "#80ccff",
//                 "text": "A"
//               },
//               {
//                 "color": "#88d2ff",
//                 "text": " "
//               },
//               {
//                 "color": "#91d7ff",
//                 "text": "Z"
//               },
//               {
//                 "color": "#99ddff",
//                 "text": "M"
//               },
//               {
//                 "color": "#a2e3ff",
//                 "text": "I"
//               },
//               {
//                 "color": "#aae8ff",
//                 "text": "A"
//               },
//               {
//                 "color": "#b3eeff",
//                 "text": "N"
//               },
//               {
//                 "color": "#bbf4ff",
//                 "text": "Y"
//               },
//               {
//                 "color": "#c4f9ff",
//                 "text": "!"
//               }
//             ],
//             "text": ""
//           },
//           {
//             "text": " "
//           },
//           {
//             "bold": true,
//             "color": "#008ae6",
//             "extra": [
//               {
//                 "color": "#33cccc",
//                 "text": ":"
//               },
//               {
//                 "text": ":"
//               }
//             ],
//             "text": ":"
//           },
//           {
//             "text": " "
//           },
//           {
//             "obfuscated": true,
//             "color": "white",
//             "text": "|"
//           },
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#3366ff",
//                 "text": "G"
//               },
//               {
//                 "color": "#2299ff",
//                 "text": "C"
//               },
//               {
//                 "color": "#11ccff",
//                 "text": "2"
//               },
//               {
//                 "extra": [
//                   {
//                     "color": "#00ffff",
//                     "text": "."
//                   },
//                   {
//                     "color": "#44ffff",
//                     "text": "P"
//                   },
//                   {
//                     "color": "#88ffff",
//                     "text": "L"
//                   }
//                 ],
//                 "text": ""
//               }
//             ],
//             "text": ""
//           },
//           {
//             "obfuscated": true,
//             "color": "white",
//             "text": "|"
//           }
//         ],
//         "text": ""
//       },
//       {
//         "text": "\n"
//       },
//       {
//         "extra": [
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#114af7",
//                 "text": "╚"
//               },
//               {
//                 "color": "#6fa5fb",
//                 "text": "╝"
//               }
//             ],
//             "text": ""
//           },
//           {
//             "text": "  "
//           },
//           {
//             "bold": true,
//             "extra": [
//               {
//                 "color": "#dbd4b4",
//                 "text": "E"
//               },
//               {
//                 "color": "#c8caba",
//                 "text": "V"
//               },
//               {
//                 "color": "#b4c0c0",
//                 "text": "E"
//               },
//               {
//                 "color": "#a1b5c6",
//                 "text": "N"
//               },
//               {
//                 "color": "#8dabcc",
//                 "text": "T"
//               },
//               {
//                 "extra": [
//                   {
//                     "color": "#da22ff",
//                     "text": "M"
//                   },
//                   {
//                     "color": "#d024fd",
//                     "text": "O"
//                   },
//                   {
//                     "color": "#c727fa",
//                     "text": "B"
//                   },
//                   {
//                     "color": "#bd29f8",
//                     "text": "R"
//                   },
//                   {
//                     "color": "#b42cf5",
//                     "text": "A"
//                   },
//                   {
//                     "color": "#aa2ef3",
//                     "text": "I"
//                   },
//                   {
//                     "color": "#a131f0",
//                     "text": "D"
//                   }
//                 ],
//                 "text": " "
//               },
//               {
//                 "extra": [
//                   {
//                     "color": "#dbd4b4",
//                     "text": "J"
//                   },
//                   {
//                     "color": "#d0ceb7",
//                     "text": "U"
//                   },
//                   {
//                     "color": "#c5c9bb",
//                     "text": "Ż"
//                   },
//                   {
//                     "color": "#bbc3be",
//                     "text": " "
//                   },
//                   {
//                     "color": "#b0bdc1",
//                     "text": "J"
//                   },
//                   {
//                     "color": "#a5b8c5",
//                     "text": "E"
//                   },
//                   {
//                     "color": "#9ab2c8",
//                     "text": "S"
//                   },
//                   {
//                     "color": "#90accb",
//                     "text": "T"
//                   },
//                   {
//                     "color": "#85a7cf",
//                     "text": "!"
//                   }
//                 ],
//                 "text": " "
//               },
//               {
//                 "extra": [
//                   {
//                     "color": "#ed213a",
//                     "text": "Z"
//                   },
//                   {
//                     "color": "#e52237",
//                     "text": "A"
//                   },
//                   {
//                     "color": "#dd2235",
//                     "text": "P"
//                   },
//                   {
//                     "color": "#d42332",
//                     "text": "R"
//                   },
//                   {
//                     "color": "#cc2430",
//                     "text": "A"
//                   },
//                   {
//                     "color": "#c4252d",
//                     "text": "S"
//                   },
//                   {
//                     "color": "#bc252b",
//                     "text": "Z"
//                   },
//                   {
//                     "color": "#b42628",
//                     "text": "A"
//                   },
//                   {
//                     "color": "#ac2726",
//                     "text": "M"
//                   },
//                   {
//                     "color": "#a32823",
//                     "text": "Y"
//                   },
//                   {
//                     "color": "#9b2821",
//                     "text": "!"
//                   }
//                 ],
//                 "text": " "
//               }
//             ],
//             "text": ""
//           },
//           {
//             "text": "                     1.7 - 1.19                                             1.8 1.9 1.10 1.11 1.12 1.12.2 1.13 1.14 1.15 1.16 1.17 1.18 1.18.2"
//           }
//         ],
//         "text": ""
//       }
//     ],
//     "text": ""
//   };
// console.log(autoToHtml(testObject));



// const bugTestJson2 = {
//     "extra": [
//         {
//             "color": "#00A3E3",
//             "extra": [
//                 {
//                     "color": "#3FCAF3",
//                     "extra": [
//                         {
//                             "color": "#00A3E3",
//                             "extra": [
//                                 {
//                                     "color": "#3FCAF3",
//                                     "extra": [
//                                         {
//                                             "color": "#00A3E3",
//                                             "extra": [
//                                                 {
//                                                     "color": "#3FCAF3",
//                                                     "extra": [
//                                                         {
//                                                             "color": "#00A3E3",
//                                                             "extra": [
//                                                                 {
//                                                                     "color": "#3FCAF3",
//                                                                     "extra": [
//                                                                         {
//                                                                             "color": "#00A3E3",
//                                                                             "extra": [
//                                                                                 {
//                                                                                     "color": "#3FCAF3",
//                                                                                     "extra": [
//                                                                                         {
//                                                                                             "color": "#00A3E3",
//                                                                                             "extra": [
//                                                                                                 {
//                                                                                                     "color": "#F48C04",
//                                                                                                     "extra": [
//                                                                                                         {
//                                                                                                             "bold": true,
//                                                                                                             "color": "#FFE22C",
//                                                                                                             "text": "MCCISLAND"
//                                                                                                         },
//                                                                                                         {
//                                                                                                             "extra": [
//                                                                                                                 {
//                                                                                                                     "color": "#00A3E3",
//                                                                                                                     "extra": [
//                                                                                                                         {
//                                                                                                                             "color": "#3FCAF3",
//                                                                                                                             "extra": [
//                                                                                                                                 {
//                                                                                                                                     "color": "#00A3E3",
//                                                                                                                                     "extra": [
//                                                                                                                                         {
//                                                                                                                                             "color": "#3FCAF3",
//                                                                                                                                             "extra": [
//                                                                                                                                                 {
//                                                                                                                                                     "color": "#00A3E3",
//                                                                                                                                                     "extra": [
//                                                                                                                                                         {
//                                                                                                                                                             "color": "#3FCAF3",
//                                                                                                                                                             "extra": [
//                                                                                                                                                                 {
//                                                                                                                                                                     "color": "#00A3E3",
//                                                                                                                                                                     "extra": [
//                                                                                                                                                                         {
//                                                                                                                                                                             "color": "#3FCAF3",
//                                                                                                                                                                             "extra": [
//                                                                                                                                                                                 {
//                                                                                                                                                                                     "color": "#00A3E3",
//                                                                                                                                                                                     "extra": [
//                                                                                                                                                                                         {
//                                                                                                                                                                                             "color": "#3FCAF3",
//                                                                                                                                                                                             "extra": [
//                                                                                                                                                                                                 {
//                                                                                                                                                                                                     "color": "#00A3E3",
//                                                                                                                                                                                                     "text": "■"
//                                                                                                                                                                                                 }
//                                                                                                                                                                                             ],
//                                                                                                                                                                                             "text": "■"
//                                                                                                                                                                                         }
//                                                                                                                                                                                     ],
//                                                                                                                                                                                     "text": "■"
//                                                                                                                                                                                 }
//                                                                                                                                                                             ],
//                                                                                                                                                                             "text": "■"
//                                                                                                                                                                         }
//                                                                                                                                                                     ],
//                                                                                                                                                                     "text": "■"
//                                                                                                                                                                 }
//                                                                                                                                                             ],
//                                                                                                                                                             "text": "■"
//                                                                                                                                                         }
//                                                                                                                                                     ],
//                                                                                                                                                     "text": "■"
//                                                                                                                                                 }
//                                                                                                                                             ],
//                                                                                                                                             "text": "■"
//                                                                                                                                         }
//                                                                                                                                     ],
//                                                                                                                                     "text": "■"
//                                                                                                                                 }
//                                                                                                                             ],
//                                                                                                                             "text": "■"
//                                                                                                                         }
//                                                                                                                     ],
//                                                                                                                     "text": "■"
//                                                                                                                 }
//                                                                                                             ],
//                                                                                                             "text": ".ɴᴇᴛ "
//                                                                                                         }
//                                                                                                     ],
//                                                                                                     "text": "ᴘʟᴀʏ."
//                                                                                                 }
//                                                                                             ],
//                                                                                             "text": "■ "
//                                                                                         }
//                                                                                     ],
//                                                                                     "text": "■"
//                                                                                 }
//                                                                             ],
//                                                                             "text": "■"
//                                                                         }
//                                                                     ],
//                                                                     "text": "■"
//                                                                 }
//                                                             ],
//                                                             "text": "■"
//                                                         }
//                                                     ],
//                                                     "text": "■"
//                                                 }
//                                             ],
//                                             "text": "■"
//                                         }
//                                     ],
//                                     "text": "■"
//                                 }
//                             ],
//                             "text": "■"
//                         }
//                     ],
//                     "text": "■"
//                 }
//             ],
//             "text": "■"
//         },
//         {
//             "text": "\n"
//         },
//         {
//             "color": "#616161",
//             "extra": [
//                 {
//                     "color": "white",
//                     "extra": [
//                         {
//                             "color": "#00FF7B",
//                             "extra": [
//                                 {
//                                     "bold": true,
//                                     "text": "ᴄʟᴏѕᴇᴅ ʙᴇᴛᴀ"
//                                 },
//                                 {
//                                     "color": "white",
//                                     "extra": [
//                                         {
//                                             "color": "aqua",
//                                             "extra": [
//                                                 {
//                                                     "color": "yellow",
//                                                     "text": " ᴍᴄᴄɪѕʟᴀɴᴅ.ɴᴇᴛ"
//                                                 }
//                                             ],
//                                             "text": "ѕɪɢɴ ᴜᴘ ᴀᴛ"
//                                         }
//                                     ],
//                                     "text": " ● "
//                                 }
//                             ],
//                             "text": ""
//                         }
//                     ],
//                     "text": " ● "
//                 }
//             ],
//             "text": "v0.6.1"
//         }
//     ],
//     "text": ""
// };

// console.log(autoToHtml(bugTestJson2));

// const bugTestJson3 = {
//     "extra": [
//         {
//             "extra": [
//                 {
//                     "bold": true,
//                     "color": "#ffc800",
//                     "text": "☄ MC.IRONAGE.PL ☄"
//                 },
//                 {
//                     "text": "  "
//                 },
//                 {
//                     "color": "#f5fff6",
//                     "text": "[1.10 - 1.19]"
//                 }
//             ],
//             "text": "         "
//         },
//         {
//             "text": "\n"
//         },
//         {
//             "color": "#ff4d79",
//             "extra": [
//                 {
//                     "bold": true,
//                     "text": "SURVIVAL+FRAKCJE:"
//                 },
//                 {
//                     "text": " "
//                 },
//                 {
//                     "color": "white",
//                     "extra": [
//                         {
//                             "color": "#21ff2c",
//                             "extra": [
//                                 {
//                                     "color": "white",
//                                     "extra": [
//                                         {
//                                             "color": "#21ff2c",
//                                             "text": "18:00"
//                                         }
//                                     ],
//                                     "text": "o "
//                                 }
//                             ],
//                             "text": "10.03.2023 "
//                         }
//                     ],
//                     "text": "Nowy tryb "
//                 }
//             ],
//             "text": ""
//         }
//     ],
//     "text": ""
// };

// console.log(autoToHtml(bugTestJson3));




// const testString = `                §aHypixel Network §c[1.8-1.19]
// §B§LNEW: DROPPER §7§l| §6§lSUMMER EVENT§7§l+§e§lSALE`;

// const replacedString = testString.replace(/&/g, "§");
// console.log(motdParser.autoToHtml(replacedString));

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
// console.log(autoToHtml(testFromJSON));
