import React from "react";
import { edp_data } from "../../data/projects/edp";
import { foodE_data } from "../../data/designs/foodE";
import { pax_data } from "../../data/projects/pax";
import { dieselDoorDelivery_data } from "../../data/designs/dieselDoorDelivery.js";
import { malgudi_data } from "../../data/designs/malgudi.js";
import { executiveDrivers_data } from "../../data/designs/executiveDrivers.js";
import DataController from "../dataController/dataContoller";
import { others_data } from "../../data/projects/others";

const DetailPageController = (props) => {
  const getData = () => {
    switch (props.pageName) {
      case "pax":
        return pax_data;
      case "edp":
        return edp_data;
      case "others":
        return others_data;
      case "foodE":
        return foodE_data;
      case "dieselDoorDelivery":
        return dieselDoorDelivery_data;
      case "malgudi":
        return malgudi_data;
      case "executiveDrivers":
        return executiveDrivers_data;
      default:
        break;
    }
  };

  return <DataController data={getData()} {...props} />;
};

export default DetailPageController;
