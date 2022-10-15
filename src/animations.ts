import { css, Keyframes, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const shimmerAnimation = css`
  animation: ${shimmer} 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`;

export const getSlideUpAnimation = ({
  changeOpacity = true,
  yDistance = 50,
}: {
  changeOpacity?: boolean;
  yDistance?: number;
}): Keyframes => keyframes`
from {
  ${changeOpacity ? 'opacity: 0;' : ''}
  transform: translateY(${yDistance}px);
}

to {
  ${changeOpacity ? 'opacity: 1;' : ''}
  transform: translateY(0);
}
`;

export const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const disappear = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const getGrowAnimation = (width: string): Keyframes => keyframes`
  from {
    width: 0;
  }

  to {
    width: ${width};
  }
`;
