import React from 'react';
import { useSelector } from "react-redux";
import { useCart } from 'react-use-cart';
import toast, { Toaster } from 'react-hot-toast';

function Product(props) {
     //get user state from redux
  let { userObj, isSuccess } = useSelector(
    (state) => state.user
  );

    const {addItem}=useCart();
    const notify = () => toast.success('Item added');
    const some=()=>{
        if(isSuccess===true){
            addItem(props.productObj)
            notify();
        }
        else{
            alert("Login to add into cart")
        }
    }

    return (
        <div className=''>
        <div className='card card-body m-3'>
            <img src={props.productObj.productImg}  />
            <h2>{props.productObj.productname}</h2>
            <h3>Price:₹{props.productObj.price}</h3>
            <h3>Exp.date:{props.productObj.expdate}</h3>
            <button onClick={some} className='bt'>Add to Cart</button>
            <Toaster />

        </div>
        
        </div>
    )
}

export default Product;