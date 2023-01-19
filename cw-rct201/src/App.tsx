import React from 'react';
import './App.css';

import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
     <AllRoutes/> */}
     <SingleProduct/>
    </div>
  );
}

export default App;
