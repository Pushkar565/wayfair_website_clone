const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-sm">Your Wayfair clone offering great home furnishings.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Customer Service</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Wayfair Clone. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  