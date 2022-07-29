import { motdParser } from '../src';


const testFromCode = `&r&f                &r&9&m&l   &r&8&m&l[ &r&f &r&6&lMineplex&r&f &r&f&lGames&r&f &r&8&m&l ]&r&9&m&l   &r&f
                        &r&e&lSTATS REVAMP&r &a&l&n testesest
`;

const replacedString = testFromCode.replace(/&/g, '§');


// parser
console.log(motdParser.autoToHtml(replacedString));