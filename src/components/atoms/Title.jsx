import React from "react";
import styled from "styled-components";
import fonts from "../../theme/fonts";
import { device } from "../../utils/helperFunctions";

const Title = (props) => {
  return (
    <CustomTitle className="bold" {...props}>
      {props.children}
    </CustomTitle>
  );
};

export const CustomTitle = styled.h1`
  font-size: ${({ titleSize }) =>
    titleSize ? `${fonts.size[titleSize]}px` : null};

  @media ${device.laptopL} {
    font-size: ${({ largeTitleSize }) =>
      largeTitleSize ? `${fonts.size[largeTitleSize]}px` : null};
  }
`;

export default Title;
