import React, { useState } from "react";
import profileImg from "../../src";

const AboutHero = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section className="container mx-auto py-20 grid md:grid-cols-2 gap-14 items-center">

      {/* Image */}
      <div className="relative flex justify-center">
        {/* Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-orange-500/30 blur-2xl"></div>

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Thineshkaran Sureshkaran"
          className="relative w-64 h-64 rounded-full object-cover border-4 border-orange-500 shadow-xl"
        />
      </div>

      {/* Content */}
      <div>
        <span className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-orange-500 text-sm mb-4">
          About Me
        </span>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Get a website that will make a lasting
          impression on your <span className="text-orange-500">audience</span>!
        </h2>

        <p className="text-slate-400 mt-4 max-w-lg">
          I design and develop modern, responsive, and high-performing websites
          using clean UI and best practices.
        </p>

        {/* Info Box */}
        <div className="mt-6 bg-slate-900 border border-slate-800 p-5 rounded-xl grid grid-cols-2 gap-4 text-sm">
          <p>
            <span className="text-slate-400">Name:</span> Thineshkaran Sureshkaran
          </p>
          <p>
            <span className="text-slate-400">Phone:</span> +94 76 498 3834
          </p>
          <p>
            <span className="text-slate-400">Email:</span>{" "}
            {showEmail ? "example@domain.com" : "••••••••••"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            className="bg-orange-500 text-black px-6 py-3 rounded-full text-sm hover:bg-orange-400"
            onClick={() => alert("Contact button clicked")}
          >
            Contact Me
          </button>

          <button
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full text-sm hover:bg-orange-500 hover:text-black"
            onClick={() => setShowEmail(!showEmail)}
          >
            {showEmail ? "Hide Email" : "Show Email"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
