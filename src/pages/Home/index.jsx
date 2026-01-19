import React from 'react';
import { Helmet } from 'react-helmet';
import { FaWhatsapp } from 'react-icons/fa'; // <-- Import WhatsApp icon
import Header from '../../components/common/Header';
import FooterSection from '../AboutUs/FooterSection';
import HeroSection from './HeroSection';
import CourseSection from './CourseSection';
import InternshipSection from './InternshipSection';
import CommunitySection from './CommunitySection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>KVR Infinity Career Development | Practical Skills Training & Internships</title>
        <meta
          name="description"
          content="Accelerate your career with KVR Infinity's practical skills training in Aptitude, English, Soft Skills & real-world internships. Join 89% of learners who report career benefits with industry-recognized certifications."
        />
        <meta property="og:title" content="KVR Infinity Career Development | Practical Skills Training & Internships" />
        <meta property="og:description" content="Accelerate your career with KVR Infinity's practical skills training in Aptitude, English, Soft Skills & real-world internships. Join 89% of learners who report career benefits with industry-recognized certifications." />
      </Helmet>

      <div className="w-full bg-background-main border-2 border-header-text relative">
        <Header />
        
        <main>
          <HeroSection />
          <CourseSection />
          <InternshipSection />
          <CommunitySection />
          <TestimonialSection />
          <FAQSection />
          <CTASection />
        </main>

        <FooterSection />

      {/* Floating WhatsApp Contact Us Button */}
      <a
        href="https://wa.me/918431993303?text=Hello%20I%20would%20like%20to%20know%20more"
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
    </>
  );
};

export default Home;
