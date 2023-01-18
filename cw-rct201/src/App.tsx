import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
