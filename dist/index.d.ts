import { motdJsonType } from './types';
declare function cleanTags(text: string): string;
declare function textToHTML(motdString: string): string;
declare function parseTextToJSON(text: string): motdJsonType;
declare function parseJSONToHTML(sourceJson: motdJsonType): string;
declare function jsonEnterRender(json: motdJsonType): string;
declare function textEnterRender(text: string): string;
declare function autoToHtml(motd: motdJsonType | string): string;
export declare let motdParser: {
    cleanTags: typeof cleanTags;
    textToHTML: typeof textToHTML;
    textToJSON: typeof parseTextToJSON;
    JSONToHtml: typeof parseJSONToHTML;
    jsonEnterRender: typeof jsonEnterRender;
    textEnterRender: typeof textEnterRender;
    autoToHtml: typeof autoToHtml;
};
export {};