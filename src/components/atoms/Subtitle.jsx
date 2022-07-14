import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import TypeAnimationText from '../organisms/typeAnimationText/typeAnimationText';

const Subtitle = (props) => {
  const { theme } = useTheme();
  console.log(props.animation);

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
    <Fragment>
      {props.animation ? (
        <TypeAnimationText
          type='paste'
          startAfter={props.animation.startAfter}
        >{`<h3 class='colorSecondary semi-bold'>${props.children}</h3>`}</TypeAnimationText>
      ) : (
        <Text theme={theme} className='semi-bold'>
          {props.children}
        </Text>
      )}
    </Fragment>
  );
};

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default Subtitle;
