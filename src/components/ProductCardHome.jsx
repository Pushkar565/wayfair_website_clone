// ProductCardHome.jsx
import { Link } from "react-router-dom";

const ProductCardHome = ({ product }) => {
  return (
    <Link to="/catalog" className="block bg-white rounded shadow hover:shadow-lg transition">
      <img src={product.image.src || product.image} alt={product.name} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCardHome;
