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
    margin: 0;
    padding: 0;
  }

  a, button {
    /* font-family: 'Montserrat', sans-serif; */
    color: ${({ theme }) => theme.colors.text};
  }
  p{
      color: ${({ theme }) => theme.colors.text};
  }
  h1, h2, h3{
    margin: 0;
  }
  h1{
        font-size: ${({ theme }) => theme.fontSize.l}
  }
  h2{
        font-size: ${({ theme }) => theme.fontSize.lm}
  }
  h3{
    font-size: ${({ theme }) => theme.fontSize.m}
  }
`;
