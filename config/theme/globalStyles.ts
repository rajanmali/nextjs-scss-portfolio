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

export const ContentWrapper = styled.main`
  width: 100%;
  margin: 40px auto;
  padding: 0 60px;

  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default GlobalStyle;
