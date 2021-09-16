var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { css } from 'styled-components';
export var flexAlignCenter = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var flexBetween = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  justify-content: space-between;\n"], ["\n  ", "\n  justify-content: space-between;\n"])), flexAlignCenter);
export var flexMiddle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  justify-content: center;\n"], ["\n  ", "\n  justify-content: center;\n"])), flexAlignCenter);
export var flexJustifyCenter = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
