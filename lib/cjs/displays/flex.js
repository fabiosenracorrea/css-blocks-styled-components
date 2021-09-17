"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flex = exports.flexJustifyCenterColumn = exports.flexJustifyCenter = exports.flexMiddleColumn = exports.flexMiddle = exports.flexBetween = exports.flexAlignCenterColumn = exports.flexAlignCenter = exports.getFlexCSS = void 0;
/* eslint-disable camelcase */
var styled_components_1 = require("styled-components");
var marginPaddings_1 = require("../marginPaddings");
var constants_1 = require("../utils/constants");
var CAPITALIZED_LETTER = /[A-Z]/g;
function convertCamelToCSS(camelCaseProp) {
    var asCSSformatted = camelCaseProp.replace(CAPITALIZED_LETTER, function (matched) { return "-" + matched.toLowerCase(); });
    return asCSSformatted;
}
function getFlexCSS(options, extraCss) {
    if (options === void 0) { options = {}; }
    var allOptions = __assign(__assign({}, options), { display: 'flex' });
    var style = Object.entries(allOptions).reduce(function (accCss, _a) {
        var flexProp = _a[0], value = _a[1];
        var cssProp = convertCamelToCSS(flexProp);
        var cssValue = Array.isArray(value) ? (0, marginPaddings_1.joinPixelArray)(value) : value;
        var cssLine = cssProp + ": " + cssValue + ";";
        return "" + accCss + cssLine;
    }, constants_1.EMPTY_STRING);
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", "\n  "], ["\n    ", ";\n    ", "\n  "])), extraCss, style);
}
exports.getFlexCSS = getFlexCSS;
/*
  LESS CALCULATION OPTIONS
*/
exports.flexAlignCenter = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.flexAlignCenterColumn = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), exports.flexAlignCenter);
exports.flexBetween = (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  justify-content: space-between;\n"], ["\n  ", "\n  justify-content: space-between;\n"])), exports.flexAlignCenter);
exports.flexMiddle = (0, styled_components_1.css)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  justify-content: center;\n"], ["\n  ", "\n  justify-content: center;\n"])), exports.flexAlignCenter);
exports.flexMiddleColumn = (0, styled_components_1.css)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), exports.flexMiddle);
exports.flexJustifyCenter = (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
exports.flexJustifyCenterColumn = (0, styled_components_1.css)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), exports.flexJustifyCenter);
exports.flex = {
    alignCenter: exports.flexAlignCenter,
    alignCenterWrap: getFlexCSS({ flexWrap: 'wrap' }, exports.flexAlignCenter),
    alignCenterColumn: exports.flexAlignCenterColumn,
    alignCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, exports.flexAlignCenterColumn),
    between: exports.flexBetween,
    betweenWrap: getFlexCSS({ flexWrap: 'wrap' }, exports.flexBetween),
    middle: exports.flexMiddle,
    middleWrap: getFlexCSS({ flexWrap: 'wrap' }, exports.flexMiddle),
    middleColumn: exports.flexMiddleColumn,
    justifyCenter: exports.flexJustifyCenter,
    justifyCenterColumn: exports.flexJustifyCenterColumn,
    justifyCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, exports.flexJustifyCenterColumn),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
