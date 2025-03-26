import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentForm from "../components/PaymentForm";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// Load your Stripe publishable key
const stripePromise = loadStripe("your-publishable-key");

const Checkout = () => {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSuccessfulPayment = () => {
    // Optionally clear the cart and navigate to a success page
    clearCart();
    navigate("/"); // redirect to homepage or order confirmation page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Top />
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        <Elements stripe={stripePromise}>
          <PaymentForm totalAmount={total} onSuccessfulPayment={handleSuccessfulPayment} />
        </Elements>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
