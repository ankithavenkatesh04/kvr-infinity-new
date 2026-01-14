

import React from "react";
import { Card, CardContent } from "./ui/card";

export const AboutUsSection = () => {
  const imageData = [
    {
      src: "https://c.animaapp.com/mfc614drVTx4Yc/img/rectangle-120.png",
      alt: "Rectangle",
      className: "w-[148px] h-[180px] top-[52px] left-0",
    },
    {
      src: "https://c.animaapp.com/mfc614drVTx4Yc/img/rectangle-119.png",
      alt: "Rectangle",
      className: "w-[167px] h-[235px] top-[21px] left-[86px]",
    },
    {
      src: "https://c.animaapp.com/mfc614drVTx4Yc/img/rectangle-118.png",
      alt: "Rectangle",
      className: "w-[148px] h-[180px] top-[52px] left-[390px]",
    },
    {
      src: "https://c.animaapp.com/mfc614drVTx4Yc/img/rectangle-117.png",
      alt: "Rectangle",
      className: "w-[167px] h-[235px] top-[21px] left-[281px]",
    },
    {
      src: "https://c.animaapp.com/mfc614drVTx4Yc/img/rectangle-116.png",
      alt: "Rectangle",
      className: "w-[198px] h-[282px] top-0 left-[170px]",
    },
  ];

  const orbitImages = [
    { src: "/images/book.png", alt: "Book" },
    { src: "/images/laptop.png", alt: "Laptop" },
    { src: "/images/cap.png", alt: "Graduation Hat" },
    { src: "/images/chip.png", alt: "Chip" },
    { src: "/images/brain.png", alt: "Brain" },
    { src: "/images/shield.png", alt: "Shield" },
    { src: "/images/network.png", alt: "Network" },
  ];

  const orbitRadius = 120; // desktop orbit radius

  return (
    <section className="w-full max-w-[1269px] mx-auto my-16 px-4 sm:px-6 lg:px-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
      <Card className="bg-white rounded-[30px] border-[0.5px] border-solid border-[#a81717] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#a81717]">
        <CardContent className="p-6 sm:p-10 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6 lg:space-y-8 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms] text-center lg:text-left">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="[font-family:'Inter',Helvetica] font-semibold text-black text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[normal]">
                  About Us
                </h1>
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#a81717] text-2xl sm:text-3xl lg:text-4xl leading-snug">
                  Who we are
                </h2>
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#3e3e3e] text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-9 max-w-full lg:max-w-[544px] mx-auto lg:mx-0">
                  KVR Infinity uses AI and personalized learning to help
                  students, graduates, and professionals gain in-demand skills.
                  It also connects them with recruiters and organizations,
                  creating a unified space for learning, growth, and career
                  opportunities.
                </p>
              </div>

              {/* Rotating graphic */}
              <div className="flex justify-center mt-12 lg:mt-28 relative">
                <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px]">
                  {/* Girl in center */}
                  <img
                    src="/images/girl.png"
                    alt="Girl"
                    className="absolute top-1/2 left-1/2 w-[80px] h-[100px] sm:w-[95px] sm:h-[120px] lg:w-[110px] lg:h-[140px] -translate-x-[30%] -translate-y-1/2 z-10"
                  />

                  {/* Orbit container */}
                  <div className="absolute top-4/2 left-3/2 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                    {orbitImages.map((img, index) => {
                      const angle = (360 / orbitImages.length) * index;
                      const radius =
                        window.innerWidth < 640 ? 90 : // smaller radius for mobile
                        window.innerWidth < 1024 ? 105 : 
                        orbitRadius;
                      return (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                            transformOrigin: "center center",
                          }}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-18 -translate-x-1/2 -translate-y-1/2"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Image Collage - Hidden on mobile */}
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[538px] h-[200px] sm:h-[240px] lg:h-[282px] mx-auto translate-y-[-1rem] animate-fade-in [--animation-delay:400ms] hidden lg:block">
                {imageData.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute ${image.className} scale-75 sm:scale-90 lg:scale-100`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>

              {/* Mission Section */}
              <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12 lg:pt-16 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
                <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#a81717] text-2xl sm:text-3xl lg:text-4xl leading-snug">
                  Our Mission
                </h2>
                <p className="text-[#3e3e3e] text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-9 [font-family:'Inter',Helvetica] font-medium tracking-[0] max-w-full lg:max-w-[544px] mx-auto lg:mx-0">
                  At KVR Infinity, our mission is to empower learners and
                  professionals through AI-driven, personalized learning
                  pathways that build in-demand skills. We bridge the gap
                  between talent and opportunity by connecting individuals with
                  recruiters and organizations, fostering continuous growth and
                  a future-ready workforce.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutUsSection;
