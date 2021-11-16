/*
 * minecraft motd parser v1.0.5
 * (c) 2021 Kevin Zheng
 * Released under the MIT license
 */

interface extraLibraryType {
  [key: string]: string;
};



interface motdJsonType {
  [key: string]: string | boolean | object | Array<object> | undefined;
  font?:    string;
  color? : string;
  text?: string;
  extra?: object[];
};



export type {
  extraLibraryType,
  motdJsonType
};