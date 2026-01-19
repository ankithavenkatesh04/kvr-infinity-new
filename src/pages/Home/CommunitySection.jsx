// import React from "react";
// import Button from "../../components/ui/button";

// export const CommunitySection = () => {
//   // Decorative vertical lines (desktop only)
//   const verticalLines = [
//     { className: "w-[35px] h-[179px] top-[302px] left-[505px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-336.png" },
//     { className: "w-[35px] h-[179px] top-[281px] left-[547px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-337.png" },
//     { className: "w-[35px] h-[179px] top-[302px] left-[589px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-338.png" },
//   ];

//   // Decorative horizontal lines (desktop only)
//   const horizontalLines = [
//     { className: "w-[179px] h-[35px] top-[348px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-336-1.png" },
//     { className: "w-[179px] h-[35px] top-[306px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-337-1.png" },
//     { className: "w-[179px] h-[35px] top-[264px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-338-1.png" },
//   ];

//   return (
//     <section className="relative w-full lg:h-[532px] translate-y-[2rem] animate-fade-in [--animation-delay:0ms] overflow-hidden">
      
//       {/* ---------------- MOBILE/TABLET VERSION ---------------- */}
//       <div className="flex flex-col items-center text-center gap-6 px-4 py-12 lg:hidden relative z-10">
//         <h2 className="font-semibold text-white text-2xl sm:text-3xl">
//           Learner outcomes on <br />
//           <span>KVR Community</span>
//         </h2>
//         <p className="text-white text-base sm:text-lg max-w-[400px]">
//           89% of learners report career benefits, such as new skills,
//           increased pay, and new job opportunities.
//         </p>

//         <img className="w-[220px] sm:w-[260px] object-cover" alt="Students" src="/images/pic2.png" />
//         <img className="w-[200px] sm:w-[240px] object-cover" alt="Students" src="/images/pic3.png" />
//         <img className="w-[250px] sm:w-[320px] object-cover" alt="Students" src="/images/pic1.png" />

//         <a
//           href="https://whatsapp.com/channel/0029Va5CZ8EFMqrWbQGahy3y"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Button className="w-[200px] sm:w-[240px] h-12 sm:h-14 rounded-[10px] bg-gradient-to-r from-gray-300 to-gray-500 font-medium text-base sm:text-xl hover:opacity-90 transition-opacity">
//             <span style={{ color: "black" }}>Join our Community</span>
//           </Button>
//         </a>
//       </div>

//       {/* ---------------- DESKTOP VERSION ---------------- */}
//       <div className="hidden lg:block relative h-[532px]">
//         {/* Background gradient */}
//         <div className="absolute w-full h-[488px] top-11 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(168,23,23,0.9)_100%)]" />

//         {/* Decorative vertical lines */}
//         {verticalLines.map((line, index) => (
//           <img
//             key={`vertical-line-${index}`}
//             className={`absolute ${line.className}`}
//             alt="Decoration"
//             src={line.src}
//           />
//         ))}

//         {/* Decorative horizontal lines */}
//         {horizontalLines.map((line, index) => (
//           <img
//             key={`horizontal-line-${index}`}
//             className={`absolute ${line.className}`}
//             alt="Decoration"
//             src={line.src}
//           />
//         ))}

//         {/* Main content (desktop absolute layout untouched) */}
//         <div className="absolute w-[877px] h-[285px] top-[122px] left-[508px]">
//           <h2 className="absolute top-0 left-[368px] font-semibold text-white text-5xl [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:0.5px_#ffffff]">
//             Learner outcomes on <br />
//             <span>KVR Community</span>
//           </h2>

//           <p className="absolute top-[143px] left-[368px] text-white text-xl font-medium">
//             89% of learners report career benefits, <br />
//             such as new skills, increased pay, and <br />
//             new job opportunities.
//           </p>

//           <img
//             className="absolute w-[299px] h-[207px] top-[78px] left-0 object-cover"
//             alt="Students"
//             src="/images/pic2.png"
//           />
//         </div>

