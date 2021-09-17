"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMargin = exports.getPadding = exports.joinPixelArray = void 0;
var styled_components_1 = require("styled-components");
var sizing_1 = require("./sizing");
function joinPixelArray(pixelValues, conversion) {
    if (conversion === void 0) { conversion = 'rem'; }
    var isRem = conversion === 'rem';
    var conversionFn = isRem ? sizing_1.convertPixelToRem : sizing_1.getPixel;
    var joined = pixelValues.map(conversionFn).join(' ');
    return joined;
}
exports.joinPixelArray = joinPixelArray;
function getPadding() {
    var paddingSizes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paddingSizes[_i] = arguments[_i];
    }
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", ";\n  "], ["\n    padding: ", ";\n  "])), joinPixelArray(paddingSizes));
}
exports.getPadding = getPadding;
function getMargin() {
    var marginSizes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marginSizes[_i] = arguments[_i];
    }
    return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: ", ";\n  "], ["\n    margin: ", ";\n  "])), joinPixelArray(marginSizes));
}
exports.getMargin = getMargin;
var templateObject_1, templateObject_2;
