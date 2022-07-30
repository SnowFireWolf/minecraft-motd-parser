import { motdParser } from '../src';
import type { motdJsonType } from '../src/types';
const testFromCode = `&r&f                &r&9&m&l   &r&8&m&l[ &r&f &r&6&lMineplex&r&f &r&f&lGames&r&f &r&8&m&l ]&r&9&m&l   &r&f
                        &r&e&lSTATS REVAMP&r &a&l&n testesest
`;
const replacedString = testFromCode.replace(/&/g, '§');

// console.log(motdParser.autoToHtml(replacedString));





const testFromJson: motdJsonType = {
  "extra":  
    [{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"life boost: "}, 
    {"italic":false,"color":"white","text":5}],
  "text":""
}


console.log(motdParser.autoToHtml(testFromJson));