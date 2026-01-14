import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { MainContentSection } from "./MainContentSection";
import { FooterSection } from "./FooterSection";
import HeaderSection from "./HeaderSection"; // Import the new header

export const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen w-full" data-model-id="546:102">
      
      {/* Updated Header */}
      <HeaderSection />


      {/* Main Content Container */}
      <main className="px-4 sm:px-10 lg:px-[200px] pb-20 lg:pb-[200px] pt-6 lg:pt-[40px] animate-fade-in [--animation-delay:400ms]">
        <div className="bg-[#fbfbfb] rounded-[20px] border border-solid border-[#9e9898] shadow-[0px_4px_4px_3px_#00000040] overflow-hidden pb-10 lg:pb-[100px]">
          <div className="relative h-[200px] sm:h-[300px] lg:h-[408px] translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
            <img
              className="w-full h-full object-cover"
              alt="Hero background with network technology icons"
              src="https://c.animaapp.com/mfdi4vp321jtYQ/img/rectangle-69.png"
            />
          </div>

          <div className="px-4 sm:px-10 lg:px-[241px] pt-6 sm:pt-10 lg:pt-[41px] pb-6 lg:pb-[20px] animate-fade-in [--animation-delay:800ms]">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
              <span className="text-black">Fueling curiosity with every</span>{" "}
              <span className="text-[#a81717]">post</span>
            </h1>
          </div>

          <div className="animate-fade-in [--animation-delay:1000ms]">
            <MainContentSection />
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <div className="pt-10 lg:pt-[40px] animate-fade-in [--animation-delay:1200ms]">
        <FooterSection />
      </div>

      {/* Floating WhatsApp Contact Us Button */}
      <a
        href="https://wa.me/918106147247?text=Hello%20I%20would%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 border-2 border-[#A71818] bg-white text-black font-semibold 
                  rounded-full flex items-center justify-center shadow-lg 
                  hover:bg-[#A71818] hover:text-white transition-colors duration-300 z-50
                  w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3"
      >
        <FaWhatsapp className="text-lg md:text-2xl" />
        <span className="hidden md:inline text-sm md:text-base ml-2">Contact Us</span>
      </a>
    </div>
  );
};

export default BlogPage;
