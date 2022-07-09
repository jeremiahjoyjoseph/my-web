import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { music_data } from '../../data/music';

const Music = (props) => {
  const [data] = useState(music_data);
  return (
    <div className='page-music'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default Music;
