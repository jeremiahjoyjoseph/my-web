import { ButtonBase } from '@mui/material';
import React from 'react';

const Ripple = (props) => {
  return (
    <div style={props.style}>
      <ButtonBase sx={{ width: '100%' }} disableRipple={props.disableRipple}>
        {props.children}
      </ButtonBase>
    </div>
  );
};

export default Ripple;
