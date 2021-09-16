"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexJustifyCenter = exports.flexMiddle = exports.flexBetween = exports.flexAlignCenter = void 0;
var styled_components_1 = require("styled-components");
exports.flexAlignCenter = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.flexBetween = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  justify-content: space-between;\n"], ["\n  ", "\n  justify-content: space-between;\n"])), exports.flexAlignCenter);
exports.flexMiddle = (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  justify-content: center;\n"], ["\n  ", "\n  justify-content: center;\n"])), exports.flexAlignCenter);
exports.flexJustifyCenter = (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
