import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { designs_data } from '../../data/designs';

const Designs = (props) => {
  const [data] = useState(designs_data);
  return (
    <div className='page'>
      <Header />
      <DataController data={data} {...props} titleSize="h40" largeTitleSize="h60" />
    </div>
  );
};

export default Designs;
