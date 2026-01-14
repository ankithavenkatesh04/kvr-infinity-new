//  WITH FADEIN EFFECT AND EXTRA 5 FACULTY INFO. READY TO USE

// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "./ui/card";

// export const AcademicPioneersSection = () => {
//   // Two sets of team members (you can add more batches)
//   const teamBatches = [
//     [
//       { name: "Adithya Sen", role: "Marketing Executive", gradientClass: "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Vaishnavi R", role: "Content Strategist", gradientClass: "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Arohi M", role: "UI/UX Designer", gradientClass: "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Rahul K", role: "Digital Marketing Executive", gradientClass: "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Rishitha S", role: "Operations Manager", gradientClass: "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]" },
//     ],
//     [
//       { name: "John D", role: "AI Engineer", gradientClass: "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Meera P", role: "Data Analyst", gradientClass:"bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Kiran V", role: "Project Manager", gradientClass: "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Ananya S", role: "Designer", gradientClass: "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]" },
//       { name: "Vikram R", role: "Developer", gradientClass:  "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]" },
//     ],
//   ];

//   const [currentBatch, setCurrentBatch] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false); // fade out
//       setTimeout(() => {
//         setCurrentBatch((prev) => (prev + 1) % teamBatches.length);
//         setIsVisible(true); // fade in
//       }, 1000); // wait for fade-out before switching
//     }, 5000); // every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full py-16 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-semibold text-4xl mb-4">
//             <span className="text-black">Meet the </span>
//             <span className="text-[#a81717]">Academic Pioneers</span>
//             <span className="text-black"> Guiding Our Vision</span>
//           </h2>
//           <p className="[font-family:'Inter',Helvetica] text-[#666] text-lg">
//             Discover the educators whose expertise and dedication power our vision every step of the way.
//           </p>
//         </div>

//         {/* Team Member Cards */}
//         <div
//           className={`flex justify-center gap-8 flex-wrap mt-20 transition-opacity duration-500 ${
//             isVisible ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {teamBatches[currentBatch].map((member, index) => (
//             <Card
//               key={index}
//               className={`w-[197px] h-[298px] border-none shadow-none transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 ${
//                 index === 1 || index === 3 ? "mt-6" : ""
//               }`}
//             >
//               <CardContent className="p-0">
//                 <div className="relative h-[282px] bg-[#d9d9d9] rounded-[10px_10px_150px_150px]">
//                   {/* Top section */}
//                   <div className="absolute w-[197px] h-[100px] top-0 bg-white rounded-t-[10px] shadow flex flex-col items-center justify-center space-y-1">
//                     <div className="font-semibold text-black text-lg text-center">{member.name}</div>
//                     <div className="font-semibold text-[#666] text-xs text-center">{member.role}</div>
//                     <div className="w-4 h-4 mt-4">
//                       <img src="/images/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
//                     </div>
//                   </div>

//                   {/* Gradient section */}
//                   <div
//                     className={`absolute w-[197px] h-[182px] top-[100px] left-0 rounded-b-[150px] shadow ${member.gradientClass} flex items-center justify-center`}
//                   >
//                     <div className="text-center text-white/70">
//                       <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
//                         <svg
//                           className="w-8 h-8 text-white/60"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           />
//                         </svg>
//                       </div>
//                       <p className="text-xs">Photo</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AcademicPioneersSection;




// import React from "react";
// import { Card, CardContent } from "./ui/card";

// export const AcademicPioneersSection = () => {
//   const teamBatches = [
//     [
//       {
//         name: "Adithya Sen",
//         role: "Marketing Executive",
//         gradientClass:
//           "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]",
//         photo: "/images/1.png",
//       },
//       {
//         name: "Vaishnavi R",
//         role: "Content Strategist",
//         gradientClass:
//           "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]",
//         photo: "/images/2.png",
//       },
//       {
//         name: "Arohi M",
//         role: "UI/UX Designer",
//         gradientClass:
//           "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]",
//         photo: "/images/13.png",
//       },
//       {
//         name: "Rahul K",
//         role: "Digital Marketing Executive",
//         gradientClass:
//           "bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(47,3,3,1)_100%)]",
//         photo: "/images/rahul.jpg",
//       },
//       {
//         name: "Rishitha S",
//         role: "Operations Manager",
//         gradientClass:
//           "bg-[linear-gradient(180deg,rgba(217,53,53,1)_0%,rgba(47,3,3,1)_100%)]",
//         photo: "/images/rishitha.jpg",
//       },
//     ],
//   ];

