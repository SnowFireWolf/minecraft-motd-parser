/*
 * minecraft motd parser v1.0.0
 * (c) 2021 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from './types';



// 類型檢查
function isMotdJSONType(object: any): object is motdJsonType {
  return object;
}



export {
  isMotdJSONType
}