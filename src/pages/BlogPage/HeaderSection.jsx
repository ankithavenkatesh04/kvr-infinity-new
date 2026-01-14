import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// Navigation items without Blog
const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

// Services dropdown items
const servicesItems = [
  { label: "Membership", href: "/membership" },
  { label: "Corporate", href: "/corporate" },
  { label: "Talk Show", href: "/talkshow" },
  { label: "Learners Hub", href: "/learner" },
  { label: "Initiative", href: "/csr" },
  { label: "CRT", href: "/campus" },
];

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between py-4 sm:py-6 lg:py-[31px] w-full px-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-black text-[20px] sm:text-[22px] lg:text-[24px] hover:text-[#a81717] transition"
        >
          KVR Infinity
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[120px] lg:gap-[140px] relative ml-12 lg:ml-24">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="[font-family:'Inter',Helvetica] font-bold text-black text-[16px] lg:text-[18px] hover:text-[#a81717] transition-colors"
            >
              {item.label}
            </Link>
          ))}




          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="[font-family:'Inter',Helvetica] font-bold text-black text-[16px] lg:text-[18px] flex items-center gap-1 hover:text-[#a81717] transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                {servicesItems.map((service, index) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#a81717] transition-colors ${
                      index === 0
                        ? "rounded-t-lg"
                        : index === servicesItems.length - 1
                        ? "rounded-b-lg"
                        : ""
                    }`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Download Button */}
        <div className="hidden md:block">
          <Link to="/download">
            <button className="bg-[#a81717] hover:bg-[#8a1414] text-white rounded-[10px] h-[40px] sm:h-[44px] px-[18px] sm:px-[24px] font-bold text-[16px] sm:text-[18px]">
              Download Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="[font-family:'Inter',Helvetica] font-bold text-black text-base hover:text-[#a81717]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="[font-family:'Inter',Helvetica] font-bold text-black text-base flex items-center gap-1 hover:text-[#a81717]"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="flex flex-col gap-1 mt-1 bg-white border border-gray-200 rounded-lg shadow-md w-40 overflow-hidden">
                  {servicesItems.map((service, index) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className={`text-gray-700 text-sm hover:bg-gray-100 hover:text-[#a81717] px-4 py-2 transition-colors ${
                        index === 0
                          ? "rounded-t-lg"
                          : index === servicesItems.length - 1
                          ? "rounded-b-lg"
                          : ""
                      }`}
                      onClick={() => {
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Download Button */}
            <Link to="/download" className="w-full flex justify-center">
              <button className="bg-[#a81717] text-white rounded-[10px] h-[40px] px-[18px] font-bold text-[16px] w-full max-w-[200px] hover:bg-[#8a1414]">
                Download Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderSection;
