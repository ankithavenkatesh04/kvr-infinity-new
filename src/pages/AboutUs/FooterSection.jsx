import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const topCategories = [
  { label: "Aptitude" },
  { label: "Prompt Engineering" },
  { label: "Computer Basics" },
  { label: "Spoken English" },
  { label: "Full-Stack development" },
];

const resourceLinks = [
  { label: "Blog", href: "/" },
  { label: "Privacy & Policy", href: "/policy" },
  { label: "Terms & Conditions", href: "/policy" },
  { label: "Cookies Policy", href: "/policy" },
];

export const FooterSection = () => {
  return (
    <footer className="animate-fade-in [--animation-delay:800ms] w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(168,23,23,1)_100%)] relative overflow-hidden mt-4">

      {/* Decorative Circles / Background Shapes */}
      <div className="absolute top-20 left-10 sm:left-20 md:left-44 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-red-700 opacity-70 z-0" />
      <div className="absolute bottom-4 right-4 sm:right-8 w-16 h-16 sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-full bg-red-900 opacity-60 z-0" />
      <div className="absolute top-16 sm:top-24 md:top-32 right-10 sm:right-32 md:right-[390px] w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32 rounded-full bg-red-600 opacity-40 z-0" />
      <div className="absolute bottom-8 left-10 sm:left-32 md:left-[590px] w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-red-800 opacity-50 z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10 px-4 sm:px-6 md:px-8 py-9">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <h2 className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:0.2px_#ffffff] font-semibold text-white text-2xl mb-4">
              KVR Infinity
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <img
                className="w-3.5 h-5 mt-1 flex-shrink-0"
                alt="Location"
                src="https://c.animaapp.com/mfm52zfyrgtMVA/img/vector-1.svg"
              />
              <div className="font-medium text-white text-sm">
                WeWork, Salarpuria Symbiosis, <br />
                Arekere Village, <br />
                Bannerghatta Main Rd, <br />
                Bengaluru - 560076
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img
                className="w-5 h-4 flex-shrink-0"
                alt="Email"
                src="https://c.animaapp.com/mfm52zfyrgtMVA/img/group-223.png"
              />
              <a
                className="font-medium text-white text-sm hover:underline"
                href="mailto:care@kvrinfinity.in"
                rel="noopener noreferrer"
                target="_blank"
              >
                support@kvrinfinity.com
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  className="w-[18px] h-[17px] flex-shrink-0"
                  alt="Phone"
                  src="https://c.animaapp.com/mfm52zfyrgtMVA/img/group-222.png"
                />
                <div className="font-medium text-white text-sm">
                  +91 8431993303
                </div>
              </div>
              <div className="font-medium text-white text-sm">
                    +91 701956801
              </div>
            </div>
          </div>


          {/* Top Categories */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2">
            <h3 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-semibold text-lg mb-4">
              Top Categories
            </h3>
            <div className="flex flex-col gap-2">
              {topCategories.map((category) => (
                <button
                  key={category.label}
                  onClick={() =>
                    window.open(
                      "https://youtu.be/dwMNpNqrtEM?si=Nnibi_cHgXoqsAqx",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="font-normal text-white text-xs text-left hover:underline"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>


          {/* Resources & App Download / Social Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5 flex flex-col md:flex-row gap-8">
            {/* Resources Column */}
            <div className="flex-1">
            <h3 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-semibold text-lg mb-4">
              Resources
            </h3>

              <div className="flex flex-col gap-2 mb-6">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-normal text-white text-xs hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

    
         
{/* Stay in the Loop & Social Icons */}
<div className="w-full relative top-2 left-20"> 
  <h3 className="bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Inter',Helvetica] font-semibold text-lg mb-2">
    Stay in the Loop
  </h3>
  <div className="flex gap-5 items-center flex-wrap">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.22.19 2.22.19v2.44H15.7c-1.24 0-1.62.77-1.62 1.56v1.87H16.9l-.46 2.9h-2.36v7.05A10 10 0 0022 12z" />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="http://www.linkedin.com/in/praveenkumbhakonam"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm8.5 0h4.78v2.17h.07c.67-1.27 2.3-2.6 4.73-2.6C22.42 7.57 24 9.7 24 13.4V23h-5v-8.51c0-2.03-.73-3.42-2.57-3.42-1.4 0-2.24.94-2.61 1.85-.13.32-.16.76-.16 1.2V23h-5V8z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/kvr_infinity/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/918106147247"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 21.6c-1.79 0-3.55-.48-5.08-1.38l-.36-.21-3.67.96.98-3.58-.24-.37A9.63 9.63 0 012.4 12c0-5.3 4.3-9.6 9.6-9.6 2.56 0 4.97 1 6.77 2.8a9.56 9.56 0 012.83 6.8c0 5.3-4.3 9.6-9.6 9.6zm5.47-7.15c-.3-.15-1.79-.88-2.06-.98-.27-.1-.46-.15-.65.15-.2.3-.75.98-.92 1.18-.17.2-.34.23-.63.08-.3-.15-1.27-.47-2.43-1.5a9.04 9.04 0 01-1.67-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.65-1.56-.9-2.14-.24-.58-.48-.5-.65-.51-.17-.01-.37-.01-.57-.01s-.53.08-.8.38c-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.79-.73 2.04-1.44.25-.7.25-1.3.17-1.44-.08-.13-.27-.2-.57-.35z"/>
      </svg>
    </a>

    {/* Arattai */}
    <a
      href="https://arattai.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity duration-300 ease-in-out hover:opacity-80"
    >
      <img
        src="images/logo2.0.png"
        alt="Arattai Icon"
        className="w-6 h-6 rounded-[6px]"
      />
    </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Footer Bottom */}
      <div className="relative -top-2 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-medium text-white text-sm text-center sm:text-left sm:ml-12">
        2019-26 © KVR Infinity - www.kvrinfinity.com
      </div>

        <div className="font-medium text-white text-sm text-center sm:text-right sm:mr-80 group">
          <span className="transition-colors duration-300 ease-in-out group-hover:text-[#ffb347]">
            Crafted with Care by -{" "}
            <a
              href="https://www.behance.net/ankithavenkate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Ankitha Venkatesh
            </a>
          </span>
        </div>


        </div>
    </footer>
  );
};

export default FooterSection;


