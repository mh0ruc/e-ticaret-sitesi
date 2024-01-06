import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

function Products({user}) {
  const [son10urun, setSon10urun] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(res => setSon10urun(res));
  }, []); // Pass an empty array as the second argument

  return (
    <>
      <h2 >Ürünler</h2>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {son10urun.map((product) => (
          <ProductCard user={user} key={product.id} item={product} />
        ))}
      </div>
     
    </>
  );
}

export default Products;
