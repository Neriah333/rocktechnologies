import React, { useState } from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white-300/60 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-15 py-8">

        {/* Company Name */}
        <div className="text-2xl font-bold text-green-800">
          RockTechnologies
        </div>


        {/* Navigation Links */}
        <div className="flex font-bold items-center gap-15">
          <a href="#home" className="text-slate-700 hover:text-green-700 transition-colors">
            Home
          </a>

          <a href="#about" className="text-slate-700 hover:text-green-700 transition-colors">
            About
          </a>

          <a href="#services" className="text-slate-700 hover:text-green-700 transition-colors">
            Services
          </a>

          <a href="#products" className="text-slate-700 hover:text-green-700 transition-colors">
            Products
          </a>

          <a href="#contact" className="text-slate-700 hover:text-green-700 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;