import { motdJsonType } from "../types";
import {
  JSONToHTML,
  textToHTML,
} from "./";



// make sure JSON data is JSON object and then convert.
export function JSONRender(json: object) {
  return JSONToHTML(json as motdJsonType);
}

/**
 * auto check data type then convert to html.
 */
export function autoToHTML(motd: string | object): string {
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
