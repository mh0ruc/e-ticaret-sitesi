import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product({ user, handleClick }) {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [productId]);

  return (

    <>
    <div className="container">
      <h1>{product.title}</h1>
      <div id="product" className="row "style={{ width: "700px", height: "550px" }}>
        <img
          style={{ width: "300px", height: "400px" }}
          src={product.image}
          className="col-sm-4"
          alt={product.title}
        />
        <p className="col-md-6"> {product.description}</p>
        <p id="price" className="lead">{product.price} TL</p>
      </div>
      </div>
    </>
  );
}

export default Product;
