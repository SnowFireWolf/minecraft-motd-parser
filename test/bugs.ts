import { autoToHtml } from "../src";

const testObject = {
  "extra": [
      {
          "extra": [
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#336cfa",
                          "text": "╔"
                      },
                      {
                          "color": "#91b6fd",
                          "text": "╗"
                      }
                  ],
                  "text": ""
              },
              {
                  "text": " "
              },
              {
                  "obfuscated": true,
                  "color": "white",
                  "text": "|"
              },
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#3366ff",
                          "text": "G"
                      },
                      {
                          "color": "#2299ff",
                          "text": "C"
                      },
                      {
                          "color": "#11ccff",
                          "text": "2"
                      },
                      {
                          "extra": [
                              {
                                  "color": "#00ffff",
                                  "text": "."
                              },
                              {
                                  "color": "#44ffff",
                                  "text": "P"
                              },
                              {
                                  "color": "#88ffff",
                                  "text": "L"
                              }
                          ],
                          "text": ""
                      }
                  ],
                  "text": ""
              },
              {
                  "obfuscated": true,
                  "color": "white",
                  "text": "|"
              },
              {
                  "text": " "
              },
              {
                  "bold": true,
                  "color": "#008ae6",
                  "extra": [
                      {
                          "color": "#33cccc",
                          "text": ":"
                      },
                      {
                          "text": ":"
                      }
                  ],
                  "text": ":"
              },
              {
                  "text": " "
              },
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#3399ff",
                          "text": "N"
                      },
                      {
                          "color": "#3c9fff",
                          "text": "A"
                      },
                      {
                          "color": "#44a4ff",
                          "text": "D"
                      },
                      {
                          "color": "#4daaff",
                          "text": "C"
                      },
                      {
                          "color": "#55b0ff",
                          "text": "I"
                      },
                      {
                          "color": "#5eb5ff",
                          "text": "A"
                      },
                      {
                          "color": "#66bbff",
                          "text": "G"
                      },
                      {
                          "color": "#6fc1ff",
                          "text": "A"
                      },
                      {
                          "color": "#77c6ff",
                          "text": "J"
                      },
                      {
                          "color": "#80ccff",
                          "text": "A"
                      },
                      {
                          "color": "#88d2ff",
                          "text": " "
                      },
                      {
                          "color": "#91d7ff",
                          "text": "Z"
                      },
                      {
                          "color": "#99ddff",
                          "text": "M"
                      },
                      {
                          "color": "#a2e3ff",
                          "text": "I"
                      },
                      {
                          "color": "#aae8ff",
                          "text": "A"
                      },
                      {
                          "color": "#b3eeff",
                          "text": "N"
                      },
                      {
                          "color": "#bbf4ff",
                          "text": "Y"
                      },
                      {
                          "color": "#c4f9ff",
                          "text": "!"
                      }
                  ],
                  "text": ""
              },
              {
                  "text": " "
              },
              {
                  "bold": true,
                  "color": "#008ae6",
                  "extra": [
                      {
                          "color": "#33cccc",
                          "text": ":"
                      },
                      {
                          "text": ":"
                      }
                  ],
                  "text": ":"
              },
              {
                  "text": " "
              },
              {
                  "obfuscated": true,
                  "color": "white",
                  "text": "|"
              },
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#3366ff",
                          "text": "G"
                      },
                      {
                          "color": "#2299ff",
                          "text": "C"
                      },
                      {
                          "color": "#11ccff",
                          "text": "2"
                      },
                      {
                          "extra": [
                              {
                                  "color": "#00ffff",
                                  "text": "."
                              },
                              {
                                  "color": "#44ffff",
                                  "text": "P"
                              },
                              {
                                  "color": "#88ffff",
                                  "text": "L"
                              }
                          ],
                          "text": ""
                      }
                  ],
                  "text": ""
              },
              {
                  "obfuscated": true,
                  "color": "white",
                  "text": "|"
              }
          ],
          "text": ""
      },
      {
          "text": "\n"
      },
      {
          "extra": [
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#114af7",
                          "text": "╚"
                      },
                      {
                          "color": "#6fa5fb",
                          "text": "╝"
                      }
                  ],
                  "text": ""
              },
              {
                  "text": "  "
              },
              {
                  "bold": true,
                  "extra": [
                      {
                          "color": "#00ff00",
                          "text": "T"
                      },
                      {
                          "color": "#1aff38",
                          "text": "R"
                      },
                      {
                          "color": "#33ff70",
                          "text": "Y"
                      },
                      {
                          "color": "#4dffa8",
                          "text": "B"
                      },
                      {
                          "extra": [
                              {
                                  "color": "#1a8cff",
                                  "text": "B"
                              },
                              {
                                  "color": "#1a9dff",
                                  "text": "A"
                              },
                              {
                                  "color": "#1aafff",
                                  "text": "Z"
                              },
                              {
                                  "color": "#1ac0ff",
                                  "text": "A"
                              }
                          ],
                          "text": " "
                      },
                      {
                          "text": " "
                      },
                      {
                          "color": "#66ffe0",
                          "text": "+"
                      },
                      {
                          "extra": [
                              {
                                  "color": "#ffbb99",
                                  "text": "M"
                              },
                              {
                                  "color": "#ffb18a",
                                  "text": "U"
                              },
                              {
                                  "color": "#ffa77a",
                                  "text": "L"
                              },
                              {
                                  "color": "#ff9c6b",
                                  "text": "T"
                              },
                              {
                                  "color": "#ff925c",
                                  "text": "I"
                              },
                              {
                                  "color": "#ff884d",
                                  "text": "B"
                              },
                              {
                                  "color": "#ff7e3d",
                                  "text": "L"
                              },
                              {
                                  "color": "#ff742e",
                                  "text": "O"
                              },
                              {
                                  "color": "#ff691f",
                                  "text": "C"
                              },
                              {
                                  "color": "#ff5f0f",
                                  "text": "K"
                              }
                          ],
                          "text": " "
                      },
                      {
                          "extra": [
                              {
                                  "color": "#66ffe0",
                                  "text": "J"
                              },
                              {
                                  "color": "#5effcf",
                                  "text": "U"
                              },
                              {
                                  "color": "#56ffbe",
                                  "text": "Z"
                              },
                              {
                                  "color": "#4effac",
                                  "text": " "
                              },
                              {
                                  "color": "#47ff9b",
                                  "text": "N"
                              },
                              {
                                  "color": "#3fff8a",
                                  "text": "I"
                              },
                              {
                                  "color": "#37ff79",
                                  "text": "E"
                              },
                              {
                                  "color": "#2fff67",
                                  "text": "D"
                              },
                              {
                                  "color": "#27ff56",
                                  "text": "L"
                              },
                              {
                                  "color": "#1fff45",
                                  "text": "U"
                              },
                              {
                                  "color": "#18ff34",
                                  "text": "G"
                              },
                              {
                                  "color": "#10ff22",
                                  "text": "O"
                              },
                              {
                                  "color": "#08ff11",
                                  "text": "!"
                              }
                          ],
                          "text": " "
                      }
                  ],
                  "text": ""
              },
              {
                  "text": "                     1.7 - 1.19                                             1.8 1.9 1.10 1.11 1.12 1.12.2 1.13 1.14 1.15 1.16 1.17 1.18 1.18.2"
              }
          ],
          "text": ""
      }
  ],
  "text": ""
};
console.log(autoToHtml(testObject));



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
// console.log(motdParser.autoToHtml(testFromJSON));
