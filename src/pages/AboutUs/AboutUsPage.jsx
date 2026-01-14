// import React from "react";

// // Sections
// import PlacementSection from "./PlacementSection";
// import AboutUsSection from "./AboutUsSection";
// import AdvisorsSection from "./AdvisorsSection"; 
// import TopInstructorsSection from "./TopInstructorsSection";
// import AcademicPioneersSection from "./AcademicPioneersSection";
// import TeamMembersSection from "./TeamMembersSection";
// import JoinUsTodaySection from "./JoinUsTodaySection";
// import HeaderSection from "./HeaderSection";
// import FooterSection from "./FooterSection";

// const AboutUsPage = () => {
//   return (
//     <div className="bg-white w-full relative">
//       {/* Header Section */}
//       <HeaderSection />

//       {/* Page Content Wrapper */}
//       <div className="max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-24">
//         <PlacementSection />
//         <AboutUsSection />
//         <AdvisorsSection />
//         <TopInstructorsSection />
//         <AcademicPioneersSection />
//         <TeamMembersSection />
//         <JoinUsTodaySection />
//       </div>

//       <FooterSection />
//     </div>
//   );
// };

// export default AboutUsPage;

import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // install: npm install react-icons

// Sections
import PlacementSection from "./PlacementSection";
import AboutUsSection from "./AboutUsSection";
import AdvisorsSection from "./AdvisorsSection"; 
import TopInstructorsSection from "./TopInstructorsSection";
import AcademicPioneersSection from "./AcademicPioneersSection";
import TeamMembersSection from "./TeamMembersSection";
import JoinUsTodaySection from "./JoinUsTodaySection";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";

const AboutUsPage = () => {
  return (
    <div className="bg-white w-full relative">
      {/* Header Section */}
      <HeaderSection />

      {/* Page Content Wrapper */}
      <div className="max-w-[1530px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-24">
        <PlacementSection />
        <AboutUsSection />
        <AdvisorsSection />
        <TopInstructorsSection />
        <AcademicPioneersSection />
        <TeamMembersSection />
        <JoinUsTodaySection />
      </div>

      {/* Footer Section */}
      <FooterSection />
      {/* Floating WhatsApp Contact Us Button */}
      <a
        href="https://wa.me/918106147247?text=Hello%20I%20would%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 border-2 border-[#A71818] bg-white text-black font-semibold 
                  rounded-full flex items-center justify-center shadow-lg 
                  hover:bg-[#A71818] hover:text-white transition-colors duration-300 z-50
                  w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3"
      >
        {/* Icon */}
        <FaWhatsapp className="text-lg md:text-2xl" />

        {/* Text only visible on desktop */}
        <span className="hidden md:inline text-sm md:text-base ml-2">Contact Us</span>
      </a>


    </div>
  );
};

export default AboutUsPage;
