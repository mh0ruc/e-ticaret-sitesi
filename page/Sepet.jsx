import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sepet() {
  const [sepet, setSepet] = useState([]);
  const [toplamurun, setToplamUrun] = useState(0);
  const [sepettutarı, setsepettutarı] = useState(0);
  useEffect(() => {
    // localStorage'dan sepet verilerini al
    const localStorageData = localStorage.getItem("sepet");

    // localStorage'dan alınan JSON verilerini parse et, null ise boş bir dizi kullan
    const sepetData = localStorageData ? JSON.parse(localStorageData) : [];

    // State'i alınan verilerle güncelle
    setSepet(sepetData);
  }, []);
  const sepeteekle = (product) => {
    // Remove the item from the cart
    const updatedSepet = sepet.filter((item) => item.id !== product.id);

    // Update the state and localStorage with the modified cart
    setSepet(updatedSepet);
    localStorage.setItem("sepet", JSON.stringify(updatedSepet));
  };
  useEffect(() => {
    setToplamUrun(sepet.length);
    const yeniSepetTutari = sepet.reduce((acc, item) => acc + item.price, 0);
    setsepettutarı(yeniSepetTutari); // Her fav güncellendiğinde toplamurun'u güncelle
  }, [sepet]);
  function sepetionayla() {
    localStorage.removeItem("sepet");
    alert("sipraşiniz aldık bizi tercih etiiğiniz için teşekkür ederiz");
  }

  return (
    <div className="container">
      <div className="row ">
        <div className="col">
          <h1 className="col col-md5">Sepetim</h1>
          <div className="list-group">
            {sepet.map((item) => (
              <li
                key={item.id}
                id="fav"
                className="list-group-item list-group-item-action p-4"
              >
                <Link to={`/products/product/${item.id}`}>
                  <div className="h h4"> {item.title} </div>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.img}
                    className="row"
                    alt={item.title}
                  />
                </Link>
                <div id="price" className="lead ">{item.price} TL

                <button
                  onClick={() => sepeteekle(item)}
                  className="btn btn-success  float-end mt-4"
                >
                  sepettten çıkar
                </button></div>
              </li>
            ))}
          </div>
        </div>

        <div className="col ">
          <h3>sepetteki eleman sayısı {toplamurun}</h3>

          <div class="card">
            <div class="card-body">
              <h5>sepet Tutarı : {sepettutarı}</h5>
              <hr />
              <button className="btn btn-primary" onClick={() => sepetionayla()}>
                {" "}
                sepeti onayla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sepet;
