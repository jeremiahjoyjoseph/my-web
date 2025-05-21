import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { projects_data } from '../../data/projects';

const Detail = (props) => {
  const { detailPageName } = useParams();
  console.log(detailPageName);
  return (
    <div className='page'>
      <Header />
      <DataController pageName={detailPageName} data={projects_data.data[detailPageName]} {...props} titleSize="h40" largeTitleSize="h60" />
    </div>
  );
};

export default Detail;
