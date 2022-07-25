import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import TypeAnimationText from '../organisms/typeAnimationText/typeAnimationText';

const Subtitle = (props) => {
  const { theme } = useTheme();

  // const handleClick = _.debounce(() => {
  //   switch (props.data.clickToAction) {
  //     case 'navigate':
  //       navigate(`/${props.data.route}`);
  //       break;
  //     case 'external':
  //       window.open(props.data.link, '_blank');
  //       break;
  //     case 'download':
  //       saveAs(props.data.file, props.data.fileName);
  //       break;
  //     default:
  //       break;
  //   }
  // }, 0);

  return (
    <Text theme={theme} className='semi-bold'>
      {props.children}
    </Text>
  );
};

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default Subtitle;
