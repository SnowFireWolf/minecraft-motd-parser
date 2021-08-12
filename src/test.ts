import motdParser from './motdParser';


const text = "§aHypixel Network §7§c1.8/1.9/1.10/1.11/1.12 §e§lNEW PTL GAME:§b§l THE BRIDGE";//
//const json = '{"text":"","extra":[{"text":"Hypixel Network ","extra":[{"text":"","extra":[{"text":"1.8/1.9/1.10/1.11/1.12 ","extra":[{"text":"","extra":[{"text":"NEW PTL GAME:","extra":[{"text":"","extra":[{"text":" THE BRIDGE","extra":[],"bold":true}],"color":"acqua"}],"bold":true}],"color":"yellow"}],"color":"red"}],"color":"gray"}],"color":"green"}]}';


let start = 0;
// clean tags
start = new Date().getTime();
let cleanedtring = motdParser.cleanTags(text)
console.log(cleanedtring)
console.log(
  '執行時間\n',
  (new Date().getTime() - start) + "ms"
)


// text to html
start = new Date().getTime();

let motdHtml = motdParser.textToHTML(text)
console.log(motdHtml)

console.log(
  '執行時間\n',
  (new Date().getTime() - start) + "ms"
)


// json to html
let jsonToHtml = motdParser.textToJson(text)
console.log(jsonToHtml)