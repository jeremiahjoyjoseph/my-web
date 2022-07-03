import { useState } from 'react';
import Subtitle from '../../components/atoms/Subtitle';
import Card from '../../components/organisms/card/card';
import CardsWrapper from '../../components/organisms/cardsWrapper/cardsWrapper';
import Header from '../../components/organisms/header/header';
import TitleSection from '../../components/organisms/titleSection/titleSection';

import { data as home_data } from '../../data/home';

const Home = (props) => {
  const [data] = useState(home_data);
  return (
    <div className='page-home'>
      <Header />
      <div className='content-wrapper'>
        <TitleSection title={data.title}>
          {data.subtitle.data.map((subtitleItem) => (
            <Subtitle>{subtitleItem}</Subtitle>
          ))}
        </TitleSection>
        <CardsWrapper>
          {data.cards.map((cardItem, index) => (
            <Card
              title={cardItem.title}
              subtitle={cardItem.subtitle}
              style={{ marginTop: index !== 0 ? 10 : 0 }}
              index={index}
            />
          ))}
        </CardsWrapper>
      </div>
    </div>
  );
};

export default Home;
