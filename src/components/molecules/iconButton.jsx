import React from 'react';
import Icon from '../atoms/Icon';
import { IconButton as MuiIconButton } from '@mui/material';

const IconButton = (props) => {
  return (
    <MuiIconButton sx={props.style} onClick={props.onClick}>
      <Icon {...props} />
    </MuiIconButton>
  );
};

export default IconButton;
