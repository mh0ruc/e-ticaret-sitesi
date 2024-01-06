import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category({user}) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res))
      .catch((err) => console.error("Kategori getirme hatası:", err));
  }, [categoryName]);

  return (
    <>
      <h1>Kategori: {categoryName && categoryName.toUpperCase()}</h1>
      <div className="row row-cols-sm-3 row-cols-md-3">
        {categoryProducts.map((item) => (
          <ProductCard key={item.id} item={item} user={user} />
        ))}
      </div>
    </>
  );
}

export default Category;
