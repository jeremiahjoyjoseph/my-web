import { useState } from "react";
import DataController from "../../containers/dataController/dataContoller";

import { home_data } from "../../data/home";

const Home = (props) => {
  const [data] = useState(home_data);
  return (
    <div className="page">
      <DataController
        data={data}
        {...props}
        titleSize="h40"
        largeTitleSize="h60"
      />
    </div>
  );
};

export default Home;
