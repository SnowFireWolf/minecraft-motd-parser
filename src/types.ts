/*
 * minecraft motd parser v1.0.9
 * (c) 2022 Kevin Zheng
 * Released under the MIT license
 */

interface extraLibraryType {
  [key: string]: string;
};



interface motdJsonType {
  text: string;
  extra?: {
    color?: string;
    text: string;
    bold?: boolean;
    strikethrough?: boolean;
    extra?: object[]
  }[];
  [key: string]: string | boolean | object | Array<object> | undefined;
};



export type {
  extraLibraryType,
  motdJsonType
};