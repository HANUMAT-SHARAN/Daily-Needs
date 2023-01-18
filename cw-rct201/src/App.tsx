import React from 'react';
import logo from './logo.svg';
import './App.css';

import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
