"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoToHtml = exports.jsonRender = exports.JSONToHtml = exports.textToJSON = exports.textToHTML = exports.cleanTags = exports.motdParser = void 0;
const motdParser_1 = __importDefault(require("./motdParser"));
exports.motdParser = motdParser_1.default;
exports.cleanTags = motdParser_1.default.cleanTags;
exports.textToHTML = motdParser_1.default.textToHTML;
exports.textToJSON = motdParser_1.default.textToJSON;
exports.JSONToHtml = motdParser_1.default.JSONToHtml;
exports.jsonRender = motdParser_1.default.jsonRender;
exports.autoToHtml = motdParser_1.default.autoToHtml;
exports.default = motdParser_1.default;
