import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Db from "../../../../public/db-logo.png";
import "../../contact/local-css/contact.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <Image
        src={Db}
        alt="DB Logo"
        className="dark:invert cursor-pointer -ml-6"
        width={91}
        height={1}
        priority
        quality={100}
      />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`${inter.className} antialiased bg-blend-multiply absolute left-0.5 mt-0 w-30 -ml-6 bg-transparent border rounded dropdown-menu`}
        >
          <a
            href="/shop"
            className="block px-4 py-2 text-white hover:bg-emerald-300"
          >
            Shop
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-white hover:bg-emerald-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-white hover:bg-emerald-300"
          >
            Contact
          </a>
          {/* Add more links as needed */}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
