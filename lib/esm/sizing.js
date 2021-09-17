var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
import { PIXEL_TO_REM } from './utils/constants';
export function getPixel(px) {
    if (typeof px === 'string')
        return px;
    return px / PIXEL_TO_REM + "px";
}
export function convertPixelToRem(px) {
    if (typeof px === 'string')
        return px;
    return px / PIXEL_TO_REM + "rem";
}
export var getBoxWidthAndHeight = function (boxSize, _a) {
    var _b = _a === void 0 ? {} : _a, useRem = _b.useRem;
    var size = useRem ? convertPixelToRem(boxSize) : boxSize + "px";
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", ";\n    width: ", ";\n  "], ["\n    height: ", ";\n    width: ", ";\n  "])), size, size);
};
var templateObject_1;
