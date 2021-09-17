import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

import { convertPixelToRem, PixelOptions, getPixel } from './sizing';

export type PixelCombinations =
  | [PixelOptions]
  | [PixelOptions, PixelOptions]
  | [PixelOptions, PixelOptions, PixelOptions]
  | [PixelOptions, PixelOptions, PixelOptions, PixelOptions];

export function joinPixelArray(
  pixelValues: PixelCombinations,
  conversion: 'rem' | 'pixel' = 'rem',
): string {
  const isRem = conversion === 'rem';
  const conversionFn = isRem ? convertPixelToRem : getPixel;

  const joined = pixelValues.map(conversionFn).join(' ');

  return joined;
}

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
