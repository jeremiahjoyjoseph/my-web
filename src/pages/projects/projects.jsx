import React from 'react';
import Header from '../../components/organisms/header/header';
import DataController from '../../containers/dataController/dataContoller';
import { projects_data } from '../../data/projects';
import PageWrapper from '../../components/atoms/PageWrapper';

const Projects = (props) => {
  const [data] = React.useState(projects_data);
  return (
    <PageWrapper className="page" pageView={true}>
      <Header pageView={true} data={data} />
      <DataController data={data} {...props} titleSize="h40" largeTitleSize="h60" pageView={true} />
    </PageWrapper>
  );
};

export default Projects;
