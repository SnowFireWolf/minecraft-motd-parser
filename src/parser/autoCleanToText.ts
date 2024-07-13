import { motdJsonType } from "../types";
import {
  JSONToCleanedText,
} from ".";
import { cleanCodes } from "../utils";



/**
 * auto check data type then convert to html.
 */
export function autoCleanToText(motd: string | object): string {
  // type check
  if (typeof motd === "object") {
    // console.log('process mode: Object mode');
    return JSONToCleanedText(motd as motdJsonType);
  } else if (typeof motd === "string") {
    // console.log('process mode: String mode');
    return cleanCodes(motd);
  } else {
    return "unknown motd data type";
  }
}



export default autoCleanToText;
