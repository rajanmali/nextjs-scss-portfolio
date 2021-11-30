import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fffbf1;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const ContentWrapper = styled.div`
  width: 85%;
`;

export default GlobalStyle;
