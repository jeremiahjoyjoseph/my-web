import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { pax_data } from '../../data/pax';

const PAX = (props) => {
  const [data] = useState(pax_data);
  return (
    <div className='page'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default PAX;
