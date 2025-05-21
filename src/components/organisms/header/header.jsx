import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { backButtonAnimation } from "../../../utils/animationConfig";
import { slideRight } from "../../../utils/animations";
import { device } from "../../../utils/helperFunctions";
import MotionDiv from "../../atoms/MotionDiv";
import IconButton from "../../molecules/iconButton";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [canGoBack] = useState(location.key !== "default" ? true : false);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <Wrapper>
      {backButtonAnimation.active ? (
        <MotionDiv
          variants={slideRight(backButtonAnimation.startAfter)}
          initial="hidden"
          animate="visible"
        >
          <IconButton
            name="arrow_left"
            style={{ paddingLeft: 0 }}
            onClick={handleBack}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </MotionDiv>
      ) : (
        <IconButton
          name="arrow_left"
          style={{ paddingLeft: 0 }}
          onClick={handleBack}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px;
  @media ${device.laptop} {
    margin-top: 50px;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export default Header;
