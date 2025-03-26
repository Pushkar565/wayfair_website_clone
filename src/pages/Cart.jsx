// /src/pages/Cart.jsx
import React, { useContext } from "react";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { cartItems, removeItem, updateQuantity, total } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {!user ? (
          <div className="text-center py-8">
            <p className="text-lg mb-4">Please login to view your cart</p>
          </div>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img
                    src={item.image.src || item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border rounded mr-4"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 text-right">
                <p className="text-xl font-semibold">
                  Total: ${total.toFixed(2)}
                </p>
                {/* Add a button to proceed to checkout */}
                <a
                  href="/checkout"
                  className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
