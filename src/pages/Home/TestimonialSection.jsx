import React, { useState, useRef } from 'react';
import { FaLinkedin } from "react-icons/fa";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const testimonials = [
      { 
      id: 1, 
      name: "Preeti A", 
      location: "AIT College, Andhra Pradesh", 
      image: "/images/testi2.jpeg", 
      message: "Thanks to the ATS-friendly resume guidance, I landed multiple interview calls and improved my chances of securing my dream job!", 
      linkedin: "https://www.linkedin.com/in/preethi0610/" // 🔗 Replace with actual LinkedIn URL
    },
    { 
      id: 2, 
      name: "Yamini", 
      location: "AIT College, Andhra Pradesh", 
      image: "/images/testi1.jpeg", 
      message: "Thanks to the Aptitude mock tests, I was well prepared for interviews. It felt like practicing the real thing. Highly recommended!", 
      linkedin: "https://www.linkedin.com/in/yaminipoojitha-rayadurgam/" 
    },
        { 
      id: 3, 
      name: "Sadhu Manoj", 
      location: "SV College, Andhra Pradesh", 
      image: "/images/testi4.jpeg", 
      message: "The practical approach to learning helped me secure my dream job. The course content was industry-relevant and up-to-date.", 
      linkedin: "https://www.linkedin.com/in/sadhu-manoj-67ab46256/" 
    },
    { 
      id: 4, 
      name: "Muni Srinivas", 
      location: "AIT College, Andhra Pradesh", 
      image: "/images/testi3.jpeg", 
      message: "KVR Infinity's Aptitude course gave me a strong foundation in logical reasoning. The instructors were patient and explained every concept clearly, which boosted my confidence.", 
      linkedin: "https://www.linkedin.com/in/munisrinivas2002/" 
    },
    { 
      id: 5, 
      name: "Palem Liyakat ", 
      location: "IIIT, Manipur", 
      image: "/images/testi7.jpeg", 
      message: "The mock interviews gave me the confidence to crack real interviews. I landed my first tech job thanks to KVR Infinity.", 
      linkedin: "https://www.linkedin.com/in/liyakath-palem-4b7626311/" 
    },
    { 
      id: 6, 
      name: "Sanjana Mohan", 
      location: "Presidency University, Bengaluru", 
      image: "/images/testi8.jpeg", 
      message: "I loved the interactive learning style and detailed explanations. The course content is extremely practical and helpful.", 
      linkedin: "https://www.linkedin.com/in/-sanjana-mohan/" 
    },
    { 
      id: 7, 
      name: "Mohammad irfan", 
      location: "SV College, Andhra Pradesh", 
      image: "/images/testi5.jpeg", 
      message: "Excellent training program with experienced instructors. The hands-on projects gave me real-world experience.", 
      linkedin: "https://www.linkedin.com/in/shaik-mohammad-irfan-459b77264/" 
    },
    { 
      id: 8, 
      name: "Pavan Kumar", 
      location: "SV College, Andhra Pradesh", 
      image: "/images/testi6.jpeg", 
      message: "The support system is amazing. From day one till placement, the team was always there to help and guide us.", 
      linkedin: "https://www.linkedin.com/in/pavan116/" 
    },
    { 
      id: 9, 
      name: "Manoj Kumar", 
      location: "Chennai", 
      image: "/images/img_ellipse_56_160x160.png", 
      message: "KVR Infinity has an excellent team of instructors. They guide you step by step, making even difficult concepts easy to grasp.", 
      linkedin: "https://www.linkedin.com/in/manojkumar" 
    }
  ];

  // responsive items per page
  const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  // Touch Handlers
  const handleTouchStart = (e) => { touchStartXRef.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndXRef.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const delta = touchStartXRef.current - touchEndXRef.current;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
  };

  return (
    <section className="w-full py-12 lg:py-16 translate-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-background">Students</span> are saying..
          </h2>
        </div>

        {/* Navigation and Content Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>

          {/* Testimonials Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * itemsPerPage;
              const pageTestimonials = testimonials.slice(start, start + itemsPerPage);

              return (
                <div
                  key={pageIndex}
                  className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2"
                >
                  {pageTestimonials.map((testimonial) => (
                    <div key={testimonial.id} className="text-center">
                      {/* Profile Image */}
                      <div className="mb-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>

                        {/* ✅ LinkedIn Icon with Link */}
                        <div className="flex justify-center mt-2">
                          <a 
                            href={testimonial.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin className="text-[#999999] w-5 h-5 cursor-pointer hover:text-[#A81717] transition-colors duration-200" />
                          </a>
                        </div>
                        <div className="w-10 sm:w-12 h-1 bg-red-600 mx-auto mt-3"></div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-sm sm:text-base lg:text-[16px] leading-relaxed">
                        {testimonial.message}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" className="lg:w-6 lg:h-6" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
