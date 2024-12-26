"use client";
import { FaHeart, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-black fixed top-0 w-full z-50 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-200 transition-all"
        >
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold text-blue-600 tracking-wide lg:pt-2 flex items-center space-x-2">
              <span className="text-3xl text-blue-500">
                B<span className="text-3xl text-white">logly</span>
              </span>
            </h1>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-lg hover:text-gray-300 transition-all">
            Home
          </a>
          <a
            href="/about"
            className="text-lg hover:text-gray-300 transition-all"
          >
            About Us
          </a>
          <a
            href="/allblogs"
            className="text-lg hover:text-gray-300 transition-all"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-lg hover:text-gray-300 transition-all"
          >
            Contact
          </a>

          <a
            href="#wishlist"
            className="text-lg hidden 2xl:flex items-center hover:text-gray-300 transition-all"
          >
            <FaHeart className="mr-2" /> Wishlist
          </a>
        </nav>

        <div className="hidden 2xl:flex items-center bg-white rounded-full px-4 py-2 w-64">
          <FaSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full bg-transparent border-none outline-none text-gray-600"
          />
        </div>

        <Link
          href="/signup"
          className="hidden md:inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
        >
          <FaUserCircle className="inline mr-2" /> Sign Up
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col space-y-4 py-4 px-6 bg-gray-800 md:hidden">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="/allblogs" className="text-white hover:text-gray-300">
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <FaUserCircle className="mr-2" /> Sign Up
          </Link>
          <Link
            href="/wishlist"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <FaHeart className="mr-2" /> Wishlist
          </Link>
        </nav>
      )}
    </header>
  );
}
