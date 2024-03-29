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
export function JSONRender(json: object | motdJsonType) {
  return JSONToHTML(JSON.parse(JSON.stringify(json)));
}



/**
 * auto check data type then convert to html.
 */
export function autoToHTML(motd: string | object | motdJsonType): string {
  // type check
  if (typeof motd === "object") {
    // console.log('process mode: Object mode');
    return JSONRender(motd);
  } else if (typeof motd === "string") {
    // console.log('process mode: String mode');
    // console.log('textToJSON(motd)', textToJSON(motd));
    return textToHTML(motd);
    // return jsonRender(textToJSON(motd));
  } else {
    return "unknown motd data type";
  }
}

export default autoToHTML;
