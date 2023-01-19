import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import SearchPage from "../Pages/SearchPage";
import SingleProduct from "../Pages/SingleProduct";
import MobileProducts from "../Pages/MobileProducts";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<NotFound />} path="*" />
        <Route element={<Login />} path="/login" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<MobileProducts />} path="/mobileproducts" />
        <Route element={<SingleProduct />} path="/product/:id" />
      </Routes>
    </div>
  );
};

export default AllRoutes;
