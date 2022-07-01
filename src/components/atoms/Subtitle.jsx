import React from 'react';
import { useTheme } from '../../theme/useTheme';

const Subtitle = (props) => {
  const { theme } = useTheme();
  return (
    <h3
      className='semi-bold'
      style={{
        color: theme.colors.text.secondary,
      }}
    >
      {props.children}
    </h3>
  );
};

export default Subtitle;
