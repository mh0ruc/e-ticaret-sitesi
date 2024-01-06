import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import Category from "./Category";
import Product from "./Product";
import { Outlet } from "react-router-dom";

function ProductsLyout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-9">
          <h3> Urunler</h3>
          
          <Outlet/>
         
        </div>
        <div className="col-sm-3">
          <Categories/>
         
        </div>
      </div>
    </>
  );
}

export default ProductsLyout;
