"use strict";
/*
 * minecraft motd parser v1.0.5
 * (c) 2021 Kevin Zheng
 * Released under the MIT license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlStringFormatting = exports.isMotdJSONType = void 0;
// 類型檢查
function isMotdJSONType(object) {
    return object;
}
exports.isMotdJSONType = isMotdJSONType;
const htmlStringFormatting = (text) => {
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
};
exports.htmlStringFormatting = htmlStringFormatting;
