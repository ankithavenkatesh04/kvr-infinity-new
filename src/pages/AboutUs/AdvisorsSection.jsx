import React from "react";
import { FaLinkedin } from "react-icons/fa";

const advisors = [
  {
    name: "Alak Majumder",
    designation: "Advisor & Backbone",
    photo: "/images/16.0.png",
    description:
      "Assistant Professor in the Department of ECE at NIT Arunachal Pradesh, is the backbone of the team and leads the Integrated Circuit and System (i-CAS) Lab. His research spans Analog and Digital VLSI, PMIC, and Wireline Communication Circuits",
    linkedin: "https://linkedin.com/in/ankitha-venkatesh",
  },
  {
    name: "Nazib-Ul-Hassan",
    designation: "Advisor - Engineering",
    photo: "/images/14.jpeg",
    description:
      "Master’s in ECE from NIT and a PhD from the University of Malaysia, is currently working at Uppsala University, Sweden, while also guiding a Swedish startup focused on Physio-Electric materials.",
    linkedin: "https://linkedin.com/in/rahul-sharma",
  },
  {
    name: "Sandeep Bhati",
    designation: "Advisor - Non Technical",
    photo: "/images/15.jpeg",
    description:
      "EEE graduate from NIT, is the author of the upcoming book Aptitude 4 All and currently serves in the Rajasthan High Court. He has successfully cracked SSC CGL and SSC CHSL exams and is presently preparing for his second attempt at the Civil Services",
    linkedin: "https://linkedin.com/in/sneha-iyer",
  },
];

const AdvisorsSection = () => {
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-3xl mb-4">
            <span className="text-black">Meet Our </span>
            <span className="text-[#a71818]">Advisors</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-full sm:max-w-2xl mx-auto">
            Our expert advisors provide guidance, mentorship, and strategic insight to ensure we achieve our mission with excellence.
          </p>
        </div>

        {/* Advisor Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12 sm:mt-24">
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[250px] md:w-[280px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 relative mx-auto"
            >
              {/* Gradient Top Bar */}
              <div className="h-2 w-full rounded-t-2xl bg-gradient-to-r from-[#a71818] to-[#660000]"></div>
              {/* Profile Image */}
              <div className="flex justify-center -mt-12">
                <img
                  src={advisor.photo}
                  alt={advisor.name}
                  className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-white shadow-md bg-gray-100"
                />
              </div>

              {/* Card Content */}
              <div className="px-6 py-4 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#a71818] mb-1">
                  {advisor.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-2">{advisor.designation}</p>
                <p className="text-gray-700 text-sm md:text-sm leading-relaxed italic mb-4">
                  {advisor.description}
                </p>

                {/* LinkedIn Icon */}
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#999999] hover:text-[#a81717] text-xl inline-block"
                  aria-label={`${advisor.name} LinkedIn`}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
