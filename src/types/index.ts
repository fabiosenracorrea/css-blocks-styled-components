export type PixelStringOptions =
  | 'auto'
  | 'fit-content'
  | 'min-content'
  | 'max-content'
  | 'inherit'
  | 'unset';

export type PixelOptions = number | PixelStringOptions;

export type PixelCombinations =
  | [PixelOptions]
  | [PixelOptions, PixelOptions]
  | [PixelOptions, PixelOptions, PixelOptions]
  | [PixelOptions, PixelOptions, PixelOptions, PixelOptions];
