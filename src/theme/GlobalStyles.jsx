import { createGlobalStyle } from "styled-components";
import { device } from "../utils/helperFunctions";
import fonts from "./fonts";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font.primary};
    margin: 0;
    font-weight: ${fonts.weight.normal};
    padding: 20px 40px 40px 40px;

    @media ${device.laptop}{
      padding: 00px 40px 0px 40px;
      height: 100vh;
      overflow: hidden;
    }
    @media ${device.laptopL}{
      padding: 00px 150px 0px 150px;
    }
  }

  h6 {
    display: flex;
    font-size: ${fonts.size.h6}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
  }

  h1 {
    display: flex;
    font-size: ${fonts.size.h1}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
  }

  h2 {
    display: flex;
    font-size: ${fonts.size.h2}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
  }

  h3 {
    display: flex;
    font-size: ${fonts.size.h3}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
  }

  .colorSecondary{
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  h4 {
    display: flex;
    font-size: ${fonts.size.h4}px;
    margin: 0px;
    font-weight: ${fonts.weight.normal};
  }

  .bold{
    font-weight: ${fonts.weight.bold};
  }

  .semi-bold{
    font-weight: ${fonts.weight.semi};
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