//   const currentBatch = 0;

//   return (
//     <section className="relative w-full py-16 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-semibold text-4xl mb-4">
//             <span className="text-black">Meet the </span>
//             <span className="text-[#a81717]">Academic Pioneers</span>
//             <span className="text-black"> Guiding Our Vision</span>
//           </h2>
//           <p className="[font-family:'Inter',Helvetica] text-[#666] text-lg">
//             Discover the educators whose expertise and dedication power our
//             vision every step of the way.
//           </p>
//         </div>

//         {/* Team Member Cards */}
//         <div className="flex justify-center gap-8 flex-wrap mt-20">
//           {teamBatches[currentBatch].map((member, index) => (
//             <Card
//               key={index}
//               className={`w-[197px] h-[298px] border-none shadow-none transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 ${
//                 index === 1 || index === 3 ? "mt-6" : ""
//               }`}
//             >
//               <CardContent className="p-0">
//                 <div className="relative h-[282px] bg-[#d9d9d9] rounded-[10px_10px_150px_150px]">
//                   {/* Top section */}
//                   <div className="absolute w-[197px] h-[100px] top-0 bg-white rounded-t-[10px] shadow flex flex-col items-center justify-center space-y-1">
//                     <div className="font-semibold text-black text-lg text-center">
//                       {member.name}
//                     </div>
//                     <div className="font-semibold text-[#666] text-xs text-center">
//                       {member.role}
//                     </div>
//                     <div className="w-4 h-4 mt-4">
//                       <img
//                         src="/images/linkedin.png"
//                         alt="LinkedIn"
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                   </div>

//                   {/* Gradient section with centered image */}
//                   <div
//                     className={`absolute w-[197px] h-[182px] top-[100px] left-0 rounded-b-[150px] shadow ${member.gradientClass} flex items-center justify-center`}
//                   >
//                     <div className="w-38 h-36 rounded-full overflow-hidden shadow-md">
//                       <img
//                         src={member.photo || "https://via.placeholder.com/96"}
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AcademicPioneersSection;

// import React from "react";
// import { Card, CardContent } from "./ui/card";
// import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

// export const AcademicPioneersSection = () => {
//   const facultyMembers = [
//     {
//       name: "Rohini Rao",
//       role: "Soft Skills Trainer",
//       photo: "images/2.jpeg",
//       feedback:
//         "With 15+ years of experience in Soft Skills, Corporate, and Company Training, she has trained more than 5,000 students.",
//       linkedin: "https://linkedin.com/in/rohini-rao",
//     },
//     {
//       name: "Praveen Kumbakonam",
//       role: "Entrepreneurship Trainer",
//       photo: "/images/4.png",
//       feedback:
//         "With 8+ years of experience in Entrepreneurship training, he has guided over 1,000 students in developing entrepreneurial skills and business acumen..",
//       linkedin: "https://linkedin.com/in/praveen-kumbakonam",
//     },
//     {
//       name: "Nupur Etha",
//       role: "Spoken English Trainer",
//       photo: "/images/1.png",
//       feedback:
//         "With 23+ years of experience as a Spoken English Educator, she serves as the English Advisor at Christ Academy, Bengaluru.",
//       linkedin: "https://linkedin.com/in/nupur-etha",
//     },
//   ];

//   return (
//     <section className="relative w-full py-16 bg-white">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl lg:text-3xl mb-4">
//             <span className="text-black">Meet the </span>
//             <span className="text-[#a71818]">Academic Pioneers</span>
//             <span className="text-black"> Guiding Our Vision</span>
//           </h2>
//           <p className="[font-family:'Inter',Helvetica] text-[#666] text-sm sm:text-base lg:text-lg max-w-full sm:max-w-2xl mx-auto">
//             Discover the educators whose expertise and dedication power our vision every step of the way.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[1px] mt-12 sm:mt-24">
//           {facultyMembers.map((member, index) => (
//             <Card
//               key={index}
//               className="w-full sm:w-[220px] md:w-[260px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
//             >
//               {/* Faculty Image */}
//               <div className="flex justify-center -mt-14">
//                 <img
//                   src={member.photo}
//                   alt={member.name}
//                   className="w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover border-4 border-[#a71818] shadow-md bg-gray-100"
//                 />
//               </div>

