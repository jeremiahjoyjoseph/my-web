import React from 'react';
import Icon from '../atoms/Icon';
import { IconButton as MuiIconButton } from '@mui/material';

const IconButton = (props) => {
  return (
    <MuiIconButton 
      sx={props.style} 
      onClick={props.onClick}
      className="group"
    >
      <Icon 
        {...props} 
        className={`transition-transform duration-300 group-hover:-translate-x-1 ${props.className || ''}`} 
      />
    </MuiIconButton>
  );
};

export default IconButton;
