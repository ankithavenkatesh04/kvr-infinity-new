import React from "react";
import { Card, CardContent } from "./ui/card";

export const TopInstructorsSection = () => {
  const featureCards = [
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/vector-15.svg",
      title: "Work Shapes Lives.",
      subtitle: "We Help You to Shape It Right",
      iconClasses: "w-7 h-7 sm:w-[39px] sm:h-10",
    },
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/group-2.png",
      title: "Your Future Begins Here.",
      subtitle: "We Guide You to Build It Strong",
      iconClasses: "w-7 h-7 sm:w-[39px] sm:h-[39px]",
    },
    {
      icon: "https://c.animaapp.com/mfc614drVTx4Yc/img/group-258.png",
      title: "Knowledge Shapes Destiny.",
      subtitle: "We Help You Shape It Bright",
      iconClasses: "w-7 h-7 sm:w-9 sm:h-9",
    },
  ];

  return (
    <section className="relative w-full min-h-[580px] lg:h-[738px] py-8 sm:py-10 lg:py-0 bg-[linear-gradient(180deg,rgba(168,23,23,1)_0%,rgba(0,0,0,1)_100%)]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-10 lg:gap-0">
          
          {/* Left side image */}
          <div className="flex-1 flex justify-center lg:justify-start translate-y-0 lg:translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
            <img
              className="w-[85%] max-w-[300px] sm:max-w-[420px] lg:w-[751px] lg:h-[658px] lg:max-w-none mt-2 sm:mt-4 lg:mt-10 lg:ml-8"
              alt="Group of academic instructors"
              src="https://c.animaapp.com/mfc614drVTx4Yc/img/group-261.png"
            />
          </div>

          {/* Right side content */}
          <div className="flex-1 w-full max-w-[512px] translate-x-0 lg:translate-x-[-0.5rem] text-center lg:text-left">
            <div className="mb-6 sm:mb-8 lg:mb-16 translate-y-0 lg:translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
              <h2 className="mb-3 sm:mb-4 [text-shadow:0px_2px_2px_#00000040] [-webkit-text-stroke:0.3px_#ffffff] [font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-3xl tracking-[0] leading-snug">
                Discover our Top Instructors
              </h2>

              <p className="bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-sm sm:text-base lg:text-lg leading-relaxed [font-family:'Inter',Helvetica] font-medium tracking-[0]">
                At KVR Infinity, we connect learners with{" "}
                <br className="hidden sm:block" />
                expert mentors and industry leaders.{" "}
                <br className="hidden sm:block" />
                Our instructors blend real-world experience{" "}
                <br className="hidden sm:block" />
                with practical teaching to help you gain{" "}
                <br className="hidden sm:block" />
                job-ready skills.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 translate-y-0 lg:translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[290px] sm:max-w-[360px] lg:max-w-[400px] h-[60px] sm:h-[70px] lg:h-[76px] rounded-[10px] shadow-[0px_2px_2px_#00000040] sm:shadow-[0px_3px_3px_#00000040] lg:shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(217,217,217,1)_0%,rgba(115,115,115,1)_100%)] border-0"
                >
                  <CardContent className="relative p-0 h-full flex items-center">
                    <img
                      className={`absolute left-3 sm:left-5 ${card.iconClasses}`}
                      alt="Feature icon"
                      src={card.icon}
                    />
                    <div className="ml-12 sm:ml-14 lg:ml-[91px] text-left [font-family:'Inter',Helvetica] font-semibold text-black text-xs sm:text-sm lg:text-lg tracking-[0] leading-snug">
                      {card.title}
                      <br />
                      {card.subtitle}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopInstructorsSection;

