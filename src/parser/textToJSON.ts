import { motdJsonType } from "../types";
import {
  textToJsonExtras,
  colorCodeToHex,
} from "../styleLibrary";
import { baseColorCodeRegex } from "../utils";



/**
 * Convert motd text to JSON.
 * 
 * @param text
 * @returns
 */
export default function parseTextToJSON(text: string) {
  const motdText = text;

  const colorCodeReg = baseColorCodeRegex;
  const codeREGEX = new RegExp(colorCodeReg.source);
  const textSplit = motdText.split(codeREGEX);
  // track active font styles in a Set so multiple styles coexist and don't duplicate
  const fontStyleSet = new Set<string>();
  let colorHex = "";

  const resultObject: motdJsonType = {
    text: "",
    extra: [],
  };

  // console.log('textSplit', textSplit);
  textSplit.forEach((item) => {
    const stringToLowerCase = item.toLowerCase();

    // color code convert to hex
    if (Object.hasOwn(colorCodeToHex, stringToLowerCase)) {
      //console.log(`detect ${ colorCodeToHex[item] }`)
      colorHex = colorCodeToHex[stringToLowerCase];
      // §f reset
      if(stringToLowerCase === "§f") {
        fontStyleSet.clear();
      }
    } else if (Object.hasOwn(textToJsonExtras, stringToLowerCase)) {
      if(stringToLowerCase === "§r") {
        fontStyleSet.clear();
        colorHex = "";
      } else {
        // font style code convert (Set dedupes & keeps multiple styles)
        //console.log(`detect style ${ textToJsonExtras[item] }`)
        fontStyleSet.add(textToJsonExtras[stringToLowerCase]);
      }
    } else {
      const innerObject: motdJsonType = {
        text: "",
        extra: [],
      };

      // 其餘字串 - apply all currently active styles
      for (const style of fontStyleSet) {
        innerObject[style] = true;
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

  // each text segment already carries its full active style, so simply drop
  // the empty-text segments produced by adjacent style/color codes
  const newExtra = (resultObject.extra ?? []).filter(
    (item): item is motdJsonType =>
      typeof item === "object" && item.text !== "",
  );

  return {
    text: resultObject.text,
    extra: newExtra,
  };
}
