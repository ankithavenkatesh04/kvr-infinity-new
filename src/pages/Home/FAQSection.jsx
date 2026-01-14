import React, { useState } from 'react';

const FAQSection = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

const faqs = [
  { 
    id: 1, 
    icon: "/images/img_vector_gray_800.svg", 
    title: "Guidance and Support", 
    question: "Will someone help me with resume and Interview Preparation?", 
    answer: (
      <>
        <span className="text-[#a81717]">Yes!</span> Our intensive throughout courses include inclusion in the mentorship, 1-on-1 resume reviews, mock interviews, and encouragement to help you crack great careers. With expert guidance, you’ll gain the confidence to ace jobs and internship interviews.
      </>
    ), 
    answerImg: "/images/guidance.png" 
  },
  { 
    id: 2, 
    icon: "/images/img_vector_gray_800_6x8.svg", 
    title: "Practical Learning", 
    question: "Are there hands on Projects or Assignments?", 
    answer: (
      <>
        <span className="text-[#a81717]">Yes!</span> All our courses include live assignments and in-depth projects, alongside real-time participation and feedback. You’ll apply concepts hands-on, gain industry-relevant experience, and build a portfolio that showcases your skills.
      </>
    ), 
    answerImg: "/images/practical.png" 
  },
  {
    id: 3, 
    icon: "/images/img_vector_gray_800_34x28.svg", 
    title: "Course Flexibility", 
    question: "Can I choose a different course later if the current one does not suit me?", 
    answer: (
      <>
        <span className="text-[#a81717]">No limits at all!</span> With easy, student-friendly policies, you get access to every course within the subscriptions and can switch between courses anytime. Relax, learn at your own pace, and switch between courses whenever you like.
      </>
    ), 
    answerImg: "/images/course.png" 
  },
  { 
    id: 4, 
    icon: "/images/img_vector_gray_800_32x38.svg", 
    title: "Trusted Certification", 
    question: "What types of certificates will I receive after completing the course?", 
    answer: (
      <>
        We provide <span className="text-[#a81717]">two types of certificates</span>:<br /><br />
        1. <span className="text-[#a81717]">Completion Certificate</span> – awarded to everyone who successfully completes the course.<br />
        2. <span className="text-[#a81717]">Excellence Certificate</span> – awarded to top performers. Students receiving the Excellence Certificate are guaranteed <span className="text-[#a81717]">100% placement</span>.
      </>
    ), 
    answerImg: "/images/trusted.png" 
  },
  { 
    id: 5, 
    icon: "/images/img_vector_gray_800_36x36.svg", 
    title: "Career Opportunities", 
    question: "Will I receive career guidance to apply for jobs and internships after the course?", 
    answer: (
      <>
        <span className="text-[#a81717]">Yes!</span> Our offer comprehensive job placement courses to equip you with the skills and confidence to ace opportunities. While we provide job placements, our confidence is in supporting you at every stage to boost your chances in the future job market.
      </>
    ), 
    answerImg: "/images/career.png" 
  }
];


  const handleFAQClick = id => setSelectedFAQ(id);

  return (
    <section className="w-full bg-white py-12 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-2xl font-bold text-black mb-8">
          Got a <span className="text-[#a71818]">Question??</span>
        </h2>

        {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: FAQ Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {faqs.map(faq => (
              <div
                key={faq.id}
                onClick={() => handleFAQClick(faq.id)}
                className={`cursor-pointer bg-white rounded-xl border-2 px-4 sm:px-6 py-5 flex items-start gap-4 transition-all duration-200
                  ${selectedFAQ === faq.id ? 'border-[#CC1717] shadow-lg' : 'border-gray-300 hover:border-[#CC1717]'}
                `}
                style={{ boxShadow: selectedFAQ === faq.id ? '0 4px 16px rgba(204, 23, 23, 0.1)' : 'none', minHeight: '100px' }}
              >
                <img src={faq.icon} alt="" className="w-6 sm:w-7 h-6 sm:h-7 mt-1" />
                <div className="flex-grow">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg">{faq.title}</div>
                  <div className="text-xs sm:text-sm text-gray-700 mt-1 leading-snug">{faq.question}</div>
                </div>
                <div className="self-center">
                  <svg width="18" height="18" fill="none" stroke="#CC1717" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large default/overlay card */}
          <div className="flex-1 w-full lg:min-w-[360px] flex justify-center items-stretch mt-8 lg:mt-0">
            <div className="relative w-full" style={{ minHeight: '520px' }}>
              
              {/* Default state card */}
              <div className={`h-full flex flex-col items-center justify-center text-center border-2 border-[#CC1717] rounded-2xl bg-white px-6 sm:px-8 py-6 sm:py-8 transition-all duration-300
                ${selectedFAQ ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
                style={{ boxShadow: '0 6px 18px rgba(204, 23, 23, 0.06)', transition: 'all 0.32s ease' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <svg width="24" height="24" fill="none" stroke="#CC1717" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" strokeLinecap="round"/>
                    <circle cx="12" cy="8" r="1.5" fill="#CC1717"/>
                  </svg>
                  <div className="font-medium text-[#CC1717] text-base sm:text-lg">Get Your Answers</div>
                </div>

                <img src="/images/thinking.png" alt="Thinking Illustration" className="max-h-[250px] sm:max-h-[400px] w-auto object-contain" />
              </div>

              {/* Overlay answer card */}
              {selectedFAQ && (
                <div className="absolute inset-0 bg-white rounded-2xl border-2 border-[#CC1717] shadow-2xl z-10 flex flex-col overflow-hidden animate-fadein"
                  style={{ boxShadow: '0 10px 30px rgba(204, 23, 23, 0.08)' }}
                >
                  <div className="flex flex-col flex-grow p-4 sm:p-8 pb-4">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <img src={faqs.find(f=>f.id===selectedFAQ)?.icon} alt="" className="w-8 sm:w-10 h-8 sm:h-10"/>
                      <span className="font-bold text-lg sm:text-xl text-[#CC1717]">{faqs.find(f=>f.id===selectedFAQ)?.title}</span>
                    </div>

                    <div className="flex-1 text-black text-sm sm:text-md leading-relaxed">
                      {faqs.find(f=>f.id===selectedFAQ)?.answer}
                    </div>
                  </div>

                  <div className="h-[200px] sm:h-[300px] w-full flex-shrink-0">
                    <img src={faqs.find(f=>f.id===selectedFAQ)?.answerImg} alt={faqs.find(f=>f.id===selectedFAQ)?.title + " Illustration"} className="h-full w-full object-contain mx-auto" />
                  </div>

                  <button className="absolute top-2 sm:top-4 right-2 sm:right-4 text-[#CC1717] bg-white border border-[#CC1717] rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold hover:bg-[#CC1717] hover:text-white transition"
                    onClick={() => setSelectedFAQ(null)} aria-label="Close answer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(8px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadein {
          animation: fadein 0.32s ease both;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;

