import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { edp_data } from '../../data/edp';

const EDP = (props) => {
  const [data] = useState(edp_data);
  return (
    <div className='page'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default EDP;
