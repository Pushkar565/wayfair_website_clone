import React from "react";
import { useParams } from "react-router-dom";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";

import squareimg1 from "../assets/home_img/square_img_1.webp";
import squareimg2 from "../assets/home_img/square_img_2.webp";
import squareimg3 from "../assets/home_img/square_img_3.webp";
import squareimg4 from "../assets/home_img/square_img_4.webp";

const productData = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 899,
    description: "A stylish and comfortable sofa perfect for your living room.",
    image: squareimg1,
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 499,
    description: "A beautifully crafted dining table to enhance your home.",
    image: squareimg2,
  },
  {
    id: 3,
    name: "Cozy Armchair",
    price: 299,
    description: "A soft and cozy armchair to relax in after a long day.",
    image: squareimg3,
  },
  {
    id: 4,
    name: "Stylish Lamp",
    price: 129,
    description: "A modern lamp to add ambiance to your space.",
    image: squareimg4,
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Top />
        <Navbar />
        <DropdownMenu />
        <main className="container mx-auto px-4 py-8 flex-1 text-center">
          <h2 className="text-3xl font-bold text-red-600">Product Not Found</h2>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <DropdownMenu />
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
