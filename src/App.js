import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Shop } from './components/pages/Shop';
import { Cart } from './components/pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
