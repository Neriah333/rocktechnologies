import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyles =
    "text-slate-700 hover:text-green-700 transition-colors";

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/60 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-15 py-8">

        {/* Company Name */}
        <Link to="/" className="text-2xl font-bold text-green-800">
          RockTechnologies
        </Link>

        {/* Navigation Links */}
        <div className="flex font-bold items-center gap-15">

          <Link to="/" className={linkStyles}>
            Home
          </Link>

          <Link to="/about" className={linkStyles}>
            About
          </Link>

          <Link to="/services" className={linkStyles}>
            Services
          </Link>

          <Link to="/products" className={linkStyles}>
            Products
          </Link>

          <Link to="/contact" className={linkStyles}>
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;