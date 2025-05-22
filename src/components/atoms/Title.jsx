import React from "react";
import styled from "styled-components";
import fonts from "../../theme/fonts";
import { device } from "../../utils/helperFunctions";

const Title = (props) => {
  // Split into words first, then into letters
  const words = props.children.split(" ").map((word, wordIndex) => (
    <WordWrapper key={wordIndex}>
      {word.split("").map((letter, letterIndex) => (
        <LetterSpan 
          key={`${wordIndex}-${letterIndex}`} 
          isSpace={false}
        >
          {letter}
        </LetterSpan>
      ))}
    </WordWrapper>
  ));

  return (
    <CustomTitle className="bold" {...props}>
      <DesktopTitle>{words}</DesktopTitle>
      <MobileTitle>{props.children}</MobileTitle>
    </CustomTitle>
  );
};

const LetterSpan = styled.span`
  transition: transform 0.3s ease;
  display: inline-block;
  white-space: pre;

  &:hover {
    transform: translateY(-8px);
  }
`;

const WordWrapper = styled.span`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const DesktopTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: normal;
  word-wrap: break-word;
  word-break: keep-all;

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;

const MobileTitle = styled.div`
  display: block;
  white-space: normal;
  word-wrap: break-word;
  word-break: keep-all;
  @media ${device.laptop} {
    display: none;
  }
`;

export const CustomTitle = styled.h1`
  font-size: ${({ titleSize }) =>
    titleSize ? `${fonts.size[titleSize]}px` : fonts.size.h40};
  max-width: 100%;
  word-wrap: break-word;
  word-break: keep-all;

  @media ${device.laptopL} {
    font-size: ${({ largeTitleSize }) =>
      largeTitleSize ? `${fonts.size[largeTitleSize]}px` : fonts.size.h60};
  }
`;

export default Title;
