/*
 * minecraft motd parser
 * (c) 2023 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from "./types";




// 類型檢查
export function isMotdJSONType(object: object): object is motdJsonType {
  return !!object;
};



/**
 *
 * replace all html tags to &...
 */
export function htmlStringFormatting(text: string): string {
  return (
    text
      // space
      // .replace(/ /g, "\u00a0")
      //
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      // return
      .replace(/\n/g, "<br/>")
  );
  // .replace(/\//g, '&#x2F;');
};



/**
 * clean html tags
 * 
 * @param text
 * example: `<span>hello world</span>`
 * 
 * result: `hello world`
 */
export function cleanHtmlTags(text: string): string {
  return text.replace(/<[^>]*>?/gm, '');
};



/**
 * clean motd tags
 * 
 * Clean all tags from motd source string.
 * 
 * @param {string} text - motd string include tag § will remove
 */
export function cleanTags(text: string) {
  const REGEX = /(?:§)([0-9a-fA-FklmnorFKLMNOR])/g;
  let textResult = "";

  textResult = text.replace(REGEX, "");

  return textResult;
};
