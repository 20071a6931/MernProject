import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  let [productsList, setProductsList] = useState([]);

    
      axios.get("https://e-medicare-react.herokuapp.com/product-api/getproducts")
        .then((response) => {
          console.log(response);
          setProductsList(response.data.payload);
        })
        .catch((err) => {
          alert("error occurred");
        });
    

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
