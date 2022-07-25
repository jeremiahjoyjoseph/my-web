import { useParams } from 'react-router-dom';
import Header from '../../components/organisms/header/header';
import DetailPageController from '../../containers/detailPageController/detailPageController';

const Detail = (props) => {
  const { detailPageName } = useParams();
  return (
    <div className='page'>
      <Header />
      <DetailPageController pageName={detailPageName} {...props} />
    </div>
  );
};

export default Detail;
