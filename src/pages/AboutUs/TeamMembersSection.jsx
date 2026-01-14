// import React from "react";

// export const TeamMembersSection = () => {
//   // 👇 10 members with placeholders — replace with your own images
//   const teamMembers = [
//     { id: 1, image: "/images/4.png" },
//     { id: 2, image: "/images/10.png" },
//     { id: 3, image: "/images/11.png" },
//     { id: 4, image: "/images/12.png" },
//     { id: 5, image: "/images/5.png" },
//     { id: 6, image: "/images/7.png" },
//     { id: 7, image: "/images/6.png" },
//     { id: 8, image: "/images/9.png" },
//     { id: 9, image: "/images/8.png" },
//     { id: 10, image: "/images/3.png" },
//   ];

//   const duplicatedMembers = [...teamMembers, ...teamMembers];

//   return (
//     <section className="relative w-full py-16 bg-white translate-y-[2rem] animate-fade-in [--animation-delay:1000ms]">
//       <div className="max-w-[1440px] mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="[font-family:'Inter',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-6">
//             <span className="text-black">The Brilliant </span>
//             <span className="text-[#a81717]">Minds</span>
//             <span className="text-black"> Behind Our </span>
//             <span className="text-[#a81717]">Mission</span>
//           </h2>
//           <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-[normal] max-w-4xl mx-auto">
//             Our team's got your back! Meet the awesome brains and doers who
//             make things happen and keep the mission rolling every day. Together,
//             we innovate, collaborate, and push boundaries to drive success
//             forward.
//           </p>
//         </div>

//         <div className="relative w-full h-[360px] overflow-hidden">
//           {/* 🔴 Gradient rectangular block behind carousel */}
//           <div className="absolute top-[100px] left-0 w-full h-[160px] bg-[linear-gradient(90deg,rgba(168,23,23,1)_0%,rgba(66,9,43,1)_100%)] z-0" />

//           {/* Top and Bottom elliptical frames */}
//           <div className="absolute w-full h-[50px] top-0 left-0 bg-white rounded-[1800px/40px] z-20" />
//           <div className="absolute w-full h-[50px] bottom-0 left-0 bg-white rounded-[1800px/40px] z-20" />

//           {/* Auto-scrolling container */}
//           <div className="w-full h-[320px] overflow-hidden relative z-10">
//             <div
//               className="flex gap-6 animate-marquee hover:pause-marquee"
//               style={{ width: "max-content" }}
//             >
//               {duplicatedMembers.map((member, index) => (
//                 <div
//                   key={`${member.id}-${index}`}
//                   className="w-[280px] h-[320px] flex-shrink-0 relative"
//                 >
//                   {/* Card with image */}
//                   <div className="w-[280px] h-[320px] bg-white shadow-md rounded-[15px] flex items-center justify-center relative z-30 overflow-hidden">
//                     <img
//                       src={member.image || "https://via.placeholder.com/280x320"}
//                       alt={`Team Member ${member.id}`}
//                       className="w-full h-full object-contain rounded-[15px] translate-y-2" 
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes marquee {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//           .animate-marquee {
//             display: flex;
//             animation: marquee 30s linear infinite;
//           }
//           .hover\\:pause-marquee:hover {
//             animation-play-state: paused;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// };

// export default TeamMembersSection;

import React from "react";

export const TeamMembersSection = () => {
  // 👇 13 members with placeholders — replace with your own images
  const teamMembers = [
    { id: 1, image: "/images/4.png" },
    { id: 2, image: "/images/10.png" },
    { id: 3, image: "/images/11.png" },
    { id: 4, image: "/images/12.png" },
    { id: 5, image: "/images/5.png" },
    { id: 6, image: "/images/7.png" },
    { id: 7, image: "/images/6.png" },
    { id: 8, image: "/images/9.png" },
    { id: 9, image: "/images/8.png" },
    { id: 10, image: "/images/3.png"},
    { id: 11, image: "/images/28.png"},
    { id: 12, image: "/images/30.jpeg"},
    { id: 13, image: "/images/17.1.png"},
    { id: 14, image: "/images/19.1.png"},
    { id: 15, image: "/images/20.1.png"},
    { id: 16, image: "/images/31.jpeg"},
    { id: 17, image: "/images/32.jpeg"},
    
  ];

  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="relative w-full py-16 bg-white md:-translate-y-8 lg:-translate-y-16 [--animation-delay:1000ms]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-2xl sm:text-3xl lg:text-3xl mb-4">
            <span className="text-black">The Brilliant </span>
            <span className="text-[#a81717]">Minds</span>
            <span className="text-black"> Behind Our </span>
            <span className="text-[#a81717]">Mission</span>
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-lg tracking-[0] leading-[normal] max-w-4xl mx-auto">
            Our team's got your back! Meet the awesome brains and doers who
            make things happen and keep the mission rolling every day. Together,
            we innovate, collaborate, and push boundaries to drive success
            forward.
          </p>
        </div>

        <div className="relative w-full h-[360px] overflow-hidden">
          {/* 🔴 Gradient rectangular block behind carousel */}
          <div className="absolute top-[100px] left-0 w-full h-[160px] bg-[linear-gradient(90deg,rgba(168,23,23,1)_0%,rgba(66,9,43,1)_100%)] z-0" />

          {/* Top and Bottom elliptical frames */}
          <div className="absolute w-full h-[50px] top-0 left-0 bg-white rounded-[1800px/40px] z-20" />
          <div className="absolute w-full h-[50px] bottom-0 left-0 bg-white rounded-[1800px/40px] z-20" />

          {/* Auto-scrolling container */}
          <div className="w-full h-[320px] overflow-hidden relative z-10">
            <div
              className="flex gap-6 animate-marquee hover:pause-marquee"
              style={{ width: "max-content" }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  key={`${member.id}-${index}`}
                  className="w-[280px] h-[320px] flex-shrink-0 relative"
                >
                  {/* Card with image */}
                  <div className="w-[280px] h-[320px] bg-white shadow-md rounded-[15px] flex items-center justify-center relative z-30 overflow-hidden">
                    <img
                      src={member.image || "https://via.placeholder.com/280x320"}
                      alt={`Team Member ${member.id}`}
                      className="w-full h-full object-contain rounded-[15px] translate-y-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
          .hover\\:pause-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TeamMembersSection;

