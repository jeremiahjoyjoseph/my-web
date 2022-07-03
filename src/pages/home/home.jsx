import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataContoller';

import { home_data } from '../../data/home';

const Home = (props) => {
  const [data] = useState(home_data);
  return (
    <div className='page-home'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default Home;
