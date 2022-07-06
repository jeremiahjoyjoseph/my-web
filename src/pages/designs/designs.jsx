import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataContoller';
import { designs_data } from '../../data/designs';

const Designs = (props) => {
  const [data] = useState(designs_data);
  return (
    <div className='page-designs'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default Designs;
