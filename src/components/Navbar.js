import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 h-16 items-center flex-col md:flex-row fixed top-0 z-40 w-screen bg-white">
      <div className="space-x-8">
        <Link to="/" className="titleFont text-2xl">
          NewJob
        </Link>
        <Link className="headFont font-bold text-gray-500" to="/">
          Home
        </Link>
        <Link className="headFont font-bold text-gray-500" to="/">
          About
        </Link>
      </div>
      <div>
        <div class="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}
