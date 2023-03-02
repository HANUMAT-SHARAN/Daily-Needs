import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Signup from "../Pages/Signup";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import SearchPage from "../Pages/SearchPage";
import SingleProduct from "../Pages/SingleProduct";
import MobileProducts from "../Pages/MobileProducts";
import Admin from "../Pages/Admin";

import Cart from "../Components/Cart/Cart";
import LaptopProductPage from "../Pages/LaptopProductpage";
import HomeProductPage from "../Pages/Homeproductpage";
import Checkout from "../Components/Checkout/Checkout";
import MainPage1 from "../sonu/mainPage1";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<NotFound />} path="*" />
        <Route element={<Login />} path="/login" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<MainPage1 />} path="/mobileproducts" />
        <Route element={<SingleProduct />} path="/product/:id" />

        <Route element={<Admin />} path="/admin" />
        <Route element={<Checkout />} path="/checkout" />

        <Route element={<Cart />} path="/cart" />
        <Route
          element={<LaptopProductPage />}
          path="/laptopproductpage"
        ></Route>
        <Route element={<HomeProductPage />} path="/homeproductpage"></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
