import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Card from '../components/organisms/card/card';
import CardsWrapper from '../components/organisms/cardsWrapper/cardsWrapper';
import TitleSection from '../components/organisms/titleSection/titleSection';
const DataController = ({ data }) => {
  return (
    <div className='content-wrapper'>
      <TitleSection title={data.title}>
        {data.subtitle.data.map((subtitleItem, index) => (
          <Subtitle key={index}>{subtitleItem}</Subtitle>
        ))}
      </TitleSection>
      <CardsWrapper>
        {Object.keys(data.cards).map((key, index) => (
          <Card
            key={index}
            style={{ marginTop: index !== 0 ? 10 : 0 }}
            index={index}
            data={data.cards[key]}
          />
        ))}
      </CardsWrapper>
    </div>
  );
};

export default DataController;