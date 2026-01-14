import React from 'react';
import Button from '../../components/ui/button';

const CTASection = () => {
  return (
    <section className="w-full bg-white pt-8 pb-16 lg:pt-[20px] lg:pb-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black whitespace-nowrap">
          Get Started with <span className="text-[#a81717]">Free Learning Courses</span>
        </h2>


          {/* Description */}
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-black">
            Kickstart your skills and career today. Explore our free courses and gain practical knowledge for real-world success.
          </p>

          {/* CTA Button */}
          <Button
            text="Start Now"
            className="bg-gradient-to-r from-[#a71818] to-[#000000] hover:from-[#8b1414] hover:to-[#1a1a1a] text-white px-8 py-3 rounded-md font-medium text-lg shadow-lg transition duration-200"
            rightImage={{
              src: "/images/img_vector_white_a700.svg",
              width: 14,
              height: 10
            }}
            onClick={() =>
              window.open(
                "https://youtu.be/dwMNpNqrtEM?si=Nnibi_cHgXoqsAqx",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
