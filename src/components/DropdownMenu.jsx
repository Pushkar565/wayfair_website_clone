// src/components/DropdownMenu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Furniture",
    submenu: [
      "Sofas",
      "Sectionals",
      "Chairs",
      "Beds",
      "Dining Tables",
      "Coffee Tables",
      "TV Stands",
      "Accent Furniture",
    ],
  },
  {
    label: "Outdoor",
    submenu: [
      "Patio Furniture",
      "Outdoor Dining",
      "Grills",
      "Outdoor Lighting",
      "Outdoor Décor",
      "Garden & Patio",
    ],
  },
  {
    label: "Bedding & Bath",
    submenu: [
      "Beds",
      "Mattresses",
      "Dressers & Chests",
      "Nightstands",
      "Bathroom Vanities",
      "Mirrors",
      "Shower Curtains",
    ],
  },
  {
    label: "Decor & Pillows",
    submenu: [
      "Wall Art",
      "Rugs",
      "Pillows",
      "Decorative Accents",
      "Clocks",
      "Vases",
    ],
  },
  {
    label: "Lighting",
    submenu: [
      "Ceiling Lights",
      "Table Lamps",
      "Floor Lamps",
      "Outdoor Lights",
      "Wall Lights",
      "Pendant Lights",
    ],
  },
  {
    label: "Rugs",
    submenu: [
      "Area Rugs",
      "Runner Rugs",
      "Kids Rugs",
      "Outdoor Rugs",
    ],
  },
  {
    label: "Kitchen & Dining",
    submenu: [
      "Dining Tables",
      "Dining Chairs",
      "Bar Stools",
      "Kitchen Islands",
      "Countertops",
      "Cabinets",
    ],
  },
  {
    label: "Storage",
    submenu: [
      "Bookcases",
      "Desks",
      "Office Chairs",
      "Filing Cabinets",
      "Storage Cabinets",
      "Closet Systems",
    ],
  },
  {
    label: "Home Improvement",
    submenu: [
      "Mirrors",
      "Cabinet Hardware",
      "Decorative Lighting",
      "Home Accessories",
    ],
  },
  {
    label: "Baby & Kids",
    submenu: [
      "Kids Furniture",
      "Nursery Furniture",
      "Kids Bedding",
      "Kids Décor",
    ],
  },
];

const DropdownMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="bg-gray-100 shadow">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button className="py-2 px-4 font-medium hover:text-blue-600">
                {item.label}
              </button>
              {item.submenu && openIndex === index && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow rounded z-50">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="border-b last:border-0">
                      <Link
                        to={`/category/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DropdownMenu;
