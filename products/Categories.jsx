import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories({user}) {
    const [categories,setcategories]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=>setcategories(res))
    },[])
  return (
    <>
      <div>
        <h1> Kategoriler</h1>
        <div className="list-group">
            {
                categories.map((category,index)=>
                <Link
                className="list-group-item list-group-item-action "
                key={index}
                to={`/products/category/${category}`}>
                    {category.toUpperCase()}
                </Link>
                )
            }
         
        </div>
      </div>
    </>
  );
}

export default Categories;
