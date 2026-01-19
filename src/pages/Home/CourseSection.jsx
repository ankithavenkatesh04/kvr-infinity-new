// import React, { useRef, useState } from 'react';
// import Button from '../../components/ui/button';

// const CourseSection = () => {
//   const [showPopup, setShowPopup] = useState(false); // popup state

//   const courses = [
//     { id: 1, title: "Aptitude", description: "Boost your logical thinking", image: "/images/img_rectangle_6.png" },
//     { id: 2, title: "Spoken English", description: "Speak confidently and fluently", image: "/images/course1.png" },
//     { id: 3, title: "Soft Skills", description: "Enhance your communication", image: "/images/course3.png" },
//     { id: 5, title: "Python", description: "Practice coding skills", image: "/images/course4.png" },
//     { id: 6, title: "Java", description: "Learn Java basics ", image: "/images/course5.png" },
//     { id: 6, title: "Basic Computers", description: "Learn System basics", image: "/images/course6.png" },
//     { id: 7, title: "Written English", description: "Polish grammar & writing", image: "/images/course2.png" }
//   ];

//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
//     }
//   };

//   // BUTTON CLICK HANDLER
//   const handleButtonClick = (title) => {
//     if (title === "Aptitude") {
//       window.open(
//         "https://youtu.be/dwMNpNqrtEM?si=Nnibi_cHgXoqsAqx",
//         "_blank",
//         "noopener,noreferrer"
//       );
//     } else {
//       setShowPopup(true);
//     }
//   };

//   return (
//     <section className="w-full bg-background-main py-8 sm:py-12 lg:py-[86px] mt-6 sm:mt-12 sm:ml-6 px-2 sm:px-0">
//       <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-6 lg:gap-[30px]">
        
//           {/* Section Header */}
//           <div className="text-center lg:text-left -mt-7">
//             <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-header-text mb-3 lg:mb-[13px]">
//               Explore our{' '}
//               <span className="text-primary-background">Top Free Courses</span>
//             </h2>
//             <p className="text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed lg:leading-[22px] text-text-muted bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
//               Discover where you stand today. Unlock insights to shape your tomorrow.
//             </p>
//           </div>

//           {/* Courses Grid with Scroll */}
//           <div className="relative">
//             <div
//               ref={scrollRef}
//               className="overflow-x-auto scrollbar-hide"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//               }}
//             >
//               <style jsx>{`
//                 .scrollbar-hide::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}</style>

//               <div className="flex gap-4 sm:gap-6 lg:gap-[40px] pb-4 lg:pb-0" style={{ minWidth: 'max-content' }}>
//                 {courses?.map((course) => (
//                   <div
//                     key={course?.id}
//                     className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[304px] bg-background-neutral rounded-xl sm:rounded-2xl lg:rounded-[30px] overflow-hidden"
//                   >
//                     {/* Course Image */}
//                     <div className="w-full h-[140px] sm:h-[160px] lg:h-[182px] overflow-hidden">
//                       <img
//                         src={course?.image}
//                         alt={course?.title}
//                         className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-[30px]"
//                       />
//                     </div>

//                     {/* Course Content */}
//                     <div className="p-3 sm:p-4 lg:p-[22px] flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
//                       <div className="text-center">
//                         <h3 className="text-base sm:text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[30px] text-header-text mb-1 lg:mb-[4px]">
//                           {course?.title}
//                         </h3>
//                         <p className="text-xs sm:text-sm lg:text-[16px] font-normal leading-relaxed lg:leading-[17px] text-header-text">
//                           {course?.description}
//                         </p>
//                       </div>

//                       {/* Learning Button */}
//                       <Button
//                         text="Start Learning"
//                         text_font_size="16"
//                         text_font_weight="500"
//                         text_color="#ffffff"
//                         fill_background="linear-gradient(90deg, #a81717 0%, #420909 100%)"
//                         fill_background_color="#a81717"
//                         border_border="none"
//                         border_border_radius="10px"
//                         layout_align_self="center"
//                         effect_box_shadow="none"
//                         layout_width="100%"
//                         position="relative"
//                         margin="0"
//                         layout_gap="0"
//                         variant="primary"
//                         size="medium"
//                         padding="12px 34px"
//                         className="w-full hover:opacity-90 transition-opacity duration-200"
//                         onClick={() => handleButtonClick(course.title)}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Arrows */}
//             <div className="flex justify-end items-center gap-3 sm:gap-4 mt-4 pr-2">
//               {/* Left Arrow */}
//               <button
//                 onClick={scrollLeft}
//                 className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="#a71818"
//                   className="w-5 h-5 sm:w-6 sm:h-6"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               {/* Right Arrow */}
//               <button
//                 onClick={scrollRight}
//                 className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="#a71818"
//                   className="w-5 h-5 sm:w-6 sm:h-6"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* COMING SOON POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//           <div className="bg-white w-[90%] sm:w-[420px] rounded-2xl shadow-xl p-6 text-center animate-fade-in">
//             {/* Icon */}
//             <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#A81717]/10 mb-4">
//               <span className="text-[#A81717] text-2xl font-bold">!</span>
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-bold text-black mb-2">
//               Coming Soon 🚀
//             </h3>

//             {/* Message */}
//             <p className="text-sm text-gray-600 mb-6">
//               This course is under development. Stay tuned for exciting updates!
//             </p>

