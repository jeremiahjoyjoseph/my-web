import React from "react";
import styled from "styled-components";
import fonts from "../../theme/fonts";
import { device } from "../../utils/helperFunctions";

const Title = (props) => {
  // Split the text into individual letters and preserve spaces
  const letters = props.children.split('').map((letter, index) => (
    <LetterSpan 
      key={index} 
      isSpace={letter === ' '}
    >
      {letter}
    </LetterSpan>
  ));

  return (
    <CustomTitle className="bold" {...props}>
      <DesktopTitle>{letters}</DesktopTitle>
      <MobileTitle>{props.children}</MobileTitle>
    </CustomTitle>
  );
};

const LetterSpan = styled.span`
  transition: transform 0.3s ease;
  display: ${props => props.isSpace ? 'inline' : 'inline-block'};
  white-space: pre;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const DesktopTitle = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const MobileTitle = styled.div`
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

export const CustomTitle = styled.h1`
  font-size: ${({ titleSize }) =>
    titleSize ? `${fonts.size[titleSize]}px` : fonts.size.h40};

  @media ${device.laptopL} {
    font-size: ${({ largeTitleSize }) =>
      largeTitleSize ? `${fonts.size[largeTitleSize]}px` : fonts.size.h60};
  }
`;

export default Title;
