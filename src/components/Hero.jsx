import Navbar from "../components/Navbar";
import CarouselHero from "../components/CarouselHero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

// Dummy product data – later replaced with API calls
const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 899,
    image: "https://via.placeholder.com/400x300?text=Sofa",
  },
  {
    id: 2,
    name: "Elegant Dining Table",
    price: 499,
    image: "https://via.placeholder.com/400x300?text=Dining+Table",
  },
  {
    id: 3,
    name: "Cozy Armchair",
    price: 299,
    image: "https://via.placeholder.com/400x300?text=Armchair",
  },
  {
    id: 4,
    name: "Stylish Lamp",
    price: 129,
    image: "https://via.placeholder.com/400x300?text=Lamp",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CarouselHero />
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
