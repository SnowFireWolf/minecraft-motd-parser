import { motdJsonType } from "../types";
import {
  isMotdJSONType,
  cleanCodes
} from "../utils";



/**
 * Convert JSON to Cleaned Text.
 * 
 * @param sourceJson
 */
export default function JSONToCleanedText(
  sourceJson: motdJsonType,
) {
  let textString = "";

  for (let key of Object.keys(sourceJson)) {
    key = key.toLowerCase();

    // extra
    if (key === "extra" && typeof sourceJson.extra === "object") {
      // ---------- with extra text ----------
      if (sourceJson.text !== undefined
        && (typeof sourceJson.text === "string" || typeof sourceJson.text === "number")
      ) {
        // content to html
        textString += cleanCodes(String(sourceJson.text));
      }

      // ---------- foreach extra data and parse ----------
      for (const sourceJsonExtra of sourceJson.extra) {
        // console.log('sourceJsonExtra', sourceJsonExtra);
        if (isMotdJSONType(sourceJsonExtra)) {
          textString += JSONToCleanedText(sourceJsonExtra);
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
      textString += cleanCodes(String(currentText));
    }
  }

  return textString;
}
