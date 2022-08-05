// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SkeletonField from './components/Loading/SkeletonField';
import IctaLoading from './components/Loading/IctaLoading';

const LazyApp = React.lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems:'center', justifyContent: 'center'}}> <IctaLoading /> </div>} >
      <LazyApp />
    </Suspense>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
