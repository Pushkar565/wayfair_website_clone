import React from "react";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import ProductCardCatalog from "../components/ProductCardCatalog";
import { useCart } from "../context/CartContext";

import squareimg1 from "../assets/home_img/square_img_1.webp";
import squareimg2 from "../assets/home_img/square_img_2.webp";
import squareimg3 from "../assets/home_img/square_img_3.webp";
import squareimg4 from "../assets/home_img/square_img_4.webp";

const productData = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 899,
    image: { src: squareimg1 },
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 499,
    image: { src: squareimg2 },
  },
  {
    id: 3,
    name: "Cozy Armchair",
    price: 299,
    image: { src: squareimg3 },
  },
  {
    id: 4,
    name: "Stylish Lamp",
    price: 129,
    image: { src: squareimg4 },
  },
  // Add more products as needed
];

const ProductCatalog = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <DropdownMenu />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">Product Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <ProductCardCatalog
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;
