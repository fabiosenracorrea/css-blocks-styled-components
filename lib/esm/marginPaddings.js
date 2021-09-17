var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { convertPixelToRem, getPixel } from './sizing';
export function joinPixelArray(pixelValues, conversion) {
    if (conversion === void 0) { conversion = 'rem'; }
    var isRem = conversion === 'rem';
    var conversionFn = isRem ? convertPixelToRem : getPixel;
    var joined = pixelValues.map(conversionFn).join(' ');
    return joined;
}
export function getPadding() {
    var paddingSizes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paddingSizes[_i] = arguments[_i];
    }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", ";\n  "], ["\n    padding: ", ";\n  "])), joinPixelArray(paddingSizes));
}
export function getMargin() {
    var marginSizes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marginSizes[_i] = arguments[_i];
    }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: ", ";\n  "], ["\n    margin: ", ";\n  "])), joinPixelArray(marginSizes));
}
var templateObject_1, templateObject_2;
