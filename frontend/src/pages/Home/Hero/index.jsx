import React, { useState } from "react";
import profileImg from "../../../assets/me.png";

const AboutHero = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section
      className="
        container mx-auto
        px-4 sm:px-6
        py-16 md:py-20
        grid grid-cols-1 md:grid-cols-2
        gap-10 md:gap-14
        items-center
      "
    >
      {/* IMAGE */}
      <div className="relative flex justify-center order-1 md:order-none">
        {/* Glow */}
        <div
          className="
            absolute
            w-56 h-56
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            rounded-full
            bg-emerald-500/30
            blur-2xl
          "
        />

        <img
          src={profileImg}
          alt="Thineshkaran Sureshkaran"
          className="
            relative
            w-48 h-48
            sm:w-56 sm:h-56
            md:w-64 md:h-64
            rounded-full
            object-cover
            border-4
            border-emerald-500
            shadow-xl
          "
        />
      </div>

      {/* CONTENT */}
      <div className="order-2 md:order-none text-center md:text-left">
        <span className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-sm mb-4">
          About Me
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Transform your vision into a powerful digital {" "}
          <span className="text-emerald-400">Businesses</span>!
        </h2>

        <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
          I design and develop modern, responsive, and high-performing websites
          using clean UI and best practices.
        </p>

        {/* INFO BOX */}
        <div className="mt-6 bg-slate-900 border border-slate-800 p-5 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p>
            <span className="text-slate-400">Name:</span> Thineshkaran Sureshkaran
          </p>
          <p>
            <span className="text-slate-400">Phone:</span> +94 76 498 3834
          </p>
          <p className="sm:col-span-2">
 <span className="text-slate-400">Email:</span> sthinesh0730@gmail.com
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <button
            className="bg-emerald-500 text-black px-6 py-3 rounded-full text-sm hover:bg-emerald-400 transition"
          >
            Contact Me
          </button>


        </div>
      </div>
    </section>
  );
};

export default AboutHero;
