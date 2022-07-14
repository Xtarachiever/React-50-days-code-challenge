import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer,{initialState} from './components/Reducer';
import { StateProvider } from './components/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
         <App />
        </StateProvider>
      </React.StrictMode>
  </Router>
);
