// import React from "react";
// import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";
// import { Link } from "react-router-dom";

// export const JoinUsTodaySection = () => {
//   const decorativeElements = [
//     {
//       size: "w-[42px] h-[42px]",
//       bg: "bg-[#f33e3e]",
//       position: "top-[9px] left-[3px]",
//       rounded: "rounded-[21px]",
//     },
//     {
//       size: "w-[22px] h-[22px]",
//       bg: "bg-[#812c2c]",
//       position: "top-[51px] left-[3px]",
//       rounded: "rounded-[11px]",
//     },
//     {
//       size: "w-3 h-3",
//       bg: "bg-[#f33e3e]",
//       position: "top-[7px] left-[902px]",
//       rounded: "rounded-md",
//     },
//     {
//       size: "w-3 h-3",
//       bg: "bg-[#812c2c]",
//       position: "top-[19px] left-[934px]",
//       rounded: "rounded-md",
//     },
//     {
//       size: "w-[62px] h-[62px]",
//       bg: "bg-[#5f090980]",
//       position: "top-0 left-[38px]",
//       rounded: "rounded-[31px]",
//     },
//     {
//       size: "w-[22px] h-[22px]",
//       bg: "bg-[#f33e3e]",
//       position: "top-[53px] left-[306px]",
//       rounded: "rounded-[11px]",
//     },
//     {
//       size: "w-[42px] h-[42px]",
//       bg: "bg-[#f33e3e]",
//       position: "top-16 left-[246px]",
//       rounded: "rounded-[21px]",
//     },
//     {
//       size: "w-8 h-8",
//       bg: "bg-[#812c2c]",
//       position: "top-0 left-[26px]",
//       rounded: "rounded-2xl",
//     },
//     {
//       size: "w-[42px] h-[42px]",
//       bg: "bg-[#f33e3e]",
//       position: "top-[19px] left-0",
//       rounded: "rounded-[21px]",
//     },
//   ];

//   const socialIcons = [
//     {
//       src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-12.svg",
//       className: "absolute w-5 h-[27px] top-[153px] left-[922px]",
//     },
//     {
//       src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-13.svg",
//       className: "absolute w-5 h-[27px] top-[153px] left-[965px]",
//     },
//     {
//       src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-4.svg",
//       className: "absolute w-5 h-[27px] top-[153px] left-[1008px]",
//     },
//     {
//       src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-16.svg",
//       className: "absolute w-[18px] h-6 top-[154px] left-[1051px]",
//     },
//   ];

//   return (
//     <section className="relative w-full py-16 bg-white translate-y-[-1rem] animate-fade-in [--animation-delay:1200ms]">
//       <div className="max-w-[1140px] mx-auto px-4">
//         <div className="relative">
//           {socialIcons.map((icon, index) => (
//             <img
//               key={index}
//               className={`absolute w-5 h-6 ${index === 0 ? "top-4 right-[218px]" : index === 1 ? "top-4 right-[175px]" : index === 2 ? "top-4 right-[132px]" : "top-4 right-[89px]"}`}
//               alt="Vector"
//               src={icon.src}
//             />
//           ))}
          
//           <Card className="relative w-full h-[178px] rounded-[10px] bg-[linear-gradient(90deg,rgba(168,23,23,1)_0%,rgba(66,9,9,1)_100%)] border-0">
//             <CardContent className="relative h-full p-0 overflow-hidden">
//               {decorativeElements.map((element, index) => (
//                 <div
//                   key={index}
//                   className={`absolute ${element.size} ${element.bg} ${element.position} ${element.rounded}`}
//                 />
//               ))}

//               <div className="flex items-center justify-between h-full px-6 lg:px-12">
//                 <div className="flex-shrink-0 translate-y-1 animate-fade-in [--animation-delay:200ms]">
//                   <h2 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-extrabold text-white text-[28px] tracking-[0] leading-[normal]">
//                     Meet the Minds <br />
//                     Behind KVR
//                   </h2>
//                 </div>


//                 <div className="flex-1 max-w-[427px] mx-8 translate-y-0 animate-fade-in [--animation-delay:400ms]">
//                   <p className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
//                     Meet the faculty and team who guide with knowledge, <br />
//                     mentor with experience, and support every step of your journey
//                   </p>
//                 </div>

