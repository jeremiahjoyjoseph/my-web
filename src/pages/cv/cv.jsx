import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { cv_data } from '../../data/cv';

const CV = (props) => {
  const [data] = useState(cv_data);
  return (
    <div className='page-cv'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default CV;
