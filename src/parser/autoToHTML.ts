/*
 * minecraft motd parser
 * (c) 2023 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from "../types";
import {
  JSONToHTML,
  textToHTML,
} from "./";






// JSON full convert include newline
export function jsonRender(json: object | motdJsonType) {
  return JSONToHTML(JSON.parse(JSON.stringify(json)));
}



/**
 * auto check data type then convert to html.
 */
export function autoToHTML(motd: string | object | motdJsonType): string {
  // type check
  if (typeof motd === "object") {
    // console.log('process mode: Object mode');
    return jsonRender(motd);
  } else if (typeof motd === "string") {
    // console.log('process mode: String mode');
    return textToHTML(motd);
  } else {
    return "unknown motd data type";
  }
}

export default autoToHTML;
