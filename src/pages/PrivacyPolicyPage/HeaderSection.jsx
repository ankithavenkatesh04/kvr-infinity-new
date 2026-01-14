import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="pl-20 py-6">
        {/* Wrap the title in Link */}
        <Link to="/" className="font-bold text-2xl text-black hover:text-[#a81717] transition-colors">
          KVR Infinity
        </Link>
      </div>
    </header>
  );
};

export default Header;
