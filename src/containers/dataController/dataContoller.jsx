import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../components/atoms/Subtitle';
import Card from '../../components/organisms/card/card';
import CardsWrapper from '../../components/organisms/cardsWrapper/cardsWrapper';
import TitleSection from '../../components/organisms/titleSection/titleSection';
import { device } from '../../utils/helperFunctions';

const DataController = ({ data }) => {
  return (
    <ContentWrapper>
      <TitleSection title={data.title}>
        {data.subtitle.type === 'text'
          ? data.subtitle.data.map((subtitle_data, index) => (
              <Subtitle key={index} data={subtitle_data}>
                {subtitle_data.title}
              </Subtitle>
            ))
          : null}
      </TitleSection>
      <CardsWrapper>
        {Object.keys(data.cards).map((key, index) => (
          <Card
            key={index}
            title={data.cards[key].title}
            subtitle={data.cards[key].subtitle}
            data={data.cards[key]}
            index={index}
          />
        ))}
      </CardsWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  @media ${device.laptop} {
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
`;

export default DataController;
