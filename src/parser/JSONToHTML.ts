import { motdJsonType } from "../types";
import {
  extraFontStyles,
  colorCodeToHex,
  extraColorsToHex,
} from '../styleLibrary';
import {
  isMotdJSONType,
} from "../utils";
import textToHTML from "./textToHTML";






// json convert to html
/**
 * Convert JSON to HTML.
 * 
 * @param sourceJson 
 */
export default function parseJSONToHTML(
  sourceJson: motdJsonType,
) {
  let htmlElement = "";
  let colorHex = "";
  let fontStyle = "";

  // console.log('sourceJson', sourceJson);
  // console.log('---------');

  for (let key of Object.keys(sourceJson)) {
    // console.log('sourceJson key', key);
    key = key.toLowerCase();

    // text styles
    if (Object.hasOwn(extraFontStyles, key)) {
      if (sourceJson[key]) {
        fontStyle += `${extraFontStyles[key]}`;
      }
    }

    // ---------- old text process ----------
    // if (key === "text") {
    //   if (
    //     typeof sourceJson.text === "string" ||
    //     typeof sourceJson.text === "number"
    //   ) {
    //     // convert all type to string
    //     htmlElement += textToHTML(String(sourceJson.text));
    //   }
    // }

    // color
    if (key === "color") {
      const colorKey = sourceJson[key];

      if (typeof colorKey === "string") {
        // Hex color
        if (Object.hasOwn(extraColorsToHex, colorKey)) {
          colorHex = `color:${extraColorsToHex[colorKey]};`;
          continue;
          // color code
        } else if (Object.hasOwn(colorCodeToHex, colorKey)) {
          colorHex = `color:${colorCodeToHex[colorKey]};`;
          continue;
          // custom color
        } else {
          // custom hex color code mode
          colorHex = `color:${colorKey};`;
          continue;
        }
      }
    }

    // extra
    if (key === "extra" && typeof sourceJson.extra === "object") {
      // ---------- with extra text ----------
      if (sourceJson.text !== undefined
        && (typeof sourceJson.text === "string" || typeof sourceJson.text === "number")
      ) {
        // content to html
        htmlElement += textToHTML(String(sourceJson.text));
      }

      // ---------- foreach extra data and parse ----------
      for (const sourceJsonExtra of sourceJson.extra) {
        // console.log('sourceJsonExtra', sourceJsonExtra);
        if (isMotdJSONType(sourceJsonExtra)) {
          htmlElement += parseJSONToHTML(sourceJsonExtra);
        }
      }
    }
  }

  // ---------- without extra text content ----------
  if (sourceJson.extra === undefined && sourceJson.text !== undefined) {
    const currentText = sourceJson.text;
    if (
      typeof sourceJson.text === "string" ||
      typeof sourceJson.text === "number"
    ) {
      // convert all type to string
      htmlElement += textToHTML(String(currentText));
    }
  }



  let returnHTML = "";
  if (fontStyle.length !== 0 || colorHex.length !== 0) {
    returnHTML = `<span style="${fontStyle + colorHex}">${htmlElement}</span>`;
  } else {
    returnHTML = htmlElement;
  }

  return returnHTML;
}
