import { createGlobalStyle } from 'styled-components';

export const MinimalistGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 960px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media(max-width: 600px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  button {
    cursor: pointer;
    font: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
