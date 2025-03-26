import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Top from "../components/Top";
import DropdownMenu from "../components/DropdownMenu";

import squareimg1 from "../assets/home_img/square_img_1.webp";
import squareimg2 from "../assets/home_img/square_img_2.webp";
import squareimg3 from "../assets/home_img/square_img_3.webp";
import squareimg4 from "../assets/home_img/square_img_4.webp";

// Dummy product data...
const products = [
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
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <DropdownMenu />
      <Hero />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
