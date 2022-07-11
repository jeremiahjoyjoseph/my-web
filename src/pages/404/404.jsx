import { useState } from 'react';
import DataController from '../../containers/dataController/dataContoller';
import { offline_data } from '../../data/404';

const PageNotFound = (props) => {
  const [data] = useState(offline_data);
  return (
    <div className='page'>
      <DataController data={data} {...props} />
    </div>
  );
};

export default PageNotFound;
