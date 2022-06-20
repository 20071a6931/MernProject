import axios from "axios";
import React, { useState } from "react";
import Productone from "./Productone";

function Productsone() {
  let [productsList, setProductsList] = useState([]);

    axios
    .get("https://e-medicare-react.herokuapp.com/product-api/getproducts")
    .then((response) => {
      setProductsList(response.data.payload);
    })

  return (
    <div className="text-center">
      <p className="display-2 phead">Medicines</p>
      <hr />
      
        <div className="d-flex card-group abc">
          {productsList.map((productObj, index) => (
            <Productone key={index} productObj={productObj} />
          ))}
        </div>
    </div>
  );
}

export default Productsone;
