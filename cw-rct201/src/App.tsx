import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
