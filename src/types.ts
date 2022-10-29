/*
 * minecraft motd parser v1.0.11.1
 * (c) 2022 Kevin Zheng
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
    extra?: object[];
  }[];
  [key: string]: string | boolean | number | object | Array<object> | undefined;
}

export type { extraLibraryType, motdJsonType };
