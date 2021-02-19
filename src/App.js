import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routes from './routes';

function App(props) {
  return(
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  );
}

export default App;