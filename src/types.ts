/*
 * minecraft motd parser
 * (c) 2023 Kevin Zheng
 * Released under the MIT license
 */

interface extraLibraryType {
  [key: string]: string;
}

interface motdJsonType {
  text: string | number;
  extra?: {
    color?: string;
    text?: string | number;
    bold?: boolean;
    strikethrough?: boolean;
    underlined?: boolean;
    obfuscated?: boolean;
    italic?: boolean;
    extra?: object[] | motdJsonType[];
  }[];
  translate?: string;
  [key: string]: string | boolean | number | object | Array<object> | undefined;
}

export type { extraLibraryType, motdJsonType };
