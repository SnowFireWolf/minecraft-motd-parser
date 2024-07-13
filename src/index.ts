/*
 * minecraft motd parser
 * (c) 2021 Kevin Zheng
 * Released under the MIT license
 */
import {
  htmlStringFormatting,
  cleanCodes,
  cleanHtmlTags,
} from "./utils";
import {
  JSONToHTML,
  JSONToCleanedText,

  textToHTML,
  textToJSON,

  JSONRender,
  autoToHTML,
  autoCleanToText,
} from "./parser";






export * from './utils';
export * from "./parser";



/*
 * #### minecraft motd parser
 * * [github](https://github.com/SnowFireWolf/minecraft-motd-parser/tree/main#minecraft-server-motd-parser)
 * * [npm](https://www.npmjs.com/package/@sfirew/minecraft-motd-parser)
 *
 * (c) 2021 Kevin Zheng
 *
 * Released under the MIT license
 */
const motdParser = {
  // --- normal format ---
  // text convert to HTML
  textToHTML,
  // text convert to JSON
  textToJSON,
  // JSON convert to HTML
  JSONToHTML,
  // JSON string to JSON object and convert to HTML
  JSONRender,
  // auto check type to convert
  autoToHTML,

  // --- utils ---
  // html string formatter
  htmlStringFormatting,
  // clean all motd codes
  cleanCodes,
  // clean all html tags
  cleanHtmlTags,
  // json to not html text
  JSONToCleanedText,
  // auto check type and convert to cleaned text
  autoCleanToText,
};

export default motdParser;
