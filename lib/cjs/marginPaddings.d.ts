import { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';
import { PixelOptions } from './sizing';
export declare type PixelCombinations = [PixelOptions] | [PixelOptions, PixelOptions] | [PixelOptions, PixelOptions, PixelOptions] | [PixelOptions, PixelOptions, PixelOptions, PixelOptions];
export declare function joinPixelArray(pixelValues: PixelCombinations, conversion?: 'rem' | 'pixel'): string;
export declare function getPadding(...paddingSizes: PixelCombinations): FlattenInterpolation<ThemeProps<DefaultTheme>>;
export declare function getMargin(...marginSizes: PixelCombinations): FlattenInterpolation<ThemeProps<DefaultTheme>>;
