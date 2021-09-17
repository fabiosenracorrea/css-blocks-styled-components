"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoxWidthAndHeight = exports.convertPixelToRem = exports.getPixel = void 0;
var styled_components_1 = require("styled-components");
var constants_1 = require("./utils/constants");
function getPixel(px) {
    if (typeof px === 'string')
        return px;
    return px / constants_1.PIXEL_TO_REM + "px";
}
exports.getPixel = getPixel;
function convertPixelToRem(px) {
    if (typeof px === 'string')
        return px;
    return px / constants_1.PIXEL_TO_REM + "rem";
}
exports.convertPixelToRem = convertPixelToRem;
var getBoxWidthAndHeight = function (boxSize, _a) {
    var _b = _a === void 0 ? {} : _a, useRem = _b.useRem;
    var size = useRem ? convertPixelToRem(boxSize) : boxSize + "px";
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", ";\n    width: ", ";\n  "], ["\n    height: ", ";\n    width: ", ";\n  "])), size, size);
};
exports.getBoxWidthAndHeight = getBoxWidthAndHeight;
var templateObject_1;
