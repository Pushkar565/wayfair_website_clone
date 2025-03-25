import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./components/ProductPage";

import Cart from "./pages/Cart";
import ProductCatalog from "./pages/ProductCatalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/catalog" element={<ProductCatalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
