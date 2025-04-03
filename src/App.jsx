import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductCatalog from "./pages/ProductCatalog";
import ProductPage from "./pages/ProductPage"; // If you have individual product detail page
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<ProductCatalog />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
