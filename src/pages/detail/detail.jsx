import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { projects_data } from '../../data/projects';
import PageWrapper from '../../components/atoms/PageWrapper';

const Detail = (props) => {
  const { detailPageName } = useParams();

  return (
    <PageWrapper>
      <Header data={projects_data.data[detailPageName]} />
      <DataController
        pageName={detailPageName}
        data={projects_data.data[detailPageName]}
        {...props}
        titleSize="h40"
        largeTitleSize="h60"
      />
    </PageWrapper>
  );
};

export default Detail;
