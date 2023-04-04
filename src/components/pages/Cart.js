import React from "react";
import { Navbar } from "../Navbar";
import { CartItem } from "../CartItem";


export const Cart = (props) => {
  const { cart } = props;
  return (
      <div>
        <Navbar cartLength={cart.length}/>
        <h1>Shopping Cart</h1>
        {cart.map((item) => (
          <CartItem item={item}/>
        ))}
      </div>
  );
};
