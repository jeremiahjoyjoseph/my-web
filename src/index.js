import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

//fonts-custom
import './assets/fonts/Satoshi/Satoshi-Regular.otf';
import './assets/fonts/Satoshi/Satoshi-Bold.otf';
import './assets/fonts/Satoshi/Satoshi-Medium.otf';

const Index = () => {
  setToLS('all-themes', themes.default);
  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
