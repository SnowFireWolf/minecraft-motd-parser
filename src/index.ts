/*
 * minecraft motd parser
 * (c) 2023 Kevin Zheng
 * Released under the MIT license
 */
import {
  htmlStringFormatting,
  cleanCodes,
  cleanHtmlTags,
} from "./utils";
import {
  JSONToHTML,
  textToHTML,
  textToJSON,
  JSONRender,
  autoToHTML,
} from "./parser";





export * from './utils';
export * from "./parser";



/*
 * #### minecraft motd parser
 * * [github](https://github.com/SnowFireWolf/minecraft-motd-parser/tree/main#minecraft-server-motd-parser)
 * * [npm](https://www.npmjs.com/package/@sfirew/minecraft-motd-parser)
 *
 * (c) 2023 Kevin Zheng
 *
 * Released under the MIT license
 */
const motdParser = {
  // text convert to HTML
  textToHTML,
  // text convert to JSON
  textToJSON,
  // JSON convert to HTML
  JSONToHTML,
  // JSON full convert HTML (include enter)
  JSONRender,
  // auto check type to convert
  autoToHTML,

  // utils
  htmlStringFormatting,
  // clean all motd codes
  cleanCodes,
  // clean all html tags
  cleanHtmlTags,
};

export default motdParser;
