import React from "react";
import sideImage from "../../../assets/me-1.png";

const SplitSection = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Image Side */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-54 h-54 md:w-80 md:h-80 rounded-2xl bg-[#004f39] blur-3xl"></div>

          {/* Image */}
          <img
            src={sideImage}
            alt="About"
            className="relative w-[360px] sm:w-[400px] md:w-[560px] lg:w-[620px] h-auto object-cover rounded-2xl"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none"></div>
        </div>

        {/* Text Side */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-4">
            Who I <span className="text-[#00e0a1]">Am</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            I am a results-driven professional who enjoys turning ideas into
            reliable digital solutions. I focus on clarity, performance, and
            long-term value, ensuring every project is built with purpose and
            attention to detail.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            I believe in continuous learning and adapting to new technologies to
            stay ahead in a rapidly evolving digital landscape. My approach is
            grounded in understanding real needs, collaborating effectively,
            and delivering solutions that are both functional and future-ready.
          </p>

        </div>

      </div>
    </section>
  );
};

export default SplitSection;
