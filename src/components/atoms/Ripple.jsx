import { ButtonBase } from '@mui/material';
import React from 'react';
import { useTheme } from '../../theme/useTheme';

const Ripple = (props) => {
  const { theme } = useTheme();
  return (
    <ButtonBase sx={{ fontFamily: theme.font, width: '100%' }}>
      {props.children}
    </ButtonBase>
  );
};

export default Ripple;
