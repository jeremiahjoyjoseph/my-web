import React from 'react';
import Subtitle from '../components/atoms/Subtitle';
import Card from '../components/organisms/card/card';
import CardsWrapper from '../components/organisms/cardsWrapper/cardsWrapper';
import TitleSection from '../components/organisms/titleSection/titleSection';
const DataController = ({ data }) => {
  return (
    <div className='content-wrapper'>
      <TitleSection title={data.title}>
        {data.subtitle.type === 'text'
          ? data.subtitle.data.map((subtitle_data, index) => (
              <Subtitle key={index}>{subtitle_data.title}</Subtitle>
            ))
          : null}
      </TitleSection>
      <CardsWrapper>
        {Object.keys(data.cards).map((key, index) => (
          <Card
            key={index}
            title={data.cards[key].title}
            subtitle={data.cards[key].subtitle}
            style={{ marginTop: index !== 0 ? 10 : 0 }}
            data={data.cards[key]}
            index={index}
          />
        ))}
      </CardsWrapper>
    </div>
  );
};

export default DataController;
