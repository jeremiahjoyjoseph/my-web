import { useState } from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataContoller';
import { projects_data } from '../../data/projects';

const Projects = (props) => {
  const [data] = useState(projects_data);
  return (
    <div className='page-projects'>
      <Header />
      <DataController data={data} {...props} />
    </div>
  );
};

export default Projects;
