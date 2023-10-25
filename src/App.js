import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Cookies from './Cookies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />}/>
          <Route path='/chips' element={<Chips />}/>
          <Route path='/soda' element={<Soda />}/>
          <Route path='/cookies' element={<Cookies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
