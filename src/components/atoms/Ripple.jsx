import { ButtonBase } from '@mui/material';
import React, { Fragment } from 'react';
import MotionDiv from './MotionDiv';

const Ripple = (props) => {
  const slideUp = {
    hidden: {
      opacity: 0,
      y: '+100vh',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', delay: 3 },
    },
  };
  return (
    <Fragment>
      {props.animation ? (
        <MotionDiv
          style={props.style}
          variants={slideUp}
          initial='hidden'
          animate='visible'
        >
          <ButtonBase
            sx={{ width: '100%' }}
            disableRipple={props.disableRipple}
          >
            {props.children}
          </ButtonBase>
        </MotionDiv>
      ) : (
        <div style={props.style}>
          <ButtonBase
            sx={{ width: '100%' }}
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
