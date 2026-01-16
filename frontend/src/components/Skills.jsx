import React from "react";
import {
  ShoppingCart,
  Store,
  Globe,
  Share2,
  Code,
  Layout,
  Briefcase,
  Crown,
  Building2,
} from "lucide-react";

const skills = [
  { name: "Amazon Seller Central", value: 95, icon: ShoppingCart },
  { name: "eBay Store Management", value: 95, icon: Store },
  { name: "E-commerce Strategy (UK Market)", value: 90, icon: Globe },
  { name: "Daraz Seller Center", value: 85, icon: Store },
  { name: "Social Media Management", value: 80, icon: Share2 },
  { name: "Web Development", value: 90, icon: Code },
  { name: "WordPress Development", value: 95, icon: Code },
  { name: "UI / UX Design (Figma)", value: 85, icon: Layout },
];

const experience = [
  {
    role: "Founder",
    company: "Brighthub",
    period: "2024 – Present",
    icon: Crown,
    desc: "Providing Daraz store management and social media marketing services, helping brands improve visibility, sales performance, and customer engagement.",
  },
  {
    role: "Founder",
    company: "Teckvora",
    period: "2024 – Present",
    icon: Crown,
    desc: "Leading web development, e-commerce solutions, and digital services using modern technologies with a strong focus on UI/UX and business growth.",
  },
  {
    role: "eBay Department Head & UK E-commerce Lead",
    company: "Digitweb Lanka",
    period: "Feb 2023 – Present",
    icon: Building2,
    desc: "Started as an Intern and progressed through Junior, Senior, Team Lead, and UK E-commerce Lead roles. Currently heading the eBay department, managing large-scale Amazon and eBay accounts, strategy, team operations, and performance optimization.",
  },
];

const SkillsExperience = () => {
  return (
    <section className="container mx-auto py-20">

      {/* Skills */}
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-orange-500">Skills</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-5 h-5 text-orange-500" />
                <h4 className="text-sm font-medium">{skill.name}</h4>
              </div>

              <div className="w-full bg-slate-800 h-2 rounded">
                <div
                  className="bg-orange-500 h-2 rounded transition-all duration-700"
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

      {/* Experience */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Work <span className="text-orange-500">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between mb-1">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-sm text-orange-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-2">
                    {exp.company}
                  </p>

                  <p className="text-slate-300 text-sm">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default SkillsExperience;
