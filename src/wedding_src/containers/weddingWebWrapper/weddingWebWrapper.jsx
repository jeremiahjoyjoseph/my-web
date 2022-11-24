import React from "react";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { Wrapper } from "./style";

const WeddingWebWrapper = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {props.children}
    </Wrapper>
  );
};

export default WeddingWebWrapper;
