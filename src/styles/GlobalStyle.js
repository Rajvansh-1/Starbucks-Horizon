import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0a0a0a;
    color: #f0f0f0;
    font-family: Helvetica, Arial, sans-serif;
  }
`;