import { FlattenSimpleInterpolation } from 'styled-components';
declare type BaseAlignmentOption = 'flex-start' | 'flex-end' | 'center';
interface FlexGetterOps {
    alignItems?: BaseAlignmentOption | 'stretch' | 'baseline';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: BaseAlignmentOption | 'space-between' | 'space-around' | 'space-evenly';
    alignContent?: BaseAlignmentOption | 'stretch' | 'space-between' | 'space-around';
    gap?: [number] | [number, number];
}
export declare function getFlexCSS(options?: FlexGetterOps, extraCss?: FlattenSimpleInterpolation): FlattenSimpleInterpolation;
export declare const flexAlignCenter: FlattenSimpleInterpolation;
export declare const flexAlignCenterColumn: FlattenSimpleInterpolation;
export declare const flexBetween: FlattenSimpleInterpolation;
export declare const flexMiddle: FlattenSimpleInterpolation;
export declare const flexMiddleColumn: FlattenSimpleInterpolation;
export declare const flexJustifyCenter: FlattenSimpleInterpolation;
export declare const flexJustifyCenterColumn: FlattenSimpleInterpolation;
export declare const flex: {
    alignCenter: FlattenSimpleInterpolation;
    alignCenterWrap: FlattenSimpleInterpolation;
    alignCenterColumn: FlattenSimpleInterpolation;
    alignCenterColumnWrap: FlattenSimpleInterpolation;
    between: FlattenSimpleInterpolation;
    betweenWrap: FlattenSimpleInterpolation;
    middle: FlattenSimpleInterpolation;
    middleWrap: FlattenSimpleInterpolation;
    middleColumn: FlattenSimpleInterpolation;
    justifyCenter: FlattenSimpleInterpolation;
    justifyCenterColumn: FlattenSimpleInterpolation;
    justifyCenterColumnWrap: FlattenSimpleInterpolation;
};
export {};