//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="px-6 py-2 rounded-full bg-[#A81717] text-white font-medium hover:bg-[#8f1414] transition"
//             >
//               Got it
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default CourseSection;



import React, { useRef, useState } from 'react';
import Button from '../../components/ui/button';

const CourseSection = () => {
  const [showPopup, setShowPopup] = useState(false); // popup state

  const courses = [
    { id: 1, title: "L1 Aptitude", description: "Boost your logical thinking", image: "/images/img_rectangle_6.png", link: "https://youtu.be/v-p_SlAfsuM?si=Q-B43e74cU7z36N7" },
    { id: 2, title: "GD & Debate", description: "Improve your Communication", image: "/images/img_rectangle_6.png", link: "https://youtu.be/v-p_SlAfsuM?si=Q-B43e74cU7z36N7" },
    { id: 3, title: "ATS-Friendly Resume", description: "Enhance your CV", image: "/images/img_rectangle_6.png", link: "https://youtu.be/v-p_SlAfsuM?si=Q-B43e74cU7z36N7" },
    { id: 4, title: "Interview Prep", description: "Prepare confidently for interviews", image: "/images/img_rectangle_6.png", link: "https://youtu.be/v-p_SlAfsuM?si=Q-B43e74cU7z36N7" },
    { id: 5, title: "Spoken English", description: "Speak confidently and fluently", image: "/images/course1.png" },
    { id: 6, title: "Soft Skills", description: "Enhance your communication", image: "/images/course3.png" },
    { id: 7, title: "Python", description: "Practice coding skills", image: "/images/course4.png" },
    { id: 8, title: "Java", description: "Learn Java basics ", image: "/images/course5.png" },
    { id: 9, title: "Basic Computers", description: "Learn System basics", image: "/images/course6.png" },
    { id: 10, title: "Written English", description: "Polish grammar & writing", image: "/images/course2.png" }
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // BUTTON CLICK HANDLER
  const handleButtonClick = (course) => {
    if (course.link) {
      // Open YouTube for first 4 cards
      window.open(course.link, "_blank", "noopener,noreferrer");
    } else {
      setShowPopup(true); // Coming soon for the rest
    }
  };

  return (
    <section className="w-full bg-background-main py-8 sm:py-12 lg:py-[86px] mt-6 sm:mt-12 sm:ml-6 px-2 sm:px-0">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:gap-[30px]">
        
          {/* Section Header */}
          <div className="text-center lg:text-left -mt-7">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-header-text mb-3 lg:mb-[13px]">
              Explore our{' '}
              <span className="text-primary-background">Top Free Courses</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed lg:leading-[22px] text-text-muted bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Discover where you stand today. Unlock insights to shape your tomorrow.
            </p>
          </div>

          {/* Courses Grid with Scroll */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              <div className="flex gap-4 sm:gap-6 lg:gap-[40px] pb-4 lg:pb-0" style={{ minWidth: 'max-content' }}>
                {courses?.map((course) => (
                  <div
                    key={course?.id}
                    className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[304px] bg-background-neutral rounded-xl sm:rounded-2xl lg:rounded-[30px] overflow-hidden"
                  >
                    {/* Course Image */}
                    <div className="w-full h-[140px] sm:h-[160px] lg:h-[182px] overflow-hidden">
                      <img
                        src={course?.image}
                        alt={course?.title}
                        className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl lg:rounded-t-[30px]"
                      />
                    </div>

                    {/* Course Content */}
                    <div className="p-3 sm:p-4 lg:p-[22px] flex flex-col gap-4 sm:gap-6 lg:gap-[30px]">
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg lg:text-[24px] font-semibold leading-tight lg:leading-[30px] text-header-text mb-1 lg:mb-[4px]">
                          {course?.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-[16px] font-normal leading-relaxed lg:leading-[17px] text-header-text">
                          {course?.description}
                        </p>
                      </div>

                      {/* Learning Button */}
                      <Button
                        text="Start Learning"
                        text_font_size="16"
                        text_font_weight="500"
                        text_color="#ffffff"
                        fill_background="linear-gradient(90deg, #a81717 0%, #420909 100%)"
                        fill_background_color="#a81717"
                        border_border="none"
                        border_border_radius="10px"
                        layout_align_self="center"
                        effect_box_shadow="none"
                        layout_width="100%"
                        position="relative"
                        margin="0"
                        layout_gap="0"
                        variant="primary"
                        size="medium"
                        padding="12px 34px"
                        className="w-full hover:opacity-90 transition-opacity duration-200"
                        onClick={() => handleButtonClick(course)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-end items-center gap-3 sm:gap-4 mt-4 pr-2">
              <button
                onClick={scrollLeft}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#a71818" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#a71818" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COMING SOON POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white w-[90%] sm:w-[420px] rounded-2xl shadow-xl p-6 text-center animate-fade-in">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#A81717]/10 mb-4">
              <span className="text-[#A81717] text-2xl font-bold">!</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Coming Soon 🚀</h3>
            <p className="text-sm text-gray-600 mb-6">This course is under development. Stay tuned for exciting updates!</p>
            <button onClick={() => setShowPopup(false)} className="px-6 py-2 rounded-full bg-[#A81717] text-white font-medium hover:bg-[#8f1414] transition">Got it</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseSection;
