// import React, { useState, useEffect } from 'react';
// import Button from '../../components/ui/button';

// const HeroSection = () => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [flipped, setFlipped] = useState(false);
//   const [fade, setFade] = useState(false);
//   const words = ['Accelerate', 'Boost', 'Ignite'];
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

//   // Smooth flip with fade
//   const handleFlip = () => {
//     setFade(true);
//     setTimeout(() => {
//       setFlipped(!flipped);
//       setFade(false);
//     }, 300); // fade duration
//   };

//   return (
//     <section
//     className={`relative w-full bg-gradient-to-r from-[#B5B5B5] to-[#FFFEFE] min-h-[440px] lg:min-h-[520px] mt-6 lg:mt-10`}
//     >

//       {/* Content Section */}
//       <div className="max-w-[1440px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
//         <div className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-14">
//           <div
//             className={`w-full lg:w-[38%] mb-8 lg:mb-0 lg:mt-[65px] px-0 sm:px-0 
//             ${flipped ? "lg:ml-auto lg:mr-8" : "lg:ml-8"}`}
//           >
//             {!flipped ? (
//               // Default Content
//               <div className="flex flex-col gap-6 lg:gap-[24px]">
//                 {/* Title */}
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
//                   <div className="flex items-center">
//                     <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-primary-background min-h-[44px] flex items-center">
//                       <span className="inline-block">{displayedText}</span>
//                     </h1>
//                     <div className="w-[2px] h-8 lg:h-[44px] bg-primary-background ml-1"></div>
//                   </div>
//                   <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-header-text sm:ml-4">
//                     your Career
//                   </h1>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm sm:text-base lg:text-[18px] font-semibold text-header-text leading-relaxed lg:leading-[28px]">
//                   Kick start your career with practical skills and hands-on experience that make you stand out plus, refer your friends and upskill them.
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap gap-3">
//                   <Button
//                     text="Login Now"
//                     text_font_size="16"
//                     text_font_weight="700"
//                     text_color="#ffffff"
//                     fill_background_color="#A81717"
//                     border_border_radius="8px"
//                     className="hover:bg-red-700 transition-colors duration-200 px-4 py-2 flex-shrink-0"
//                     onClick={() =>
//                       window.open(
//                         "https://web.classplusapp.com/login?orgCode=kvr",
//                         "_blank"
//                       )
//                     }
//                   />
//                   {/* Mobile-only Download Button */}
//                   <div className="lg:hidden flex-shrink-0">
//                     <Button
//                       text="Download Now"
//                       text_font_size="16"
//                       text_font_weight="700"
//                       text_color="#ffffff"
//                       fill_background_color="#A81717"
//                       border_border_radius="8px"
//                       className="hover:bg-red-700 transition-colors duration-200 px-4 py-2 w-auto"
//                       onClick={() =>
//                         window.open(
//                           "https://play.google.com/store/apps/details?id=co.april2019.kvr",
//                           "_blank"
//                         )
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // Flipped Content
//               <div className="flex flex-col gap-6 lg:gap-[24px] -mt-6">
//                 <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-black">
//                   <span className="text-[#A81717]">Choose</span> what’s right for you
//                 </h1>

//                 <p className="text-sm sm:text-base lg:text-[18px] text-header-text leading-relaxed lg:leading-[28px]">
//                   Unlock unlimited learning with one membership. Access courses, resources, and certifications anytime.
//                 </p>

//                 <ul className="space-y-2 text-sm sm:text-base lg:text-[18px] text-header-text">
//                   <li className="flex items-center gap-2">
//                     <span className="text-black">✔</span> Access to all courses & free resources
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-black">✔</span> Flexible learning anytime
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-black">✔</span> Learn from expert instructors
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="text-black">✔</span> Certification on completion
//                   </li>
//                 </ul>

//              <Button
//               text="Get Membership"
//               text_font_size="16"
//               text_font_weight="700"
//               text_color="#ffffff"
//               fill_background_color="#A81717"
//               border_border_radius="8px"
//               className="hover:bg-red-700 transition-colors duration-200 px-6 py-3 w-fit"
//               onClick={() =>
//                 window.open(
//                   "https://kvr.courses.store/422857?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp",
//                   "_blank"
//                 )
//               }
//             />


//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Hero Image with fade */}
//       <div
//         className={`hidden lg:block absolute top-0 ${flipped ? "left-0" : "right-0"} w-1/2 h-full transition-opacity duration-500 ${
//           fade ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <img
//           src={
//             flipped
//               ? "/images/hero2.png"
//               : "/images/img_rectangle_7.png"
//           }
//           alt="Hero Image"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Mobile Hero Image with fade */}
//       <div
//         className={`block lg:hidden w-full transition-opacity duration-500 ${
//           fade ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <img
//           src={
//             flipped
//               ? "/images/hero2.png"
//               : "/images/img_rectangle_7.png"
//           }
//           alt="Hero Image"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/button';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const words = ['Join', 'Challenge', 'Excel'];
  const typingSpeed = 150;
  const pauseBetweenCycles = 800;
  let wordIndex = 0;

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
<section
  className={`relative w-full bg-gradient-to-r from-[#D9D9D9] to-[#FFFEFE] min-h-[500px] lg:min-h-[600px] mt-0`} 
>
    {/* Announcement Banner */}
    <div className="absolute top-0 w-full bg-[#A81717] text-white text-sm lg:text-base font-medium overflow-hidden h-8 lg:h-10 z-20 flex items-center"> 
      {/* flex + items-center centers text vertically */}
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mr-10">
          Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹10k – ₹50k! Challenge yourself, compete with top students, and upskill!
        </span>
        <span className="mr-10">
          Participate in APL 2.0 – Register Now & Win Exciting Prizes from ₹10k – ₹50k! Challenge yourself, compete with top students, and upskill!
        </span>
      </div>
    </div>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 pt-12 lg:pt-16"> {/* more padding top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-14">
          <div className="w-full lg:w-[38%] mb-8 lg:mb-0 lg:mt-[70px] px-0 sm:px-0 lg:ml-8">
          {/* Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-tight lg:leading-[54px] text-primary-background min-h-[54px] flex items-center">
                <span className="inline-block">{displayedText}</span>
              </h1>
              <div className="w-[3px] h-10 lg:h-[54px] bg-primary-background ml-2"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold leading-tight lg:leading-[54px] text-header-text sm:ml-4">
              APL 2.0
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-header-text leading-relaxed lg:leading-[32px] mt-4">
            Participate in Aptitude Premiere League 2.0, the ultimate challenge to test your aptitude skills, compete with top students, and win exciting prizes!
          </p>

          {/* Register Button */}
          <div className="flex flex-wrap gap-3 mt-6">
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
                  "https://pages.razorpay.com/pl_S3cSdFOtEKPTDD/view",
                  "_blank"
                )
              }
            />
          </div>

          </div>
        </div>
      </div>

      {/* Desktop Hero Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/images/img_rectangle_7.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="block lg:hidden w-full">
        <img
          src="/images/img_rectangle_7.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

    {/* Marquee Animation Styles */}
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

