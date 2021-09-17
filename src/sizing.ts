import { css, FlattenSimpleInterpolation } from 'styled-components';

import { PIXEL_TO_REM } from './utils/constants';

import { PixelOptions } from './types';

export interface BoxGetterOptions {
  useRem?: boolean;
}

export function getPixel(px: PixelOptions): string {
  if (typeof px === 'string') return px;

  return `${px / PIXEL_TO_REM}px`;
}

export function convertPixelToRem(px: PixelOptions): string {
  if (typeof px === 'string') return px;

  return `${px / PIXEL_TO_REM}rem`;
}

export const getBoxWidthAndHeight = (
  boxSize: number,
  { useRem }: BoxGetterOptions = {},
): FlattenSimpleInterpolation => {
  const size = useRem ? convertPixelToRem(boxSize) : `${boxSize}px`;

  return css`
    height: ${size};
    width: ${size};
  `;
};
