import { Link } from "react-router-dom";
import React from "react";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Checkout from "./Pages/Checkout";
// import SingleProduct from "./Pages/SingleProduct";


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <AllRoutes />
      {<Footer />} */}
      <Checkout/>
      {/* <Link to="/mobileproducts">mobile</Link> */}
    </div>
  );
}

export default App;
