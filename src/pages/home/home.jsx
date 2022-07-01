import Subtitle from '../../components/atoms/Subtitle';
import Card from '../../components/organisms/card/card';
import CardsWrapper from '../../components/organisms/cardsWrapper/cardsWrapper';
import Header from '../../components/organisms/header/header';
import TitleSection from '../../components/organisms/titleSection/titleSection';

const Home = (props) => {
  return (
    <div className='page-home'>
      <Header />
      <div className='content-wrapper'>
        <TitleSection title='Jeremiah Joy Joseph'>
          <Subtitle>front-end developer</Subtitle>
        </TitleSection>
        <CardsWrapper>
          <Card title='Projects' subtitle='Dev' />
        </CardsWrapper>
      </div>
    </div>
  );
};

export default Home;