//               {/* Content */}
//               <CardContent className="px-4 pb-3 pt-2 text-center">
//                 <h3 className="text-base sm:text-base md:text-base font-semibold text-[#a71818] mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm sm:text-sm text-gray-500 mb-2">{member.role}</p>
//                 <p className="text-black text-sm sm:text-sm md:text-sm leading-relaxed italic mb-3">
//                   “{member.feedback}”
//                 </p>
//                 {/* LinkedIn Icon */}
//                 <a
//                   href={member.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#0A66C2] hover:text-[#004182] text-xl inline-block"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedin />
//                 </a>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AcademicPioneersSection;


import React from "react";
import { FaLinkedin } from "react-icons/fa";

const facultyMembers = [
    {
    name: "Praveen Kumbakonam",
    role: "Entrepreneurship Trainer",
    photo: "/images/4.0.png",
    linkedin: "https://linkedin.com/in/praveen-kumbakonam",
  },
  {
    name: "Rohini Rao",
    role: "Soft Skills Trainer",
    photo: "images/2.14.png",
    linkedin: "https://linkedin.com/in/rohini-rao",
  }, 
  {
    name: "Roshan Pratap Singh",
    role: "Aptitude Trainer",
    photo: "/images/13.png",
    linkedin: "https://linkedin.com/in/rosha-pratap-singh",
  },
  {
    name: "Nupur Etha",
    role: "Spoken English Trainer",
    photo: "/images/1.png",
    linkedin: "https://linkedin.com/in/nupur-etha",
  },
  {
    name: "Mohammed Umar",
    role: "AL & ML Expert",
    photo: "/images/26.0.png",
    linkedin: "https://linkedin.com/in/mohammed-umar",
  },
];

export const AcademicPioneersSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl lg:text-3xl mb-4">
            <span className="text-black">Meet the </span>
            <span className="text-[#a71818]">Academic Pioneers</span>
            <span className="text-black"> Guiding Our </span>
             <span className="text-[#a81717]">Vission</span>
          </h2>
          <p className="[font-family:'Inter',Helvetica] text-[#666] text-sm sm:text-base lg:text-lg max-w-full sm:max-w-2xl mx-auto">
            Discover the educators whose expertise and dedication power our vision.
          </p>
        </div>

        {/* Grid for 5 cards in a line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facultyMembers.map((member, idx) => {
            const isRed = idx % 2 === 0;

            // Gradient with hover shift
            const bgGradient = isRed
              ? "bg-gradient-to-br from-[#8b0f0f] to-[#d93535] hover:bg-gradient-to-tl"
              : "bg-gradient-to-br from-[#666666] to-[#d3d3d3] hover:bg-gradient-to-tl";

            const infoBg = isRed ? "bg-[#FCECEC]" : "bg-[#F3F3F3]";
            const iconColor = isRed ? "text-[#A81717]" : "text-[#666666]";

            return (
              <div
                key={idx}
                className="relative flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                {/* Colored block with gradient */}
                <div
                  className={`w-full rounded-md overflow-hidden ${bgGradient} relative transition-all duration-500`}
                  style={{ minHeight: "220px" }}
                >
                  <div className="flex items-end justify-center h-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-auto max-h-[220px] object-contain transition-transform duration-500 hover:scale-105"
                      style={{ background: "transparent" }}
                    />
                  </div>
                </div>

                {/* Bottom info card */}
                <div
                  className={`absolute left-3 -bottom-5 w-[78%] ${infoBg} rounded-md shadow-md p-2 flex items-center justify-between transition-all duration-500`}
                >
                  <div>
                    <h3 className="text-xs font-semibold text-[#111]">
                      {member.name}
                    </h3>
                    <p className="text-[10px] text-gray-600">{member.role}</p>
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} - LinkedIn`}
                    className={`${iconColor} text-base hover:scale-110 transition-transform duration-300`}
                  >
                    <FaLinkedin />
                  </a>
                </div>

                {/* Spacer so next row doesn't overlap */}
                <div className="h-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicPioneersSection;


