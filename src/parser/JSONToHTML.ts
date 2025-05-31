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



/**
 * Convert JSON to HTML.
 * 
 * @param sourceJson
 */
export default function parseJSONToHTML(
  sourceJson: motdJsonType,
) {
  let htmlElement = "";
  let colorStyle = "";
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
      let colorHex = "";

      if (typeof colorKey === "string") {
        // Hex color
        if (Object.hasOwn(extraColorsToHex, colorKey)) {
          colorHex = extraColorsToHex[colorKey];
          // color code
        } else if (Object.hasOwn(colorCodeToHex, colorKey)) {
          colorHex = colorCodeToHex[colorKey];
          // custom color
        } else {
          const customHexColorMatches = colorKey.match(
            /^#([-+]?0+|\+?0*[1-9A-Fa-f][0-9A-Fa-f]{0,5})$/,
          );

          if (customHexColorMatches !== null) {
            // custom hex color code mode
            colorHex =
              "#" +
              customHexColorMatches[1].replace(/^[-+]?0*/, "").padStart(6, "0");
          }
        }
      }

      if(colorHex !== "") {
        colorStyle = `color:${colorHex};`;
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
        if (typeof sourceJsonExtra === 'string') {
          // Process string elements directly with textToHTML
          htmlElement += textToHTML(sourceJsonExtra);
        } else if (isMotdJSONType(sourceJsonExtra)) {
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
  if (fontStyle.length !== 0 || colorStyle.length !== 0) {
    returnHTML = `<span style="${colorStyle + fontStyle}">${htmlElement}</span>`;
  } else {
    returnHTML = htmlElement;
  }

  return returnHTML;
}
