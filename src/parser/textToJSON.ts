import { motdJsonType } from "../types";
import {
  textToJsonExtras,
  colorCodeToHex,
} from '../styleLibrary';






// text to json
/**
 * Convert motd text to JSON.
 * 
 * @param text
 */
export default function parseTextToJSON(text: string) {
  const motdText = text;

  // color code regex: /([§][0-9a-fklmnor])/g
  // color hex regex: /^#(?:[0-9a-f]{3}){1,2}$/g
  const colorCodeReg = /([§][0-9a-f0-9a-fA-FklmnorFKLMNOR])/g;
  const codeREGEX = new RegExp(colorCodeReg.source);
  const textSplit = motdText.split(codeREGEX);
  let fontStyle = "";
  let colorHex = "";

  const resultObject: motdJsonType = {
    text: "",
    extra: [],
  };

  // console.log('textSplit', textSplit);
  textSplit.forEach((item) => {
    const stringToLowerCase = item.toLowerCase();

    // color code 轉換成 hex
    if (Object.hasOwn(colorCodeToHex, stringToLowerCase)) {
      //console.log(`偵測出 ${ colorCodeToHex[item] }`)
      colorHex = colorCodeToHex[stringToLowerCase];
      // §f reset
      if(stringToLowerCase === "§f") {
        fontStyle = "";
      }
    } else if (Object.hasOwn(textToJsonExtras, stringToLowerCase)) {
      if(stringToLowerCase === "§r") {
        fontStyle = "";
        colorHex = "";
      } else {
        // font style code 轉換
        //console.log(`偵測出 style ${ textToJsonExtras[item] }`)
        fontStyle = textToJsonExtras[stringToLowerCase];
      }
    } else {
      const innerObject: motdJsonType = {
        text: "",
        extra: [],
      };

      // 其餘字串
      if (fontStyle !== "") {
        innerObject[fontStyle] = true;
      }

      innerObject.text = item;

      if (colorHex !== "") {
        innerObject.color = colorHex;
      }

      if (typeof resultObject.extra === "object") {
        resultObject.extra.push(innerObject);
      }
    }
  });

  // code styles merge
  let newExtra: Array<motdJsonType> = [];
  // console.log('resultObject', resultObject);
  if (resultObject.extra) {
    if (resultObject.extra.length > 1) {
      // if text is '', remove it and merge to next array
      resultObject.extra.forEach((item, index) => {
        // console.log('item', item);
        if (item.text === "") {
          if (
            resultObject.extra
            && typeof resultObject.extra[index + 1] === "object"
          ) {
            newExtra.push({
              ...(item as motdJsonType),
              ...resultObject.extra[index + 1],
            });
          }
        } else {
          if (
            item.text !== (newExtra[newExtra.length - 1]
              && newExtra[newExtra.length - 1].text)
          ) {
            newExtra.push(item as motdJsonType);
          }
        }
      });
    } else {
      newExtra.push(resultObject.extra[0] as motdJsonType);
    }
  }

  // console.log('newExtra', newExtra);
  // remove blank content
  newExtra = newExtra.filter((item) => item.text !== "");
  // console.log('newExtra', newExtra);

  return {
    text: resultObject.text,
    extra: newExtra,
  };
}
