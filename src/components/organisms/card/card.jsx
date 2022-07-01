import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../theme/useTheme';
import './card.css';

const Card = (props) => {
  const { theme } = useTheme();
  const Wrapper = styled.div`
    height: 93px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px 0px 16px;
  `;
  const CardTitle = styled.h3``;

  const CardSubtitle = styled.h4`
    color: ${theme.colors.text.secondary};
    margin-top: 10px;
  `;

  return (
    <Wrapper>
      <CardTitle className='bold'>{props.title}</CardTitle>
      <CardSubtitle>{props.subtitle}</CardSubtitle>
    </Wrapper>
  );
};

export default Card;
