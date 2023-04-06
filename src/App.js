import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/Shop";
import { Cart } from "./components/pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  function addCartItem(item) {
    item.quantity = 1;
    setCart([...cart, item]);
  }
  function deleteCartItem(item) {
    const newCart = cart.filter((product) => product !== item);
    setCart(newCart);
  }
  function changeQty(item, operator) {
    if (item.quantity === 1 && operator === "-") return deleteCartItem(item);
    setCart(
      cart.map((el) => {
        if (el.name === item.name) {
          operator === "+" ? (el.quantity += 1) : (el.quantity -= 1);
          return el;
        }
        return el;
      })
    );
  }
  useEffect(() => {
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cartCount={cartCount} />} />
        <Route
          path="/shop"
          element={
            <Shop
              cartCount={cartCount}
              setCartCount={setCartCount}
              addCartItem={addCartItem}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartCount={cartCount}
              cart={cart}
              deleteCartItem={deleteCartItem}
              changeQty={changeQty}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
