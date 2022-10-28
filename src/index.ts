import motdParser from "./motdParser";

export { motdParser };
export const cleanTags = motdParser.cleanTags;
export const textToHTML = motdParser.textToHTML;
export const textToJSON = motdParser.textToJSON;
export const JSONToHtml = motdParser.JSONToHtml;
export const jsonRender = motdParser.jsonRender;
export const autoToHtml = motdParser.autoToHtml;

export default motdParser;
