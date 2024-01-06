import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ item, user }) {
  const [sepet, setSepet] = useState([]);

  const productUrl = `/products/product/${item.id}`;

  function handleclick(product) {
    let localfavs = JSON.parse(localStorage.getItem("favs")) || [];
    let itemIndex = localfavs.findIndex(
      (localItem) => product.id === localItem.id
    );
    if (itemIndex >= 0) {
      localfavs = localfavs.filter((item) => item.id !== product.id);
    } else {
      localfavs.push({
        id: product.id,
        title: product.title,  // Corrected property name
        img: product.image, 
        price: item.price  
        
      });
    }
    localStorage.setItem("favs", JSON.stringify(localfavs));
  }

  function sepeteekle(product) {
    let localsepet = JSON.parse(localStorage.getItem("sepet")) || [];
    let itemIndex1 = localsepet.findIndex((localItem1) => product.id === localItem1.id);
  
    if (itemIndex1 >= 0) {
      // If the item is found, remove it
      localsepet = localsepet.filter((item) => item.id !== product.id);
    } else {
      // If the item is not found, add it
      localsepet.push({
        id: product.id,
        title: product.title,  // Corrected property name
        img: item.image, 
        price: item.price   // Corrected property name
      });
    }
  
    localStorage.setItem("sepet", JSON.stringify(localsepet)); // Update localStorage
  }


  return (
    <div className="col-sm mb-5 grid">
      <div className="card d-flex flex-column">
        <h3>{item.title}</h3>
        <Link to={productUrl}>
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Link>
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{item.title.substring(0, 25)}</h5>
          <p className="card-text">{item.description.substring(0, 25)}...</p>
          <p id="price" className="lead">{item.price}</p>
          {user && (
            <div id="btn" className="text-center row">
              <a onClick={() => handleclick(item)} className="col btn btn-primary ">
                Favorilere Ekle
              </a>
              <a onClick={() => sepeteekle(item)} className=" col btn btn-success ">
                Sepete Ekle
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
