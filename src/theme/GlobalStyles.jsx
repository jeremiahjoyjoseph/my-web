import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    font-weight: ${fonts.weight.normal}
  }

  h6 {
    display: flex;
    font-size: ${fonts.size.h6}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal}
  }

  .bold{
    font-weight: ${fonts.weight.bold}
  }

  .semi-bold{
    font-weight: ${fonts.weight.semi}

  }
`;
