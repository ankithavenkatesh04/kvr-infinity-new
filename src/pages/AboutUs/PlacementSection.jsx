import React from "react";
import { Card, CardContent } from "./ui/card";

export const PlacementSection = () => {
  const statsData = [
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/vector-11.svg",
      number: "8+",
      description: "years of Experience",
      iconWidth: "w-[49px]",
      iconHeight: "h-[57px]",
    },
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/vector-10.svg",
      number: "20+",
      description: "Expert Faculties",
      iconWidth: "w-[46px]",
      iconHeight: "h-12",
    },
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/vector-3.svg",
      number: "40+",
      description: "Exciting Courses",
      iconWidth: "w-[51px]",
      iconHeight: "h-[34px]",
    },
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/vector-2.svg",
      number: "1500+",
      description: "Bright Minds",
      iconWidth: "w-[42px]",
      iconHeight: "h-11",
    },
  ];

  return (
 <section className="relative min-h-[586px] w-full lg:w-screen lg:-ml-8 
  bg-[url(https://c.animaapp.com/mfc7pcnu65OifL/img/rectangle-111.png)] 
  bg-cover bg-center overflow-hidden">


  {/* Left blur */}
  <div className="absolute top-[232px] left-[-100px] w-[185px] h-[166px] bg-[#a81717] rounded-[92.5px/83px] blur-[120px]" />

  {/* Center blur */}
  <div className="absolute top-[232px] left-[50%] w-[272px] h-[254px] -translate-x-1/2 bg-[#a81717] rounded-[136px/127px] blur-[100px]" />

  {/* Right blur */}
  <div className="absolute top-[232px] right-[-100px] w-44 h-[166px] bg-[#a81717] rounded-[88px/83px] blur-[120px]" />

  {/* Content */}
  <div className="flex flex-col lg:flex-row items-center justify-between h-full max-w-[1440px] mx-auto px-6 lg:px-[142px] py-10 lg:py-0">
    {/* Your content here */}
  </div>

  {/* Content wrapper */}
  <div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-[142px] py-10 lg:py-0 max-w-[1440px] mx-auto">


        {/* Left side - Hero text */}
        <div className="flex-1 max-w-2xl text-center lg:text-left mt-0 lg:mt-16 translate-y-0 lg:translate-y-4 animate-fade-in [--animation-delay:200ms]">
          <div className="relative">
            <h1 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-[80px] mb-4">
              From Potential <br className="hidden lg:block" />
              to Placement
            </h1>
            <p className="bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-medium text-transparent text-xl sm:text-2xl lg:text-4xl leading-normal mt-6 lg:mt-8">
              Building careers, one skill
              <br className="hidden lg:block" />
              at a time
            </p>
          </div>
        </div>

{/* Right side - Animated stats cards */}
<div className="w-[246px] h-[388px] mx-auto lg:mx-0 mt-10 lg:mt-20 overflow-hidden translate-y-0 lg:translate-y-4 animate-fade-in [--animation-delay:400ms]">
  <div className="animate-marquee-vertical flex flex-col gap-[30px] hover:pause-marquee [--duration:8s]">
    {/* First set of cards */}
    {statsData.map((stat, index) => (
      <Card
        key={`first-${index}`}
        className="w-[246px] h-[167px] rounded-[30px] border-2 border-[#a81717] shadow-[0px_4px_12px_#a81717] bg-transparent flex-shrink-0"
      >
        <CardContent className="flex items-center p-0 h-full">
          <div className="flex items-center gap-4 px-7">
            <img
              className={`${stat.iconWidth} ${stat.iconHeight}`}
              alt="Stat icon"
              src={stat.icon}
            />
            <div className="flex flex-col">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-5xl leading-normal">
                {stat.number}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm leading-normal">
                {stat.description}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}

    {/* Second set for infinite loop */}
    {statsData.map((stat, index) => (
      <Card
        key={`second-${index}`}
        className="w-[246px] h-[167px] rounded-[30px] border-2 border-[#a81717] shadow-[0px_4px_12px_#a81717] bg-transparent flex-shrink-0"
      >
        <CardContent className="flex items-center p-0 h-full">
          <div className="flex items-center gap-4 px-7">
            <img
              className={`${stat.iconWidth} ${stat.iconHeight}`}
              alt="Stat icon"
              src={stat.icon}
            />
            <div className="flex flex-col">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-5xl leading-normal">
                {stat.number}
              </div>
              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-sm leading-normal">
                {stat.description}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
</div>

    <img
      className="hidden lg:block absolute w-[180px] sm:w-[220px] lg:w-[283px] h-auto top-[80px] sm:top-[100px] lg:top-[123px] right-1/2 lg:right-[425px] translate-x-1/2 lg:translate-x-0 object-cover"
      alt="Hero image"
      src="https://c.animaapp.com/mfc7pcnu65OifL/img/rectangle-113.png"
    />


      <style jsx>{`
        @keyframes marquee-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          display: flex;
          flex-direction: column;
          animation: marquee-vertical 8s linear infinite;
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PlacementSection;


