// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent } from "./ui/card";
// import FooterSection from "./FooterSection";
// import HeaderSection from "./HeaderSection";
// import { FaWhatsapp } from "react-icons/fa"; 

// // Navigation items
// const navigationItems = [
//   { label: "About Us", href: "/aboutus" },
//   { label: "Blog", href: "/blog" },
//   { label: "Career", href: "/career" },
//   { label: "Contact", href: "/contact" },
// ];

// // Terms & Conditions data
// const termsData = [
//   {
//     title: "Acceptance of Terms",
//     content:
//       "By accessing or using KVR Infinity, you agree to comply with these Terms & Conditions.",
//   },
//   {
//     title: "User Eligibility",
//     content:
//       "Users must be at least 16 years old or meet the minimum age required by local laws.\nMinors must use the platform under parental/guardian supervision.",
//   },
//   {
//     title: "Account Registration",
//     content:
//       "Users must provide accurate information during registration.\nYou are responsible for maintaining the confidentiality of your login details.",
//   },
//   {
//     title: "Use of Platform",
//     content:
//       "Courses and materials are provided for personal, non-commercial use.\nUsers may not copy, distribute, or resell content without prior written consent from KVR Infinity.",
//   },
//   {
//     title: "Payments & Refunds",
//     content:
//       "Course fees are clearly mentioned before purchase.\nRefunds (if applicable) follow KVR Infinity's refund policy outlined at checkout.",
//   },
//   {
//     title: "Intellectual Property",
//     content:
//       "All content (videos, materials, text, design, trademarks) belongs to KVR Infinity or its partners.\nUnauthorized use may result in suspension or legal action.",
//   },
//   {
//     title: "User Conduct",
//     content:
//       "Users must not engage in harmful, abusive, or fraudulent activities.\nMisuse of the platform may lead to suspension or termination of account.",
//   },
//   {
//     title: "Limitation of Liability",
//     content:
//       'KVR Infinity provides content "as is" and does not guarantee specific outcomes.\nWe are not responsible for any loss or damages resulting from use of the platform.',
//   },
//   {
//     title: "Termination of Services",
//     content:
//       "KVR Infinity reserves the right to suspend or terminate accounts for violation of policies.\nThese Terms are governed by the laws of India.",
//   },
// ];

// // Privacy Policy data
// const privacyData = [
//   {
//     title: "Information We Collect",
//     content:
//       "Personal details (name, email, phone).\nLearning data (courses, progress, certifications).\nPayment info (handled securely via third parties).\nTechnical data (device, IP, cookies).",
//   },
//   {
//     title: "How We Use Your Data",
//     content:
//       "To provide and improve services.\nTo personalize learning.\nTo process payments and issue certificates.\nTo send updates and support.",
//   },
//   {
//     title: "Data Sharing & Security",
//     content:
//       "We don't sell your data.\nShared only with trusted partners or legal authorities if required.\nProtected with encryption and secure servers.\nUsers must keep login details safe.",
//   },
//   {
//     title: "User Rights",
//     content:
//       "Access, update, or delete your data anytime.\nData is retained only as long as needed for services or law.",
//   },
//   {
//     title: "Cookies",
//     content:
//       "We use cookies to improve experience, analyze usage, and show relevant content.\nTypes: essential, performance, functional, and advertising.\nYou can disable cookies in browser settings, but some features may not work fully.",
//   },
// ];

// const PrivacyPolicyPage = () => {
//   return (
//     <div className="bg-white min-h-screen w-full">
      
//       {/* Header Section */}
//       <HeaderSection />


//       {/* Main Content */}
//       <main className="px-4 md:px-10 pb-20 pt-10 md:pt-16">
//         {/* Terms & Conditions */}
//         <section className="mb-16">
//           <h1 className="text-2xl md:text-4xl font-bold mb-8 [text-shadow:0px_4px_4px_#00000040] font-inter text-center md:text-left">
//             <span className="text-[#a81717]">Terms </span>
//             <span className="text-black">and </span>
//             <span className="text-[#a81717]">Conditions</span>
//           </h1>
//           <div className="space-y-8">
//             {termsData.map((term, index) => (
//               <Card key={index} className="border-none shadow-none">
//                 <CardContent className="p-0">
//                   <h2 className="text-xl md:text-2xl font-medium text-black mb-4 font-inter">
//                     {index + 1}. {term.title}
//                   </h2>
//                   <p className="text-base md:text-lg text-black leading-6 md:leading-7 font-inter whitespace-pre-line pl-2 md:pl-4">
//                     {term.content}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>

