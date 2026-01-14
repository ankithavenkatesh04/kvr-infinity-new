import React, { useState, useEffect } from 'react';

const PartnershipSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // ✅ Step 1: List all logo files
  const logoFiles = [
    "img_group_31.svg", // Partner 1
    "img_group_32.svg", // Partner 2
    "img_group_33.svg", // Partner 3
    "img_group_34.svg", // Partner 4
    "img_group_35.svg", // Partner 5
    "logo6.jpeg",
    "logo7.jpeg",
    "logo8.jpeg",
    "logo9.jpeg",
    "logo10.jpeg",
    "logo11.jpeg",
    "logo12.jpeg",
    "logo13.jpeg",
    "logo14.jpeg",
    "logo15.jpeg",
    "logo16.jpeg",
    "logo17.jpeg",
    "logo18.jpeg",
    "logo19.jpeg",
    "logo20.jpeg",
    "logo21.jpeg",
    "logo22.jpeg",
    "logo23.jpeg",
    "logo24.jpeg",
    "logo25.jpeg",
    "logo26.jpeg",
    "logo27.jpeg",
    "logo28.jpeg",
    "logo29.jpeg",
    "logo30.jpeg",
    "logo31.jpeg",
    "logo32.jpeg",
    "logo33.jpeg",
    "logo34.jpeg",
    "logo35.jpeg",
    "logo36.jpeg",
    "logo37.jpeg",
    "logo38.jpeg",
    "logo39.jpeg",
    "logo40.jpeg",
    "logo41.jpeg",
    "logo42.jpeg",
    "logo43.jpeg",
    "logo44.jpeg",
  ];

  // ✅ Step 2: Build partners array automatically
  const partners = [
    ...logoFiles.map((file, idx) => ({
      id: idx + 1,
      logo: `/images/${file}`, // all logos from /public/images/
      alt: `Partner ${idx + 1}`,
    })),
    // Duplicate list for seamless infinite scroll
    ...logoFiles.map((file, idx) => ({
      id: idx + 1 + logoFiles.length,
      logo: `/images/${file}`,
      alt: `Partner ${idx + 1}`,
    })),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev >= 50) {
          return 0;
        }
        return prev + 0.002; // slower smooth scroll
      });
    }, 2); // slightly slower interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-background-main py-12 lg:py-[90px] relative">
      {/* Gradient Line + Client Stories Text */}
      <div className="relative top-10 md:top-28">
        <div className="absolute left-4 md:left-40 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="w-[2px] h-24 md:h-36 bg-gradient-to-b from-[#A71818] to-[#000000] relative z-10 mt-10 md:mt-28"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-0 -ml-10 md:-ml-20 top-10 md:top-24">
              <span className="text-xs md:text-sm font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 bg-gradient-to-b from-[#A71818] to-[#000000] bg-clip-text text-transparent mb-1 md:mb-2">
                STORIES
              </span>
              <span className="text-xs md:text-sm font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 bg-gradient-to-b from-[#A71818] to-[#000000] bg-clip-text text-transparent">
                CLIENT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:gap-[20px]">
        {/* Section Header */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-2xl lg:text-[36px] font-bold leading-snug sm:leading-snug lg:leading-[44px] text-header-text">
            Our <span className="text-primary-background">Valued Supporters</span>
          </h2>
        </div>

          {/* Infinite Scrolling Partners */}
          <div className="relative overflow-hidden">
            <div
              className="flex items-center gap-2 sm:gap-3 lg:gap-[13px] transition-none mt-12 md:mt-20"
              style={{
                transform: `translateX(-${scrollPosition}%)`,
                width: `${partners.length * 20}%`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / partners.length}%` }}
                >
<img
  src={partner.logo}
  alt={partner.alt}
  className={`h-8 sm:h-10 lg:h-[60px] w-auto object-contain transition duration-300 ease-in-out
    opacity-100 hover:opacity-90
    ${partner.alt === "Partner 8" ? "lg:h-[95px]" : ""} 
    ${partner.alt === "Partner 21" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 9" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 13" ? "lg:h-[35px]" : ""} 
    ${partner.alt === "Partner 10" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 14" ? "lg:h-[35px]" : ""} 
    ${partner.alt === "Partner 16" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 17" ? "lg:h-[85px]" : ""} 
    ${partner.alt === "Partner 18" ? "lg:h-[40px]" : ""} 
    ${partner.alt === "Partner 20" ? "lg:h-[95px]" : ""} 
    ${partner.alt === "Partner 26" ? "lg:h-[115px]": ""} 
    ${partner.alt === "Partner 28" ? "lg:h-[50px]" : ""} 
    ${partner.alt === "Partner 29" ? "lg:h-[50px]" : ""} 
    ${partner.alt === "Partner 30" ? "lg:h-[40px]" : ""} 
    ${partner.alt === "Partner 31" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 35" ? "lg:h-[60px]" : ""} 
    ${partner.alt === "Partner 36" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 37" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 42" ? "lg:h-[30px]" : ""} 
    ${partner.alt === "Partner 43" ? "lg:h-[110px]": ""} 
  `}
  style={{
    marginTop: "-12px",
    marginRight:
      partner.alt === "Partner 28" || partner.alt === "Partner 41" || partner.alt === "Partner 9"
        ? "-10px"
        : partner.alt === "Partner 37"
        ? "-25px"
        : partner.alt === "Partner 15"
        ? "-50px" // logo15 moved to right
        : partner.alt === "Partner 16"
        ? "-45px" // logo15 moved to right
        : partner.alt === "Partner 17"
        ? "-25px"
        : partner.alt === "Partner 30"
        ? "-40px"
        : partner.alt === "Partner 29"
        ? "-40px"
        : partner.alt === "Partner 41"
        ? "-50px"
        : partner.alt === "Partner 26"
        ? "-50px"
        : undefined,
    marginLeft:
      partner.alt === "Partner 29" || partner.alt === "Partner 42" || partner.alt === "Partner 10"
        ? "40px"
        : partner.alt === "Partner 8"
        ? "-1px"
        : partner.alt === "Partner 35"
        ? "-25px"
        : partner.alt === "Partner 7"
        ? "25px"
        : partner.alt === "Partner 38"
        ? "-20px"
        : partner.alt === "Partner 24"
        ? "-20px"
        : undefined,
    ...(partner.alt === "Partner 23" && { marginTop: "-32px" }),
    ...(partner.alt === "Partner 15" && { marginTop: "-32px" }),
    ...(partner.alt === "Partner 27" && { marginTop: "-32px" }),
    // Force lighter grey for SVGs
    filter: partner.logo.endsWith(".svg")
      ? "grayscale(1) brightness(1.2) opacity(0.7)"
      : "none",
    transition: "filter 0.3s ease",
  }}
  onMouseEnter={(e) => {
    if (partner.logo.endsWith(".svg"))
      e.currentTarget.style.filter = "grayscale(0) brightness(1) opacity(1)";
  }}
  onMouseLeave={(e) => {
    if (partner.logo.endsWith(".svg"))
      e.currentTarget.style.filter = "grayscale(1) brightness(1.2) opacity(0.7)";
  }}
/>



                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
