import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

import { joinPixelArray } from './utils/helpers';

import { PixelCombinations } from './types';

export function getPadding(
  ...paddingSizes: PixelCombinations
): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return css`
    padding: ${joinPixelArray(paddingSizes)};
  `;
}

export function getMargin(
  ...marginSizes: PixelCombinations
): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return css`
    margin: ${joinPixelArray(marginSizes)};
  `;
}
