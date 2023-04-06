import React from "react";
import { Navbar } from "../Navbar";
import { CartItem } from "../CartItem";

export const Cart = (props) => {
  const { cart, deleteCartItem, cartCount, setCartCount, changeQty } = props;

  return (
    <div>
      <Navbar cartCount={props.cartCount} />
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Shopping Cart is Empty</p> : <></>}
      {cart.map((item) => (
        <CartItem
          key={item.name}
          cart={cart}
          cartCount={cartCount}
          setCartCount={setCartCount}
          item={item}
          deleteCartItem={deleteCartItem}
          changeQty={changeQty}
        />
      ))}
    </div>
  );
};
