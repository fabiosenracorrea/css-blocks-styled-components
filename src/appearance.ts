import { css, FlattenSimpleInterpolation } from 'styled-components';

import { convertPixelToRem, getPixel } from './sizing';

import { PixelStringOptions } from './types';

export interface ScrollBarOptions {
  width?: number | PixelStringOptions;
  style?: 'auto' | 'thin' | 'none';
  height?: PixelStringOptions | number;
  useRem?: boolean;
  backgroundColor?: string;
  scrollColor: string;
  borderRadius?: number;
  borderWidth?: number;
}

export const noBorderNoOutline = css`
  border: none;
  outline: none;
`;

export function getScrollbarStyle({
  scrollColor,
  backgroundColor = '#ffffff',
  height = 15,
  useRem = true,
  width = 15,
  style = 'thin',
  borderRadius = 20,
  borderWidth = 4,
}: ScrollBarOptions): FlattenSimpleInterpolation {
  return css`
    scrollbar-width: ${style};

    scrollbar-color: ${scrollColor} ${backgroundColor};

    &::-webkit-scrollbar {
      height: ${useRem ? convertPixelToRem(height) : getPixel(height)};
      width: ${useRem ? convertPixelToRem(width) : getPixel(width)};
    }

    &::-webkit-scrollbar-track {
      background: ${backgroundColor};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${scrollColor};
      border-radius: ${borderRadius}px;
      border: ${borderWidth}px solid ${backgroundColor};
    }
  `;
}

export const getGradientText = (gradient: string): FlattenSimpleInterpolation => css`
  background: ${gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
