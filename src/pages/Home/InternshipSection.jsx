import React, { useRef } from 'react';

const InternshipSection = () => {
  const internships = [
    { id: 1, title: "Website and Application Building", rating: "4.7", image: "/images/intern1.png" },
    { id: 2, title: "Machine Learning", rating: "4.5", image: "/images/intern6.png" },
    { id: 3, title: "Robotics and IOT", rating: "4.7", image: "/images/intern2.png" },
    { id: 4, title: "EV and Control Systems", rating: "4.6", image: "/images/intern3.png" },
    { id: 5, title: "AutoCad", rating: "4.8", image: "/images/img_rectangle_21.png" },
    { id: 6, title: "Cloud Computing", rating: "4.9", image: "/images/intern4.png" },
    { id: 7, title: "Chip Design Technology", rating: "4.7", image: "/images/intern5.png" },
  ];

  const sliderRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const momentumIDRef = useRef(null);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);

  const handleMouseDown = (e) => {
    isDownRef.current = true;
    startXRef.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeftRef.current = sliderRef.current.scrollLeft;
    velocityRef.current = 0;

    if (momentumIDRef.current) {
      cancelAnimationFrame(momentumIDRef.current);
      momentumIDRef.current = null;
    }

    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
  };

  const handleMouseLeave = () => {
    if (isDownRef.current) handleMouseUp();
  };

  const handleMouseUp = () => {
    isDownRef.current = false;

    const momentum = () => {
      if (Math.abs(velocityRef.current) < 0.1) return;
      sliderRef.current.scrollLeft -= velocityRef.current * 20;
      velocityRef.current *= 0.95;
      momentumIDRef.current = requestAnimationFrame(momentum);
    };
    momentum();
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    sliderRef.current.scrollLeft = scrollLeftRef.current - walk;

    const now = Date.now();
    const deltaX = e.pageX - lastXRef.current;
    const deltaTime = now - lastTimeRef.current;
    velocityRef.current = deltaX / (deltaTime || 1);

    lastXRef.current = e.pageX;
    lastTimeRef.current = now;
  };

  return (
    <section className="relative w-full bg-gradient-to-r min-h-[400px] lg:min-h-[490px] -mt-4 sm:-mt-6 pl-3 sm:pl-6 lg:pl-12">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[48px]">
          {/* Section Header */}
          <div className="px-1 sm:px-2">
            <h2 className="text-2xl sm:text-2xl lg:text-[36px] font-bold leading-snug sm:leading-tight lg:leading-[44px] text-header-text mb-3 sm:mb-4 lg:mb-5">
              Unlock Opportunities After{' '}
              <span className="text-primary-background">Learning With Us</span>
            </h2>

            <p className="text-sm sm:text-sm lg:text-[18px] font-medium leading-snug sm:leading-relaxed lg:leading-[22px] text-text-muted bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              Build practical skills through our courses and access internships and career opportunities
            </p>
          </div>



          {/* Horizontal Scroll with inertia */}
          <div
            ref={sliderRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4 sm:pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-4 sm:gap-6 lg:gap-[38px] px-1 sm:px-2" style={{ minWidth: 'max-content' }}>
              {internships.map((internship) => (
                <div
                  key={internship.id}
                  className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[370px] bg-secondary-background rounded-xl sm:rounded-2xl lg:rounded-[30px] shadow-md hover:shadow-lg lg:shadow-lg lg:hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-2 sm:p-3 lg:p-[8px]">
                    {/* Internship Image */}
                    <div className="w-full h-[120px] sm:h-[150px] md:h-[160px] lg:h-[188px] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-[20px] mb-2 sm:mb-3 lg:mb-[8px]">
                      <img
                        src={internship.image}
                        alt={internship.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Internship Content */}
                    <div className="px-1 sm:px-2 lg:px-[6px]">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-[20px] font-medium leading-snug sm:leading-tight lg:leading-[22px] text-header-text mb-1 sm:mb-2 lg:mb-[8px]">
                        {internship.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-secondary-background border border-gray-200 rounded-sm lg:rounded-[5px] px-1 sm:px-2 lg:px-[6px] py-[2px] sm:py-1 lg:py-[2px]">
                          <img src="/images/img_vector.svg" alt="" className="w-3 h-3 sm:w-2 sm:h-2" />
                          <span className="text-[10px] sm:text-xs lg:text-[10px] font-normal leading-tight lg:leading-[13px] text-text-muted">
                            {internship.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
