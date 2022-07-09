import React, { useEffect, useState } from 'react';
import arrow_up_right from '../../assets/icons/T_001/arrow-up-right.svg';
import { useTheme } from '../../theme/useTheme';

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
