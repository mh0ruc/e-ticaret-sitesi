import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import PageNotFound from "./page/PageNotFound";
import { Category, Product, Products, ProductsLyout } from "./products";
import Login from "./page/Login";
import Fav from "./page/Fav";
import PrivateRoute from "./PrivateRoute";
import Sepet from "./page/Sepet";

function SiteRoutes({ handleLogin, user }) {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/about" element={<About />} />
     
      <Route path="/products" element={<ProductsLyout />}>
        <Route index={true} element={<Products user={user}/>} />
        <Route path="category/:categoryName" element={<Category user={user}/>} />
        <Route path="product/:productId" element={<Product user={user} />} />
      </Route>
      <Route
        path="/login"
        element={<Login handleLogin={handleLogin} />}
      ></Route>
      <Route
        path="/fav"
        element={
          <PrivateRoute user={user}>
            <Fav user ={user} />
          </PrivateRoute>
        }
      ></Route>

      <Route path="*" element={<PageNotFound />} />
      <Route path="/sepet" element={<Sepet/>} />
    </Routes>
  );
}

export default SiteRoutes;
