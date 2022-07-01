import React from 'react';
import Subtitle from '../../components/atoms/Subtitle';
import Title from '../../components/atoms/Title';
import Card from '../../components/organisms/card/card';
import Header from '../../components/organisms/header/header';

const Home = (props) => {
  return (
    <div className='page-home'>
      <Header />
      <div className='content-wrapper'>
        <div className='title-wrapper'>
          <Title>Jeremiah Joy Joseph</Title>
          <div className='subTitle-wrapper'>
            <Subtitle>front-end developer</Subtitle>
            <Subtitle>designer</Subtitle>
            <Subtitle>musician</Subtitle>
          </div>
        </div>
        <div className='cards-wrapper'>
          <Card title='Projects' subtitle='Dev' />
        </div>
      </div>
    </div>
  );
};

export default Home;
