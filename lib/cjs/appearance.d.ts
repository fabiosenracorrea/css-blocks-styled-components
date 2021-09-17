import { FlattenSimpleInterpolation } from 'styled-components';
import { PixelStringOptions } from './sizing';
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
export declare const noBorderNoOutline: FlattenSimpleInterpolation;
export declare function getScrollbarStyle({ scrollColor, backgroundColor, height, useRem, width, style, borderRadius, borderWidth, }: ScrollBarOptions): FlattenSimpleInterpolation;
