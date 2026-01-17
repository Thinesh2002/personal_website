import React from "react";
import bgImage from "../../../assets/about.png"; 


const HeroPage = () => {
  return (
    <section
      className="relative w-full h-[55vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay: TOP fully transparent → DARK only at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          Hi, I am{" "}
          <span className="text-emerald-400">Thineshkaran</span>
        </h1>

        <p className="mt-3 max-w-xl mx-auto text-sm md:text-base text-gray-300">
  I’m a tech professional and digital solutions specialist with a strong focus on building modern web experiences and scalable systems. 
  I enjoy solving real-world problems using technology and creating clean, user-focused digital products that help businesses grow and evolve.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5 text-gray-300">
          <a href="#" className="hover:text-emerald-400 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-emerald-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-emerald-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-emerald-400 transition">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
