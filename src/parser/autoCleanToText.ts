import { motdJsonType } from "../types";
import {
  JSONToCleanedText,
} from ".";
import { cleanCodes } from "../utils";



// make sure JSON data is JSON object and then convert.
export function JSONRender(json: object | motdJsonType) {
  return JSONToCleanedText(JSON.parse(JSON.stringify(json)));
}

/**
 * auto check data type then convert to html.
 */
export function autoCleanToText(motd: string | object | motdJsonType): string {
  // type check
  if (typeof motd === "object") {
    // console.log('process mode: Object mode');
    return JSONRender(motd);
  } else if (typeof motd === "string") {
    // console.log('process mode: String mode');
    return cleanCodes(motd);
  } else {
    return "unknown motd data type";
  }
}



export default autoCleanToText;
