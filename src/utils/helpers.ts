import { convertPixelToRem, getPixel } from '../sizing';

import { PixelCombinations } from '../types';

export function joinPixelArray(
  pixelValues: PixelCombinations,
  conversion: 'rem' | 'pixel' = 'rem',
): string {
  const isRem = conversion === 'rem';
  const conversionFn = isRem ? convertPixelToRem : getPixel;

  const joined = pixelValues.map(conversionFn).join(' ');

  return joined;
}
