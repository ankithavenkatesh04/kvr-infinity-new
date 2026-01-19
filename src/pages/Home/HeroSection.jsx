// import React, { useState, useEffect } from 'react';
// import Button from '../../components/ui/button';

// const HeroSection = () => {
//   const [displayedText, setDisplayedText] = useState('');
//   const words = ['Join', 'Challenge', 'Excel'];
//   const typingSpeed = 150;
//   const pauseBetweenCycles = 800;
//   let wordIndex = 0;

//   useEffect(() => {
//     let currentIndex = 0;
//     let isTyping = true;

//     const typeWriter = () => {
//       const currentWord = words[wordIndex];

//       if (isTyping) {
//         if (currentIndex <= currentWord.length) {
//           setDisplayedText(currentWord.slice(0, currentIndex));
//           currentIndex++;
//         } else {
//           setTimeout(() => {
//             isTyping = false;
//             currentIndex = currentWord.length;
//           }, pauseBetweenCycles);
//         }
//       } else {
//         if (currentIndex >= 0) {
//           setDisplayedText(currentWord.slice(0, currentIndex));
//           currentIndex--;
//         } else {
//           isTyping = true;
//           currentIndex = 0;
//           wordIndex = (wordIndex + 1) % words.length;
//         }
//       }
//     };

//     const interval = setInterval(typeWriter, typingSpeed);
//     return () => clearInterval(interval);
//   }, []);

//   return (
// <section
//   className={`relative w-full bg-gradient-to-r from-[#D9D9D9] to-[#FFFEFE] min-h-[500px] lg:min-h-[600px] mt-0`} 
// >
//     {/* Announcement Banner */}
//     <div className="absolute top-0 w-full bg-[#A81717] text-white text-sm lg:text-base font-medium overflow-hidden h-8 lg:h-10 z-20 flex items-center"> 
//       {/* flex + items-center centers text vertically */}
//       <div className="flex animate-marquee whitespace-nowrap">
//       <span className="mr-10">
//         ⭐ Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹75k – ₹1 Lakh! Challenge yourself, compete with top students, and upskill!
//       </span>

//       <span className="mr-10">
//         ⭐ Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹75k – ₹1 Lakh! Challenge yourself, compete with top students, and upskill!
//       </span>
//       </div>
//     </div>

//       {/* Hero Content */}
//       <div className="max-w-[1440px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 pt-12 lg:pt-16"> {/* more padding top */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-14">
//           <div className="w-full lg:w-[38%] mb-8 lg:mb-0 lg:mt-[70px] px-0 sm:px-0 lg:ml-8">
//           {/* Title */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
//             <div className="flex items-center">
//               <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-tight lg:leading-[54px] text-primary-background min-h-[54px] flex items-center">
//                 <span className="inline-block">{displayedText}</span>
//               </h1>
//               <div className="w-[3px] h-10 lg:h-[54px] bg-primary-background ml-2"></div>
//             </div>
//             <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-tight lg:leading-[54px] text-header-text sm:ml-4">
//               APL 2.0
//             </h1>
//           </div>

//           {/* Description */}
//           <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-header-text leading-relaxed lg:leading-[32px] mt-4">
//             Participate in Aptitude Premiere League 2.0, the ultimate challenge to test your aptitude skills, compete with top students, and win exciting prizes!
//           </p>

//           {/* Register Button */}
//           <div className="flex flex-wrap gap-3 mt-6">
//             <Button
//               text="Register Now"
//               text_font_size="20"
//               text_font_weight="700"
//               text_color="#ffffff"
//               fill_background_color="#A81717"
//               border_border_radius="10px"
//               className="hover:bg-red-700 transition-colors duration-200 px-7 py-3 text-lg"
//               onClick={() =>
//                 window.open(
//                   "https://pages.razorpay.com/pl_S3cSdFOtEKPTDD/view",
//                   "_blank"
//                 )
//               }
//             />
//           </div>

//           </div>
//         </div>
//       </div>

//       {/* Desktop Hero Image */}
//       <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
//         <img
//           src="/images/img_rectangle_7.png"
//           alt="Hero Image"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Mobile Hero Image */}
//       <div className="block lg:hidden w-full">
//         <img
//           src="/images/img_rectangle_7.png"
//           alt="Hero Image"
//           className="w-full h-full object-cover"
//         />
//       </div>

//     {/* Marquee Animation Styles */}
//     <style>
//       {`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: inline-flex;
//           animation: marquee 25s linear infinite;
//         }
//       `}
//     </style>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import Button from "../../components/ui/button";

const getTimeLeft = () => {
  const targetDate = new Date("2026-02-28T23:59:59");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};


const HeroSection = () => {
  /* Typing animation */
  const [displayedText, setDisplayedText] = useState("");
  const words = ["Join", "Challenge", "Excel"];
  const typingSpeed = 150;
  const pauseBetweenCycles = 800;
  let wordIndex = 0;

  /* Countdown timer */
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isTyping) {
        if (currentIndex <= currentWord.length) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            isTyping = false;
            currentIndex = currentWord.length;
          }, pauseBetweenCycles);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex--;
        } else {
          isTyping = true;
          currentIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
    };

    const interval = setInterval(typeWriter, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-[#D9D9D9] to-[#FFFEFE] min-h-[500px] lg:min-h-[600px] mt-0">
      {/* Announcement Banner */}
      <div className="absolute top-0 w-full bg-[#A81717] text-white text-sm lg:text-base font-medium overflow-hidden h-8 lg:h-10 z-20 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mr-10">
            ⭐ Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹75k – ₹1 Lakh! Challenge yourself, compete with top students, and upskill!
          </span>
          <span className="mr-10">
            ⭐ Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹75k – ₹1 Lakh! Challenge yourself, compete with top students, and upskill!
          </span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 pt-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-14">
          <div className="w-full lg:w-[38%] mb-8 lg:mb-0 lg:mt-[70px] lg:ml-8">
            {/* Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <div className="flex items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-primary-background min-h-[54px]">
                  {displayedText}
                </h1>
                <div className="w-[3px] h-10 lg:h-[54px] bg-primary-background ml-2"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-header-text sm:ml-4">
                APL 2.0
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-header-text mt-4">
              Participate in Aptitude Premiere League 2.0, the ultimate challenge
              to test your aptitude skills, compete with top students, and win
              exciting prizes!
            </p>

            {/* Register Button + Countdown */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button
                text="Register Now"
                text_font_size="20"
                text_font_weight="700"
                text_color="#ffffff"
                fill_background_color="#A81717"
                border_border_radius="10px"
                className="hover:bg-red-700 transition-colors duration-200 px-7 py-3 text-lg"
                onClick={() =>
                  window.open(
                    "https://classplusapp.com/w/wlp/kvr/apl",
                    "_blank"
                  )
                }
              />
            <div className="text-header-text text-base sm:text-lg font-semibold tracking-wide">
              ⏳
              <span className="ml-2 font-bold">{timeLeft.days}</span>d :
              <span className="ml-1 font-bold">{timeLeft.hours}</span>h :
              <span className="ml-1 font-bold">{timeLeft.minutes}</span>m :
              <span className="ml-1 font-bold">{timeLeft.seconds}</span>s
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/images/img_rectangle_7.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block lg:hidden w-full">
        <img
          src="/images/img_rectangle_7.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
