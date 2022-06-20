import axios from "axios";
import React, { useState } from "react";
import Product from "./Product";

function Products() {
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
            <Product key={index} productObj={productObj} />
          ))}
        </div>
    </div>
  );
}

export default Products;
