import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, {initialState} from './Reducer';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
          <App/>
      </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);