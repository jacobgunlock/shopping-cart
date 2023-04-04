import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/Shop";
import { Cart } from "./components/pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  function addCartItem(item) {
    setCart([...cart, item]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cartLength={cart.length} />} />
        <Route
          path="/shop"
          element={<Shop cartLength={cart.length} addCartItem={addCartItem} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
