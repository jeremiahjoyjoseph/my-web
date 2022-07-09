import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/helperFunctions';
import fonts from './fonts';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font.regular};
    transition: all 0.50s linear;
    margin: 0;
    font-weight: ${fonts.weight.normal};
    padding: 20px 40px 40px 40px;

    @media ${device.laptop}{
      padding: 20px 40px 0px 40px;
      height: 100vh;
      overflow: hidden;
    }
  }

  h6 {
    display: flex;
    font-size: ${fonts.size.h6}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
    font-family: ${({ theme }) => theme.font.regular};
  }

  h1 {
    display: flex;
    font-size: ${fonts.size.h1}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
    font-family: ${({ theme }) => theme.font.regular};
  }

  h3 {
    display: flex;
    font-size: ${fonts.size.h3}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
    font-family: ${({ theme }) => theme.font.regular};
  }

  h4 {
    display: flex;
    font-size: ${fonts.size.h4}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
    font-family: ${({ theme }) => theme.font.regular};
  }

  .bold{
    font-weight: ${fonts.weight.bold};
    font-family: ${({ theme }) => theme.font.bold};
  }

  .semi-bold{
    font-weight: ${fonts.weight.semi};
    font-family: ${({ theme }) => theme.font.semiBold};
  }

  #root {
    @media ${device.laptop}{
      height: 100vh;
    }
  }

  .App {
    @media ${device.laptop}{
      height: 100%;
    }
  }

  .page {
    @media ${device.laptop}{
      height: 100%;
    }
  }
`;
