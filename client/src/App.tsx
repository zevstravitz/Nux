import React from 'react';
import './App.css';

import Search from './components/Search/index';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
    </div>
  )
}

export default App;
