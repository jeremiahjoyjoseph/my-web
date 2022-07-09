import { ButtonBase } from '@mui/material';
import React from 'react';

const Ripple = (props) => {
  return <ButtonBase sx={{ width: '100%' }}>{props.children}</ButtonBase>;
};

export default Ripple;
