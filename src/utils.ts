/*
 * minecraft motd parser v1.0.9
 * (c) 2022 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from './types';



// 類型檢查
export function isMotdJSONType(object: any): object is motdJsonType {
  return object;
}


export const htmlStringFormatting = (text: string): string => {
  return text
    // space
    .replace(/ /g, '\u00a0')
    //
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/\'/g, '&#39;')
    // return 
    .replace(/\n/g, '<br/>');
    // .replace(/\//g, '&#x2F;');
}