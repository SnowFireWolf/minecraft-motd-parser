import { motdJsonType } from "./types";

declare function cleanTags(text: string): string;
declare function textToHTML(motdString: string): string;
declare function parseTextToJSON(text: string): motdJsonType;
declare function parseJSONToHTML(sourceJson: motdJsonType): string;
declare function jsonEnterRender(json: motdJsonType): string;
declare function autoToHtml(motd: motdJsonType | string | object): string;

export declare const _default: {
  cleanTags: typeof cleanTags;
  textToHTML: typeof textToHTML;
  textToJSON: typeof parseTextToJSON;
  JSONToHtml: typeof parseJSONToHTML;
  jsonRender: typeof jsonEnterRender;
  autoToHtml: typeof autoToHtml;

  motdParser: {
    cleanTags: typeof cleanTags;
    textToHTML: typeof textToHTML;
    textToJSON: typeof parseTextToJSON;
    JSONToHtml: typeof parseJSONToHTML;
    jsonRender: typeof jsonEnterRender;
    autoToHtml: typeof autoToHtml;
  };
};