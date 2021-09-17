var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { convertPixelToRem, getPixel } from './sizing';
export var noBorderNoOutline = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  outline: none;\n"], ["\n  border: none;\n  outline: none;\n"])));
export function getScrollbarStyle(_a) {
    var scrollColor = _a.scrollColor, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? '#ffffff' : _b, _c = _a.height, height = _c === void 0 ? 15 : _c, _d = _a.useRem, useRem = _d === void 0 ? true : _d, _e = _a.width, width = _e === void 0 ? 15 : _e, _f = _a.style, style = _f === void 0 ? 'thin' : _f, _g = _a.borderRadius, borderRadius = _g === void 0 ? 20 : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 4 : _h;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    scrollbar-width: ", ";\n\n    scrollbar-color: ", " ", ";\n\n    &::-webkit-scrollbar {\n      height: ", ";\n      width: ", ";\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ", ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ", ";\n      border-radius: ", "px;\n      border: ", "px solid ", ";\n    }\n  "], ["\n    scrollbar-width: ", ";\n\n    scrollbar-color: ", " ", ";\n\n    &::-webkit-scrollbar {\n      height: ", ";\n      width: ", ";\n    }\n\n    &::-webkit-scrollbar-track {\n      background: ", ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: ", ";\n      border-radius: ", "px;\n      border: ", "px solid ", ";\n    }\n  "])), style, scrollColor, backgroundColor, useRem ? convertPixelToRem(height) : getPixel(height), useRem ? convertPixelToRem(width) : getPixel(width), backgroundColor, scrollColor, borderRadius, borderWidth, backgroundColor);
}
var templateObject_1, templateObject_2;
