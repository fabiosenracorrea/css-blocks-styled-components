/* eslint-disable camelcase */
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { joinPixelArray } from '../marginPaddings';
import { EMPTY_STRING } from '../utils/constants';

type BaseAlignmentOption = 'flex-start' | 'flex-end' | 'center';

interface FlexGetterOps {
  alignItems?: BaseAlignmentOption | 'stretch' | 'baseline';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: BaseAlignmentOption | 'space-between' | 'space-around' | 'space-evenly';
  alignContent?: BaseAlignmentOption | 'stretch' | 'space-between' | 'space-around';
  gap?: [number] | [number, number];
}

const CAPITALIZED_LETTER = /[A-Z]/g;

function convertCamelToCSS(camelCaseProp: string): string {
  const asCSSformatted = camelCaseProp.replace(
    CAPITALIZED_LETTER,
    (matched) => `-${matched.toLowerCase()}`,
  );

  return asCSSformatted;
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

export const flexJustifyCenterColumn = css`
  ${flexJustifyCenter}
  flex-direction: column;
`;

export const flex = {
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