//               <div className="flex-shrink-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
//                 <Link to="/faculty">
//                 <Button className="w-[201px] h-[50px] rounded-[10px] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(240,240,240,1)_0%,rgba(140,140,140,1)_100%)] border-0 transition-colors h-auto flex items-center mt-6">
//                   <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3e3e3e] text-lg tracking-[0] leading-[normal] mr-2">
//                     Explore Profiles
//                   </span>
//                   {/* Arrow icon */}
//                   <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </Button>
//                 </Link>
//               </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JoinUsTodaySection;

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

export const JoinUsTodaySection = () => {
  const decorativeElements = [
    { size: "w-[42px] h-[42px]", bg: "bg-[#f33e3e]", position: "top-[9px] left-[3px]", rounded: "rounded-[21px]" },
    { size: "w-[22px] h-[22px]", bg: "bg-[#812c2c]", position: "top-[51px] left-[3px]", rounded: "rounded-[11px]" },
    { size: "w-3 h-3", bg: "bg-[#f33e3e]", position: "top-[7px] left-[902px]", rounded: "rounded-md" },
    { size: "w-3 h-3", bg: "bg-[#812c2c]", position: "top-[19px] left-[934px]", rounded: "rounded-md" },
    { size: "w-[62px] h-[62px]", bg: "bg-[#5f090980]", position: "top-0 left-[38px]", rounded: "rounded-[31px]" },
    { size: "w-[22px] h-[22px]", bg: "bg-[#f33e3e]", position: "top-[53px] left-[306px]", rounded: "rounded-[11px]" },
    { size: "w-[42px] h-[42px]", bg: "bg-[#f33e3e]", position: "top-16 left-[246px]", rounded: "rounded-[21px]" },
    { size: "w-8 h-8", bg: "bg-[#812c2c]", position: "top-0 left-[26px]", rounded: "rounded-2xl" },
    { size: "w-[42px] h-[42px]", bg: "bg-[#f33e3e]", position: "top-[19px] left-0", rounded: "rounded-[21px]" },
  ];

  const socialIcons = [
    { src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-12.svg" },
    { src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-13.svg" },
    { src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-4.svg" },
    { src: "https://c.animaapp.com/mfc7pcnu65OifL/img/vector-16.svg" },
  ];

  return (
  <section className="relative w-full py-16 bg-white translate-y-[-8rem] animate-fade-in [--animation-delay:1200ms]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="relative">
          {/* Social icons - responsive positioning */}
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt="Social Icon"
              className={`absolute w-5 h-6 sm:w-4 sm:h-5`}
              style={{
                top: "153px",
                left: `calc(922px + ${index * 43}px)`,
                maxWidth: "calc(100% - 20px)",
              }}
            />
          ))}

          <Card className="relative w-full h-auto md:h-[178px] rounded-[10px] bg-[linear-gradient(90deg,rgba(168,23,23,1)_0%,rgba(66,9,9,1)_100%)] border-0">
            <CardContent className="relative h-full p-4 sm:p-6 md:p-0 overflow-hidden">
              {decorativeElements.map((el, index) => (
                <div
                  key={index}
                  className={`absolute ${el.size} ${el.bg} ${el.position} ${el.rounded}`}
                />
              ))}

              <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-12 py-6 md:py-0 gap-4">
                <div className="text-center md:text-left animate-fade-in [--animation-delay:200ms]">
                  <h2 className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-extrabold text-white text-[28px] sm:text-2xl md:text-[28px] tracking-[0] leading-[normal]">
                    Meet the Minds <br /> Behind KVR
                  </h2>
                </div>

                <div className="flex-1 max-w-full md:max-w-[427px] text-center md:text-left animate-fade-in [--animation-delay:400ms]">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-white text-sm sm:text-base md:text-base tracking-[0] leading-[normal]">
                    Meet the faculty and team who guide with knowledge, <br />
                    mentor with experience, and support every step of your journey
                  </p>
                </div>

                <div className="flex-shrink-0 animate-fade-in [--animation-delay:600ms] mt-4 md:mt-0">
                  <Link to="/faculty">
                    <Button className="w-[201px] h-[50px] sm:w-[180px] sm:h-[44px] rounded-[10px] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(240,240,240,1)_0%,rgba(140,140,140,1)_100%)] border-0 transition-colors flex items-center justify-center">
                      <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3e3e3e] text-sm sm:text-base mr-2">
                        Explore Profiles
                      </span>
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinUsTodaySection;
