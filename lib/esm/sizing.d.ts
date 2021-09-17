import { FlattenSimpleInterpolation } from 'styled-components';
export declare type PixelStringOptions = 'auto' | 'fit-content' | 'min-content' | 'max-content' | 'inherit' | 'unset';
export declare type PixelOptions = number | PixelStringOptions;
export interface BoxGetterOptions {
    useRem?: boolean;
}
export declare function getPixel(px: PixelOptions): string;
export declare function convertPixelToRem(px: PixelOptions): string;
export declare const getBoxWidthAndHeight: (boxSize: number, { useRem }?: BoxGetterOptions) => FlattenSimpleInterpolation;