//         {/* Privacy Policy */}
//         <section>
//           <h1 className="text-2xl md:text-4xl font-bold mb-8 [text-shadow:0px_4px_4px_#00000040] font-inter text-center md:text-left">
//             <span className="text-[#a81717]">Privacy </span>
//             <span className="text-black">& </span>
//             <span className="text-[#a81717]">Cookies </span>
//             <span className="text-black">Policy – KVR Infinity</span>
//           </h1>
//           <div className="space-y-8">
//             {privacyData.map((privacy, index) => (
//               <Card key={index} className="border-none shadow-none">
//                 <CardContent className="p-0">
//                   <h2 className="text-xl md:text-2xl font-medium text-black mb-4 font-inter">
//                     {index + 1}. {privacy.title}
//                   </h2>
//                   <p className="text-base md:text-lg text-black leading-6 md:leading-7 font-inter whitespace-pre-line pl-2 md:pl-4">
//                     {privacy.content}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer Section */}
//       <FooterSection />
//       {/* Floating WhatsApp Contact Us Button */}
//       <a
//         href="https://wa.me/918106147247?text=Hello%20I%20would%20like%20to%20know%20more"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 border-2 border-[#A71818] bg-white text-black font-semibold 
//                   rounded-full flex items-center justify-center shadow-lg 
//                   hover:bg-[#A71818] hover:text-white transition-colors duration-300 z-50
//                   w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3"
//       >
//         {/* Icon */}
//         <FaWhatsapp className="text-lg md:text-2xl" />

//         {/* Text only visible on desktop */}
//         <span className="hidden md:inline text-sm md:text-base ml-2">Contact Us</span>
//       </a>
//     </div>
//   );
// };

// export default PrivacyPolicyPage;


import React from "react";
import { Card, CardContent } from "./ui/card";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const termsData = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using KVR Infinity, you agree to comply with these Terms & Conditions.",
  },
  {
    title: "User Eligibility",
    content:
      "Users must be at least 16 years old or meet the minimum age required by local laws.\nMinors must use the platform under parental/guardian supervision.",
  },
  {
    title: "Account Registration",
    content:
      "Users must provide accurate information during registration.\nYou are responsible for maintaining the confidentiality of your login details.",
  },
  {
    title: "Use of Platform",
    content:
      "Courses and materials are provided for personal, non-commercial use.\nUsers may not copy, distribute, or resell content without prior written consent from KVR Infinity.",
  },
  {
    title: "Payments & Refunds",
    content:
      "Course fees are clearly mentioned before purchase.\nRefunds (if applicable) follow KVR Infinity's refund policy outlined at checkout.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content (videos, materials, text, design, trademarks) belongs to KVR Infinity or its partners.\nUnauthorized use may result in suspension or legal action.",
  },
  {
    title: "User Conduct",
    content:
      "Users must not engage in harmful, abusive, or fraudulent activities.\nMisuse of the platform may lead to suspension or termination of account.",
  },
  {
    title: "Limitation of Liability",
    content:
      'KVR Infinity provides content "as is" and does not guarantee specific outcomes.\nWe are not responsible for any loss or damages resulting from use of the platform.',
  },
  {
    title: "Termination of Services",
    content:
      "KVR Infinity reserves the right to suspend or terminate accounts for violation of policies.\nThese Terms are governed by the laws of India.",
  },
];

const privacyData = [
  {
    title: "Information We Collect",
    content:
      "Personal details (name, email, phone).\nLearning data (courses, progress, certifications).\nPayment info (handled securely via third parties).\nTechnical data (device, IP, cookies).",
  },
  {
    title: "How We Use Your Data",
    content:
      "To provide and improve services.\nTo personalize learning.\nTo process payments and issue certificates.\nTo send updates and support.",
  },
  {
    title: "Data Sharing & Security",
    content:
      "We don't sell your data.\nShared only with trusted partners or legal authorities if required.\nProtected with encryption and secure servers.\nUsers must keep login details safe.",
  },
  {
    title: "User Rights",
    content:
      "Access, update, or delete your data anytime.\nData is retained only as long as needed for services or law.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies to improve experience, analyze usage, and show relevant content.\nTypes: essential, performance, functional, and advertising.\nYou can disable cookies in browser settings, but some features may not work fully.",
  },
];

const PolicyCard = ({ title, content, index, isAlternate }) => (
  <Card
    className={`p-6 md:p-8 rounded-xl shadow-md transition hover:shadow-xl ${
      isAlternate ? "bg-[#fff5f5]" : "bg-white"
    }`}
  >
    <CardContent className="p-0">
      <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 text-[#a81717]">
        <FiCheckCircle className="text-[#a81717]" />
        {index + 1}. {title}
      </h2>
      <p className="text-base md:text-lg text-gray-700 whitespace-pre-line pl-1 md:pl-2">
        {content}
      </p>
    </CardContent>
  </Card>
);

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <HeaderSection />

      <main className="px-4 md:px-16 py-12 md:py-16">
        {/* Terms & Conditions */}
        <section className="mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center md:text-left text-[#a81717]">
            Terms & Conditions
          </h1>
          <div className="grid gap-8">
            {termsData.map((term, idx) => (
              <PolicyCard
                key={idx}
                title={term.title}
                content={term.content}
                index={idx}
                isAlternate={idx % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* Privacy Policy */}
        <section>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center md:text-left text-[#a81717]">
            Privacy & Cookies Policy – KVR Infinity
          </h1>
          <div className="grid gap-8">
            {privacyData.map((privacy, idx) => (
              <PolicyCard
                key={idx}
                title={privacy.title}
                content={privacy.content}
                index={idx}
                isAlternate={idx % 2 !== 0}
              />
            ))}
          </div>
        </section>
      </main>

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

export default PrivacyPolicyPage;
