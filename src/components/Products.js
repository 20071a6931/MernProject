import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  let [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/product-api/getproducts`)
    .then((response) => {
        console.log(response.data.payload);
        console.log(response.data.message);
        if(response.data.message==="no products received from mongodb"){
          alert("no products received from mongodb");
        }
        else{
        setProductsList(response.data.payload);
      }
      })
    .catch((err) => {
        alert("error occured");
        console.log(err);
      })
  }, []);

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
