# CSS Blocks for Styled Components

A library designed to use JS' powers to reduce css duplication and facilitate styling for React applications with **styled-components**.

## Example

```jsx
import styled from 'styled-components';
import { getScrollbarStyle } from 'css-blocks-styled-components';

export const SomeHugeContainer = styled.div`
  ${getScrollbarStyle({ scrollColor: '#ff9000' })}
`;
```

This is the first deploy, documentation will be updated.
