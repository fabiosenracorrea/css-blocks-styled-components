/* eslint-disable camelcase */
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { convertCamelToCSS } from '../utils/camelToCss';
import { EMPTY_STRING } from '../utils/constants';
import { joinPixelArray } from '../utils/helpers';

type BaseAlignmentOption = 'flex-start' | 'flex-end' | 'center';

interface FlexGetterOps {
  alignItems?: BaseAlignmentOption | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: BaseAlignmentOption | 'space-between' | 'space-around' | 'space-evenly';
  alignContent?: BaseAlignmentOption | 'stretch' | 'space-between' | 'space-around';
  gap?: [number] | [number, number];
}

export function getFlexCSS(
  options: FlexGetterOps = {},
  extraCss?: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation {
  const allOptions = { ...options, display: 'flex' };

  const style = Object.entries(allOptions).reduce((accCss, [flexProp, value]) => {
    const cssProp = convertCamelToCSS(flexProp);

    const cssValue = Array.isArray(value) ? joinPixelArray(value) : value;

    const cssLine = `${cssProp}: ${cssValue};`;

    return `${accCss}${cssLine}`;
  }, EMPTY_STRING);

  return css`
    ${extraCss};
    ${style}
  `;
}

/*
  LESS CALCULATION OPTIONS
*/

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexAlignCenterColumn = css`
  ${flexAlignCenter}
  flex-direction: column;
`;

export const flexBetween = css`
  ${flexAlignCenter}
  justify-content: space-between;
`;

export const flexMiddle = css`
  ${flexAlignCenter}
  justify-content: center;
`;

export const flexMiddleColumn = css`
  ${flexMiddle}
  flex-direction: column;
`;

export const flexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const flexJustifyStart = css`
  display: flex;
  justify-content: center;
`;

export const flexJustifyCenterColumn = css`
  ${flexJustifyCenter}
  flex-direction: column;
`;

export const flexJustifyStartColumn = css`
  ${flexJustifyCenter}
  flex-direction: column;
`;

export const flex = {
  alignCenter: flexAlignCenter,
  alignCenterWrap: getFlexCSS({ flexWrap: 'wrap' }, flexAlignCenter),
  alignCenterColumn: flexAlignCenterColumn,
  alignCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, flexAlignCenterColumn),

  column: getFlexCSS({ flexDirection: 'column' }),

  between: flexBetween,
  betweenWrap: getFlexCSS({ flexWrap: 'wrap' }, flexBetween),

  spaceAroundAlignCenter: getFlexCSS({ justifyContent: 'space-around' }, flexAlignCenter),
  spaceAroundAlingeCenterWrap: getFlexCSS(
    { flexWrap: 'wrap', justifyContent: 'space-around' },
    flexAlignCenter,
  ),

  middle: flexMiddle,
  middleWrap: getFlexCSS({ flexWrap: 'wrap' }, flexMiddle),
  middleColumn: flexMiddleColumn,

  justifyCenter: flexJustifyCenter,
  justifyCenterColumn: flexJustifyCenterColumn,
  justifyCenterColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, flexJustifyCenterColumn),
  justifyStart: flexJustifyStart,
  justifyStartColumn: flexJustifyStartColumn,
  justifyStartColumnWrap: getFlexCSS({ flexWrap: 'wrap' }, flexJustifyStartColumn),

  justifyEnd: getFlexCSS({ justifyContent: 'flex-end' }),
  justifyEndColumn: getFlexCSS({ justifyContent: 'flex-end' }, flexColumn),
  justifyEndColumnWrap: getFlexCSS({ flexWrap: 'wrap', justifyContent: 'flex-end' }, flexColumn),
};
