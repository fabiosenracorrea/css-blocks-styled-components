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
/* eslint-disable camelcase */
import { css } from 'styled-components';
import { joinPixelArray } from '../marginPaddings';
import { EMPTY_STRING } from '../utils/constants';
var CAPITALIZED_LETTER = /[A-Z]/g;
function convertCamelToCSS(camelCaseProp) {
    var asCSSformatted = camelCaseProp.replace(CAPITALIZED_LETTER, function (matched) { return "-" + matched.toLowerCase(); });
    return asCSSformatted;
}
export function getFlexCSS(options, extraCss) {
    if (options === void 0) { options = {}; }
    var allOptions = __assign(__assign({}, options), { display: 'flex' });
    var style = Object.entries(allOptions).reduce(function (accCss, _a) {
        var flexProp = _a[0], value = _a[1];
        var cssProp = convertCamelToCSS(flexProp);
        var cssValue = Array.isArray(value) ? joinPixelArray(value) : value;
        var cssLine = cssProp + ": " + cssValue + ";";
        return "" + accCss + cssLine;
    }, EMPTY_STRING);
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", "\n  "], ["\n    ", ";\n    ", "\n  "])), extraCss, style);
}
/*
  LESS CALCULATION OPTIONS
*/
export var flexAlignCenter = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var flexAlignCenterColumn = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), flexAlignCenter);
export var flexBetween = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  justify-content: space-between;\n"], ["\n  ", "\n  justify-content: space-between;\n"])), flexAlignCenter);
export var flexMiddle = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  justify-content: center;\n"], ["\n  ", "\n  justify-content: center;\n"])), flexAlignCenter);
export var flexMiddleColumn = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), flexMiddle);
export var flexJustifyCenter = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
export var flexJustifyCenterColumn = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), flexJustifyCenter);
export var flex = {
    alignCenter: flexAlignCenter,
    alignCenterWrap: getFlexCSS({ flexWrap: 'wrap' }, flexAlignCenter),
    alignCenterColumn: flexAlignCenterColumn,
    alignCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, flexAlignCenterColumn),
    between: flexBetween,
    betweenWrap: getFlexCSS({ flexWrap: 'wrap' }, flexBetween),
    middle: flexMiddle,
    middleWrap: getFlexCSS({ flexWrap: 'wrap' }, flexMiddle),
    middleColumn: flexMiddleColumn,
    justifyCenter: flexJustifyCenter,
    justifyCenterColumn: flexJustifyCenterColumn,
    justifyCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, flexJustifyCenterColumn),
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