//         {/* Bottom left student image */}
//         <img
//           className="absolute w-[260px] h-[196px] top-[336px] left-[233px] object-cover"
//           alt="Students"
//           src="/images/pic3.png"
//         />

//         {/* Top left student image */}
//         <img
//           className="absolute w-[347px] h-[317px] top-0 left-[146px] object-cover"
//           alt="Students"
//           src="/images/pic1.png"
//         />

//         {/* Join us now button */}
//         <div className="absolute w-[180px] h-14 top-[390px] left-[876px]">
//           <a
//             href="https://whatsapp.com/channel/0029Va5CZ8EFMqrWbQGahy3y"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Button className="w-[240px] h-14 rounded-[10px] bg-gradient-to-r from-gray-300 to-gray-500 font-medium text-xl hover:opacity-90 transition-opacity">
//               <span style={{ color: "black" }}>Join our Community</span>
//             </Button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;

import React from "react";
import Button from "../../components/ui/button";

export const CommunitySection = () => {
  // Decorative vertical lines (desktop only)
  const verticalLines = [
    { className: "w-[35px] h-[179px] top-[302px] left-[505px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-336.png" },
    { className: "w-[35px] h-[179px] top-[281px] left-[547px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-337.png" },
    { className: "w-[35px] h-[179px] top-[302px] left-[589px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-338.png" },
  ];

  // Decorative horizontal lines (desktop only)
  const horizontalLines = [
    { className: "w-[179px] h-[35px] top-[348px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-336-1.png" },
    { className: "w-[179px] h-[35px] top-[306px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-337-1.png" },
    { className: "w-[179px] h-[35px] top-[264px] left-[385px]", src: "https://c.animaapp.com/mfnizk98jiwdnO/img/group-338-1.png" },
  ];

  return (
    <section className="relative w-full lg:h-[532px] translate-y-[2rem] animate-fade-in [--animation-delay:0ms] overflow-hidden hidden lg:block">
      {/* ---------------- DESKTOP VERSION ONLY ---------------- */}
      <div className="relative h-[532px]">
        {/* Background gradient */}
        <div className="absolute w-full h-[488px] top-11 left-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(168,23,23,0.9)_100%)]" />

        {/* Decorative vertical lines */}
        {verticalLines.map((line, index) => (
          <img
            key={`vertical-line-${index}`}
            className={`absolute ${line.className}`}
            alt="Decoration"
            src={line.src}
          />
        ))}

        {/* Decorative horizontal lines */}
        {horizontalLines.map((line, index) => (
          <img
            key={`horizontal-line-${index}`}
            className={`absolute ${line.className}`}
            alt="Decoration"
            src={line.src}
          />
        ))}

        {/* Main content */}
        <div className="absolute w-[877px] h-[285px] top-[122px] left-[508px]">
          <h2 className="absolute top-0 left-[368px] font-semibold text-white text-5xl [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:0.5px_#ffffff] leading-14">
            Learner outcomes on <br />
            <span>KVR Community</span>
          </h2>

          <p className="absolute top-[123px] left-[368px] text-white text-xl font-medium">
            89% of learners report career benefits, <br />
            such as new skills, increased pay, and <br />
            new job opportunities.
          </p>

          <img
            className="absolute w-[299px] h-[207px] top-[78px] left-0 object-cover"
            alt="Students"
            src="/images/gallery1.jpeg"
          />
        </div>

        {/* Bottom left student image */}
        <img
          className="absolute w-[260px] h-[196px] top-[336px] left-[233px] object-cover"
          alt="Students"
          src="/images/pic3.png"
        />

        {/* Top left student image */}
        <img
          className="absolute w-[347px] h-[317px] top-0 left-[146px] object-cover"
          alt="Students"
          src="/images/pic1.png"
        />

        {/* Join us now button */}
        <div className="absolute w-[180px] h-14 top-[390px] left-[876px]">
          <a
            href="https://wa.me/918431993303?text=Hello%20I%20would%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-[240px] h-14 rounded-[10px] bg-gradient-to-r from-gray-200 to-gray-400 font-medium text-xl hover:opacity-90 transition-opacity">
              <span style={{ color: "black" }}>Join our Community</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
