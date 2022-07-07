import React, { useState } from "react";
import NavBar from "../components/Navbar/Navbar";
import ShowBooks from "../components/ShowBooks";
import fakeData from "../fakeData";
import "../Assets/Styles/Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState(fakeData);

  function handleCartItems(idx) {
    let getInx = cartItems.findIndex((book) => {
      return book._id === idx;
    });
    console.log("index-parent", idx);
    console.log("getInx", getInx);
    let newCart = [...cartItems];
    newCart.splice(getInx, 1);
    setCartItems(newCart);
  }
  return (
    <div>
      <div className="heading">Cart</div>

      <div className="cartItems_container">
        {cartItems.length === 0 ? (
          <h4 className="empty">Cart is empty </h4>
        ) : (
          <ShowBooks
            data={cartItems}
            border={true}
            showRating={false}
            type={"cart"}
            func={handleCartItems}
          />
        )}
      </div>
      <div className="lower_container">
        <div>
          <div className="subtotal">Sub-Total</div>
          <div>{cartItems.length} items</div>
        </div>
        <div>
          <button className="button">checkout</button>
        </div>
      </div>
    </div>
  );
}
