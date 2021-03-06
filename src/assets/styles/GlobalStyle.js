import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    /* font-family: 'Montserrat', sans-serif; */
    font-family: Futura, Futura-Medium, "Futura Medium", "Century Gothic", CenturyGothic, "Apple Gothic", AppleGothic, "URW Gothic L", "Avant Garde", sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
  }
  a, button {
    /* font-family: 'Montserrat', sans-serif; */
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  p{
      color: ${({ theme }) => theme.colors.text};
  }
  h1, h2, h3{
    margin: 0;
  }
  h1{
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.l}
  }
  h2{
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.lm}
  }
  h3{
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.m}
  }
`;
