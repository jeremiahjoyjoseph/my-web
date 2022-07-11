import React, { useEffect, useState } from 'react';
import arrow_up_right from '../../assets/icons/T_001/arrow-up-right.svg';
import arrow_left from '../../assets/icons/T_001/arrow-left.svg';
import { useTheme } from '../../hooks/useTheme';

const Icon = (props) => {
  const { theme } = useTheme();
  const [src, setSrc] = useState();
  const [alt, setAlt] = useState();
  const [imageDimensions, setImageDimensions] = useState({
    height: 16,
    width: 16,
  });

  useEffect(() => {
    switch (props.name) {
      case 'arrow_up_right':
        if (theme.id === 'T_001') {
          setSrc(arrow_up_right);
        }
        setAlt('Go to arrow!');
        setImageDimensions({ height: 16, width: 16 });
        break;
      case 'arrow_left':
        if (theme.id === 'T_001') {
          setSrc(arrow_left);
        }
        setAlt('Go to arrow!');
        setImageDimensions({ height: 28, width: 28 });
        break;
      default:
        break;
    }
  }, [props.name, theme.id]);
  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...{
          height: imageDimensions.height,
          width: imageDimensions.width,
        },
        ...props.style,
      }}
    />
  );
};

export default Icon;
