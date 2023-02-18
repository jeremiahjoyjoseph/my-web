import { ButtonBase } from "@mui/material";
import React, { Fragment } from "react";
import { cardsAnimation } from "../../utils/animationConfig";
import { slideUp } from "../../utils/animations";
import MotionDiv from "../atoms/MotionDiv";

const Ripple = (props) => {
  return (
    <Fragment>
      {cardsAnimation.active ? (
        <MotionDiv
          style={props.style}
          variants={slideUp(cardsAnimation.startAfter)}
          initial="hidden"
          animate="visible"
        >
          <ButtonBase
            sx={{ width: "100%" }}
            disableRipple={props.disableRipple}
          >
            {props.children}
          </ButtonBase>
        </MotionDiv>
      ) : (
        <div style={props.style}>
          <ButtonBase
            sx={{ width: "100%" }}
            disableRipple={props.disableRipple}
          >
            {props.children}
          </ButtonBase>
        </div>
      )}
    </Fragment>
  );
};

export default Ripple;
