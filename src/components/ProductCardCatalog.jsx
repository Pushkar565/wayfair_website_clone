import { Link } from "react-router-dom";

const ProductCardCatalog = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition relative">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image.src || product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={() => onAddToCart(product)}
        className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardCatalog;
