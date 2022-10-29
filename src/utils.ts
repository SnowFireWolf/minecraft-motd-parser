/*
 * minecraft motd parser v1.0.11.1
 * (c) 2022 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from "./types";

// 類型檢查
export function isMotdJSONType(object: object): object is motdJsonType {
  return !!object;
}

/**
 *
 * #### replace all html tags to &...
 */
export const htmlStringFormatting = (text: string): string => {
  return (
    text
      // space
      .replace(/ /g, "\u00a0")
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
