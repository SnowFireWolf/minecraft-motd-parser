/*
 * minecraft motd parser
 * (c) 2023 Kevin Zheng
 * Released under the MIT license
 */

import { motdJsonType } from "./types";




/**
 * Base color code regex
 */
export const baseColorCodeRegex = /([§][0-9a-fA-FklmnorKLMNOR])/g;



// Type checking function
export function isMotdJSONType(object: unknown): object is motdJsonType {
  // basic type check
  if (!object || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }

  // check if has necessary property
  const hasText = "text" in object;
  const hasTranslate = "translate" in object;
  const hasExtra = "extra" in object && Array.isArray(object.extra);

  // MOTD JSON at least need one of text, translate or extra
  return hasText || hasTranslate || hasExtra;
}



/**
 * Replace all HTML special characters with HTML entities
 * Prevents HTML injection by safely encoding special characters
 */
export function htmlStringFormatting(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  return (
    text
      // First handle & character, but avoid breaking existing HTML entities
      // Use negative lookahead to prevent double-encoding existing HTML entities
      .replace(/&(?!(?:amp|lt|gt|quot|#39|#x[0-9A-Fa-f]+|#[0-9]+);)/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      // Convert newlines to HTML line breaks
      .replace(/\n/g, "<br/>")
  );
};



/**
 * Clean HTML tags safely
 * 
 * Safely removes HTML tags and prevents HTML injection vulnerabilities.
 * 
 * @param text - Input text that may contain HTML tags
 * @example `<span>hello world</span>` → `hello world`
 * 
 * @returns Clean text without HTML tags
 */
export function cleanHtmlTags(text: string): string {
  if (!text || typeof text !== "string") {
    return "";
  }

  let cleanedText = "";

  // === Config ===
  const DANGEROUS_TAGS = new Set([
    "script", "style", "noscript",
    "iframe", "object", "embed", "applet",
    "svg", "math", "foreignobject",
  ]);

  // === FSM States ===
  enum State {
    TEXT,        // Normal text
    TAG,         // Currently consuming a normal tag until >
    SKIP_BLOCK,  // Currently skipping dangerous block until </tag>
    COMMENT      // HTML comment <!-- ... -->
  }

  let state = State.TEXT;
  let tagName = "";          // Temporary storage for encountered tag name
  let skipUntil = "";        // Corresponding "</tag>" for dangerous block
  const len = text.length;

  for (let i = 0; i < len; i++) {
    const ch = text[i];

    /* --------------- TEXT -> TAG/COMMENT --------------- */
    if (state === State.TEXT && ch === "<") {
      // Check if it's an HTML comment
      if (text.slice(i, i + 4) === "<!--") {
        state = State.COMMENT;
        continue;
      }

      // Try to extract tag name
      let j = i + 1;
      let isClosing = false;

      // Skip '/'
      if (j < len && text[j] === "/") {
        isClosing = true;
        j++;
      }
      // Skip whitespace
      while (j < len && /\s/.test(text[j])) j++;

      // Extract tagName (a~z or A~Z or 0-9 or -)
      const start = j;
      while (j < len && /[A-Za-z0-9-]/.test(text[j])) j++;

      tagName = text.slice(start, j).toLowerCase();

      /* Dangerous block ── only "opening tag" starts skip */
      if (!isClosing && DANGEROUS_TAGS.has(tagName)) {
        state = State.SKIP_BLOCK;
        skipUntil = `</${tagName}>`;
      } else {
        state = State.TAG;
      }
      continue;
    }

    /* --------------- TAG -> TEXT --------------- */
    if (state === State.TAG) {
      if (ch === ">") state = State.TEXT;
      // Don't write to output
      continue;
    }

    /* --------------- COMMENT -> TEXT --------------- */
    if (state === State.COMMENT) {
      // Check for comment end -->
      if (text.slice(i, i + 3) === "-->") {
        i += 2; // Skip '-->'
        state = State.TEXT;
      }
      continue;
    }

    /* --------------- SKIP_BLOCK Logic --------------- */
    if (state === State.SKIP_BLOCK) {
      // Simple case-insensitive matching for skipUntil string
      if (
        ch === "<" &&
        text.slice(i, i + skipUntil.length).toLowerCase() === skipUntil
      ) {
        // Skip entire "</tag>" segment
        i += skipUntil.length - 1;
        state = State.TEXT;
      }
      continue; // Consume any content until leaving SKIP_BLOCK
    }

    /* --------------- TEXT State: Normal output --------------- */
    if (state === State.TEXT) {
      cleanedText += ch;
    }
  }

  return cleanedText.trim();
}



/**
 * Clean MOTD color codes
 * 
 * Clean all formatting codes from MOTD source string.
 * 
 * @param {string} text - MOTD string with § formatting codes to be removed
 * @returns {string} Text without MOTD formatting codes
 */
export function cleanCodes(text: string): string {
  const REGEX = /(?:§)([0-9a-fA-FklmnorFKLMNOR])/g;
  let textResult = "";

  textResult = text.replace(REGEX, "");

  return textResult;
};
