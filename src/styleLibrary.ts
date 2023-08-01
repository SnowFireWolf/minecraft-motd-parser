import { extraLibraryType } from "./types";



// color code to font styles
const extras: extraLibraryType = {
  "§k": "obfuscated;",
  "§l": "font-weight: bold;",
  "§m": "text-decoration: line-through;",
  "§n": "text-decoration: underline;",
  "§o": "font-style: italic;",
  "§r": "color: inherit;text-decoration: none !important;font-weight:normal!important;font-style: normal!important;",
};

// json extra font styles
const extraFontStyles: extraLibraryType = {
  bold: "font-weight: bold;",
  italic: "font-style: italic;",
  underlined: "text-decoration:underline;",
  strikethrough: "text-decoration: line-through;",
  obfuscated: "mc_obfuscated;",
  reset: "color: inherit;text-decoration: none !important;font-weight:normal!important;font-style: normal!important;",
};

// text to json extra name
const textToJsonExtras: extraLibraryType = {
  "§k": "obfuscated",
  "§l": "bold",
  "§m": "strikethrough",
  "§n": "underlined",
  "§o": "italic",
  "§r": "reset",
};

// base color hex
const colorCodeToHex: extraLibraryType = {
  "§0": "#000000",
  "§1": "#0000AA",
  "§2": "#00AA00",
  "§3": "#00AAAA",
  "§4": "#AA0000",
  "§5": "#AA00AA",
  "§6": "#FFAA00",
  "§7": "#AAAAAA",
  "§8": "#555555",
  "§9": "#5555FF",
  "§a": "#55FF55",
  "§b": "#55FFFF",
  "§c": "#FF5555",
  "§d": "#FF55FF",
  "§e": "#FFFF55",
  "§f": "#FFFFFF",
};

// json extra to hex color
const extraColorsToHex: extraLibraryType = {
  black: "#000000",
  dark_blue: "#0000AA",
  dark_green: "#00AA00",
  dark_aqua: "#00AAAA",
  dark_red: "#AA0000",
  dark_purple: "#AA00AA",
  gold: "#FFAA00",
  gray: "#AAAAAA",
  dark_gray: "#555555",
  blue: "#5555FF",
  green: "#55FF55",
  aqua: "#55FFFF",
  red: "#FF5555",
  light_purple: "#FF55FF",
  yellow: "#FFFF55",
  white: "#FFFFFF",
};



export {
  extras,
  extraFontStyles,
  textToJsonExtras,
  colorCodeToHex,
  extraColorsToHex,
};
