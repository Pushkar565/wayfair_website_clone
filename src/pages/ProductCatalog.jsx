import React, { useState } from "react";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import ProductCardCatalog from "../components/ProductCardCatalog";
import { useCart } from "../context/CartContext";

// Create 90 dummy products
const dummyProducts = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  image: { src: "https://via.placeholder.com/150" },
}));

const PAGE_SIZE = 30;

const ProductCatalog = () => {
  const { addItem } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyProducts.length / PAGE_SIZE);

  // Get the products for the current page
  const currentProducts = dummyProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

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
          {currentProducts.map((product) => (
            <ProductCardCatalog
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;
