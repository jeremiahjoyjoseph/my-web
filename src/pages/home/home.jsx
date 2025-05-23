import { useState } from 'react';
import DataController from '../../containers/dataController/dataContoller';

import { home_data } from '../../data/home';
import PageWrapper from '../../components/atoms/PageWrapper';
import Header from '../../components/organisms/header/header';

const Home = (props) => {
  const [data] = useState(home_data);
  return (
    <PageWrapper>
      <Header data={data} hideGoBack={true} />
      <DataController data={data} {...props} titleSize="h40" largeTitleSize="h60" />
    </PageWrapper>
  );
};

export default Home;
