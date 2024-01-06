import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sepet from "./Sepet";

function Fav() {
  const [favs, setfavs] = useState([]);
  const [sepet, setsepet] = useState([]);
  const [toplamurun, setToplamUrun] = useState(0);

  useEffect(() => {
    setfavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, []);

  useEffect(() => {
    setsepet(JSON.parse(localStorage.getItem("sepet")) ?? []);
  }, []);

  function handleclick(product) {
    let localfavs = JSON.parse(localStorage.getItem("favs")) ?? [];
    let itemIndex = localfavs.findIndex((localItem) => product.id === localItem.id);
    if (itemIndex >= 0) {
      localfavs = localfavs.filter((item) => item.id !== product.id);
      setfavs(localfavs); // favorileri güncelle
      localStorage.setItem("favs", JSON.stringify(localfavs));
    }
  }

  function sepeteekle(product) {
    let localsepet = JSON.parse(localStorage.getItem("sepet")) || [];
    let itemIndex1 = localsepet.findIndex(
      (localItem1) => product.id === localItem1.id
    );
  
    if (itemIndex1 >= 0) {
      // If the item is found, remove it
      localsepet = localsepet.filter((item) => item.id !== product.id);
    } else {
      // If the item is not found, add it
      localsepet.push({
        id: product.id,
        title: product.title,
        img: product.img,
        price:product.price
      });
    }
  
    localStorage.setItem("sepet", JSON.stringify(localsepet)); // Update localStorage
  }
  
  useEffect(() => {
    setToplamUrun(favs.length); // Her fav güncellendiğinde toplamurun'u güncelle
  }, [favs]);

  return (
    <>
    <div className="container">
      <div className="row ">
        <div className="col">
        <h1 >Favoriler</h1>
        <div className="list-group container">
        {favs.map((item) => (
          <li key={item.id} id="fav" className="list-group-item list-group-item-action">
            <Link to={`/products/product/${item.id}`}>
              <div className="h h4">{item.title}</div>
              <img
                style={{ width: "100%", height: "100%" }}
                src={item.img}
                className="row"
                alt={item.title}
              />
            </Link>
            <button onClick={() => handleclick(item)} className="btn btn-primary mt-4">
              Favorilerden kaldır
            </button>
            <button onClick={() => sepeteekle(item)} className="btn btn-success float-end mt-4">
              Sepete Ekle
            </button>
          </li>
        ))}
      </div>
        </div>
       <div className="col">
       <h3 >favori ürün sayısı {toplamurun}</h3>
       </div>
        
      </div>
      </div>
  
    </>
  );
}

export default Fav;
