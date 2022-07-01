import React from 'react';
import styled from 'styled-components';

const CardsWrapper = (props) => {
  const CardsWrapper = styled.div`
    margin-top: 75px;
  `;
  return <CardsWrapper>{props.children}</CardsWrapper>;
};

export default CardsWrapper;
