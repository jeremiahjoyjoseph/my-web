import React from 'react';
import { edp_data } from '../../data/edp';
import { pax_data } from '../../data/pax';
import DataController from '../dataController/dataContoller';

const DetailPageController = (props) => {
  const getData = () => {
    switch (props.pageName) {
      case 'pax':
        return pax_data;
      case 'edp':
        return edp_data;
      default:
        break;
    }
  };

  return <DataController data={getData()} {...props} />;
};

export default DetailPageController;
