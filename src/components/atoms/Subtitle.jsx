import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { device } from '../../utils/helperFunctions';

const Subtitle = (props) => {
  const { theme } = useTheme();

  return (
    <Text theme={theme} className='semi-bold'>
      {props.children}
    </Text>
  );
};

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 100%;
  line-height: 1.5;

  @media ${device.laptop} {
    max-width: 90%;
  }
`;

export default Subtitle;
