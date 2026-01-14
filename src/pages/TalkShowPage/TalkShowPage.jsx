import React from "react";
import { Button } from "./ui/button";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export const TalkShowPage = () => {
  return (
    <div className="bg-white overflow-hidden border-2 border-solid border-black w-full min-w-0 lg:min-w-[1440px] relative">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Title Section */}
      <section className="flex flex-col items-center text-center mt-2 sm:mt-8 pb-[60px] sm:pb-[94px] px-6 sm:px-0">
        <h1 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-bold text-[36px] sm:text-[56px] mb-[20px] sm:mb-[30px]">
          <span className="text-black">Talk</span>
          <span className="text-[#a81717]"> Tapestry</span>
        </h1>

        <p className="[font-family:'Inter',Helvetica] font-normal text-base sm:text-lg">
          <span className="text-[#a81717]">Collaborate</span>
          <span className="text-black"> with us to</span>
          <span className="text-[#a81717]"> host </span>
          <span className="text-black">engaging tech talk shows.</span>
        </p>
      </section>



      {/* ✅ Hero Section */}
      <section className="relative w-full h-auto lg:h-[680px] bg-[linear-gradient(89deg,rgba(0,0,0,1)_0%,rgba(168,23,23,1)_100%)] py-[60px] lg:py-0 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-[94px]">
        {/* Left Content */}
        <div className="relative z-10 max-w-[700px] text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[36px] sm:text-[48px] lg:text-[72px] leading-[46px] sm:leading-[60px] lg:leading-[80px] drop-shadow-[2px_2px_0_#a81717] mb-[20px] sm:mb-[24px]">
            Conversations That <br className="hidden lg:block" />
            Shape Tomorrow
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[16px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[30px] lg:leading-[36px] mb-[32px] sm:mb-[48px]">
            We believe every great idea deserves to be heard. Our talk shows connect industry experts, learners, and curious minds to explore emerging technologies, trends, and solutions that shape the future.
          </p>

          <Link to="/contact">
            <Button className="h-[45px] sm:h-[50px] w-[150px] sm:w-[160px] bg-[#a81717] rounded-[6px] [font-family:'Inter',Helvetica] font-medium text-white text-[14px] sm:text-[16px] hover:bg-[#8a1414] transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            className="w-[280px] sm:w-[350px] lg:w-[416px] h-auto mx-auto lg:mx-0"
            alt="Group"
            src="https://c.animaapp.com/mgendv5hmJWitU/img/group-358.png"
          />
          <img
            className="absolute top-[24px] sm:top-[44px] left-[10px] sm:left-[-9px] w-[240px] sm:w-[300px] lg:w-[333px] h-auto"
            alt="Rectangle"
            src="https://c.animaapp.com/mgendv5hmJWitU/img/rectangle-176.png"
          />
        </div>
      </section>

      {/* ✅ Quote Section */}
      <section className="relative w-full mt-[80px] sm:mt-[120px] px-6 sm:px-0 flex flex-col lg:block items-center">
        {/* Mobile Version */}
        <div className="block lg:hidden text-center">
          <img
            className="w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] rounded-full mx-auto mb-8 object-cover border-[6px] border-white shadow-lg"
            src="images/4.1.jpeg"
            alt="Union"
          />
          <blockquote className="[font-family:'Inter',Helvetica] font-medium text-[22px] sm:text-[28px] leading-[30px] sm:leading-[36px] max-w-[500px] sm:max-w-[600px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(168,23,23,1)_100%)] bg-clip-text text-transparent mb-6 text-center">
            “The next frontier isn’t artificial intelligence, it’s human responsibility.”
          </blockquote>


          <div className="bg-[#a81717] text-white py-3 px-6 inline-block rounded-md">
            <p className="font-medium text-[18px]">Praveen Kumbakonam</p>
            <p className="text-[16px]">CEO & Founder, KVR Infinity</p>
          </div>
        </div>

        {/* Desktop Version (Original preserved) */}
        <div className="hidden lg:block relative w-full h-[564px]">
          <div
            className="absolute top-0 left-[250px] w-[calc(100%-250px)] h-[400px] bg-[#f9efef]"
            style={{
              clipPath: "path('M0,0 Q100,200 0,400 H100% V0 Z')",
            }}
          ></div>

          <div className="absolute top-[-1px] left-[60px] w-[400px] h-[400px] rounded-full overflow-hidden border-[6px] border-white shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Union"
              src="images/4.1.jpeg"
            />
          </div>

          <div className="absolute top-[104px] left-[500px] max-w-[800px]">
            <blockquote className="bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(168,23,23,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Inter',Helvetica] font-medium text-5xl leading-[56px] mb-[64px]">
              &quot; The next frontier isn&apos;t artificial intelligence, <br />
              it&apos;s human responsibility &quot;
            </blockquote>

            <div className="flex flex-col gap-0 mt-16">
              <div className="w-[372px] h-[78px] bg-[#ffffff] flex items-center pl-[21px]">
                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[28px] leading-9 whitespace-nowrap">
                  Praveen Kumbakonam
                </div>
              </div>
              <div className="w-[548px] h-[78px] bg-[#a81717] flex items-center pl-[21px] gap-5">
                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[28px] leading-9 whitespace-nowrap">
                  CEO &amp; Founder
                </div>
                <div className="w-0.5 h-[52px] bg-white" />
                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[28px] leading-9 whitespace-nowrap">
                  KVR Infinity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Journey Section */}
      <section className="flex flex-col items-center py-[80px] sm:py-[120px] text-center px-6">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[32px] sm:text-5xl mb-[16px]">
          <span className="text-black">Have</span>
          <span className="text-[#a81717]"> Questions</span>
          <span className="text-black"> About Your</span>
          <span className="text-[#a81717]"> Journey?</span>
        </h2>

        <p className="[font-family:'Inter',Helvetica] font-medium text-base sm:text-lg mb-[36px] max-w-[700px]">
          <span className="text-black">Our team is ready to guide you.</span>
          <span className="text-[#a81717]"> Reach out</span>
          <span className="text-black"> and take the next step today.</span>
        </p>

        <Link to="/contact">
          <Button className="h-[45px] sm:h-[50px] w-[180px] sm:w-[212px] rounded-[10px] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(168,23,23,1)_0%,rgba(0,0,0,1)_100%)] [font-family:'Inter',Helvetica] font-semibold text-white text-base sm:text-lg hover:opacity-90 transition-opacity flex items-center justify-center">
            Connect with us
            <img
              className="ml-2 w-3 h-[10px] sm:w-3.5 sm:h-[11px]"
              alt="Arrow"
              src="https://c.animaapp.com/mgendv5hmJWitU/img/group-209.png"
            />
          </Button>
        </Link>
      </section>

      {/* ✅ Footer */}
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/918106147247?text=Hello%20I%20would%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 border-2 border-[#A71818] bg-white text-black font-semibold 
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

export default TalkShowPage;
