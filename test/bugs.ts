import { motdParser } from '../src';
import type { motdJsonType } from '../src/types';



const testFromCode = `&r&f                &r&9&m&l   &r&8&m&l[ &r&f &r&6&lMineplex&r&f &r&f&lGames&r&f &r&8&m&l ]&r&9&m&l   &r&f
                        &r&e&lSTATS REVAMP&r &a&l&n testesest
`;
const replacedString = testFromCode.replace(/&/g, '§');
console.log(motdParser.autoToHtml(replacedString));


// const testNumberContentFromJson: motdJsonType = {
//   "extra":  
//     [{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"life boost: "}, 
//     {"italic":false,"color":"white","text":5}],
//   "text":""
// }
// console.log(motdParser.autoToHtml(testNumberContentFromJson));



console.log('--------------------------------------------');
const testString = 'Minecraft Server';
console.log(motdParser.autoToHtml(testString));



const testObject: motdJsonType = {
  text: '',
  extra: [
    {
      "extra": [
        {
          "bold": true,
          "color": "green",
          "text": "╔════════"
        },
        {
          "text": " "
        },
        {
          "color": "#f38ab5",
          "extra": [
            {
              "bold": true,
              "text": "The Pink Tree"
            },
            {
              "text": " "
            },
            {
              "bold": true,
              "color": "green",
              "text": "═══════╗"
            }
          ],
          "text": ""
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
          "color": "green",
          "text": "╚═══════"
        },
        {
          "text": " "
        },
        {
          "bold": true,
          "extra": [
            {
              "color": "#f3801f",
              "text": "世"
            },
            {
              "color": "#c4c402",
              "text": "界"
            },
            {
              "color": "#7ff30c",
              "text": "的"
            },
            {
              "color": "#3bfd3b",
              "text": "奥"
            },
            {
              "color": "#0cdf80",
              "text": "秘"
            },
            {
              "color": "#02a3c4",
              "text": "将"
            },
            {
              "color": "#205cf3",
              "text": "由"
            },
            {
              "color": "#5c20fd",
              "text": "你"
            },
            {
              "color": "#a302df",
              "text": "来"
            },
            {
              "color": "#e00ca3",
              "text": "解"
            },
            {
              "color": "#fd3b5c",
              "text": "开"
            }
          ],
          "text": ""
        },
        {
          "text": " "
        },
        {
          "bold": true,
          "color": "green",
          "text": "══════╝"
        }
      ],
      "text": ""
    }
  ]
}

console.log(motdParser.autoToHtml(testObject));