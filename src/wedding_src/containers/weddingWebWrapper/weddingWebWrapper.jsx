import React, { useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { GlobalStyles } from "../../theme/GlobalStyles";
import Header from "../header/header";
import { Wrapper } from "./style";

const WeddingWebWrapper = (props) => {
  const { setMode, theme } = useTheme();

  useEffect(() => {
    if (theme.name !== "Wedding") {
      setMode("wedding");
    }
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {props.children}
    </Wrapper>
  );
};

export default WeddingWebWrapper;
