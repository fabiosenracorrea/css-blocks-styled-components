import { css } from 'styled-components';

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexBetween = css`
  ${flexAlignCenter}
  justify-content: space-between;
`;

export const flexMiddle = css`
  ${flexAlignCenter}
  justify-content: center;
`;

export const flexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;
