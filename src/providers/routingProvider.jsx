import { BrowserRouter as Router } from 'react-router-dom';

const RoutingProvider = (props) => {
  return <Router>{props.children}</Router>;
};

export default RoutingProvider;
