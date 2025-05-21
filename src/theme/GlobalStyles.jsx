import { createGlobalStyle } from "styled-components";
import { device } from "../utils/helperFunctions";
import fonts from "./fonts";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font.regular};
    margin: 0;
    font-weight: ${fonts.weight.normal};
    padding: 20px 16px;

    @media ${device.laptop}{
      padding: 0px 78px;
      height: 100vh;
      overflow: hidden;
    }
    @media ${device.laptopL}{
      padding: 0px 136px;
    }
  }

  /* Typography styles that work with Tailwind */
  h1, h2, h3, h4, h5, h6 {
    display: flex;
    margin: 0px;
    font-family: ${({ theme }) => theme.font.regular};
  }

  h1 {
    font-size: ${fonts.size.h1}px;
    font-weight: ${fonts.weight.normal};
  }

  h2 {
    font-size: ${fonts.size.h2}px;
    font-weight: ${fonts.weight.normal};
  }

  h3 {
    font-size: ${fonts.size.h3}px;
    font-weight: ${fonts.weight.normal};
  }

  h4 {
    font-size: ${fonts.size.h4}px;
    font-weight: ${fonts.weight.normal};
  }

  h5 {
    font-size: ${fonts.size.h5}px;
    font-weight: ${fonts.weight.normal};
  }

  h6 {
    font-size: ${fonts.size.h6}px;
    font-weight: ${fonts.weight.normal};
  }

  .colorSecondary{
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  button {
    color: ${({ theme }) => theme.colors.text.primary};
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
      width: 100%;
      position: relative;
      overflow: hidden;
    }
  }
`;
