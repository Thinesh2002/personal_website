import React from "react";
import {
  FaShoppingCart,
  FaStore,
  FaGlobe,
  FaShareAlt,
  FaCode,
  FaPaintBrush,
  FaCrown,
  FaBuilding,
} from "react-icons/fa";

const skills = [
  { name: "Amazon Seller Central", value: 95, icon: FaShoppingCart },
  { name: "eBay Store Management", value: 95, icon: FaStore },
  { name: "E-commerce Strategy (UK Market)", value: 90, icon: FaGlobe },
  { name: "Daraz Seller Center", value: 85, icon: FaStore },
  { name: "Social Media Management", value: 80, icon: FaShareAlt },
  { name: "Web Development", value: 90, icon: FaCode },
  { name: "WordPress Development", value: 95, icon: FaCode },
  { name: "UI / UX Design (Figma)", value: 85, icon: FaPaintBrush },
];

const experience = [
  {
    role: "Founder",
    company: "Brighthub",
    period: "2024 – Present",
    icon: FaCrown,
    desc: "Providing Daraz store management and social media marketing services, helping brands improve visibility, sales performance, and customer engagement.",
  },
  {
    role: "Founder",
    company: "Teckvora",
    period: "2024 – Present",
    icon: FaCrown,
    desc: "Leading web development, e-commerce solutions, and digital services using modern technologies with a strong focus on UI/UX and business growth.",
  },
  {
    role: "eBay Department Head & UK E-commerce Lead",
    company: "Digitweb Lanka",
    period: "Feb 2023 – Present",
    icon: FaBuilding,
    desc: "Started as an Intern and progressed through Junior, Senior, Team Lead, and UK E-commerce Lead roles. Currently heading the eBay department, managing large-scale Amazon and eBay accounts, strategy, team operations, and performance optimization.",
  },
];

const SkillsExperience = () => {
  return (
    <section className="container mx-auto  px-6">

      {/* Skills */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
        My <span className="text-[#00c990]">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className=" bg-slate-900 border border-slate-800 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_#004f39]"
            >

              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-[#00c990] text-lg" />
                <h4 className="text-sm font-medium text-white">
                  {skill.name}
                </h4>
              </div>

              <div className="w-full bg-slate-800 h-2 rounded">
                <div
                  className="bg-[#40cfa7] h-2 rounded transition-all duration-700"
                  style={{ width: `${skill.value}%` }}
                />
              </div>

              <p className="text-right text-xs text-slate-400 mt-2">
                {skill.value}%
              </p>
            </div>
          );
        })}
      </div>

     
     

    </section>
  );
};

export default SkillsExperience;
