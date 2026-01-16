import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Graphic Design",
    "E-commerce",
    "Digital Marketing",
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      desc: "Modern personal website using React & Tailwind",
    },
    {
      title: "Business Website",
      category: "Web Development",
      desc: "Corporate website with admin dashboard",
    },
    {
      title: "E-commerce Website",
      category: "Web Development",
      desc: "Full-featured e-commerce store",
    },
    {
      title: "Logo Design",
      category: "Graphic Design",
      desc: "Brand identity logo design",
    },
    {
      title: "Product Banner Design",
      category: "Graphic Design",
      desc: "High-conversion banner creatives",
    },
    {
      title: "Amazon Listing Optimization",
      category: "E-commerce",
      desc: "SEO optimized Amazon product listings",
    },
    {
      title: "Amazon PPC Campaign",
      category: "E-commerce",
      desc: "High ROI Amazon ads management",
    },
    {
      title: "Social Media Management",
      category: "Digital Marketing",
      desc: "Monthly social media growth strategy",
    },
    {
      title: "Google Ads Campaign",
      category: "Digital Marketing",
      desc: "Lead generation Google Ads setup",
    },
  ];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="bg-[#0b0f19] text-white min-h-screen px-6 py-20">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">
          My <span className="text-orange-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 mt-4">
          A showcase of projects across web development, graphic design,
          e-commerce and digital marketing.
        </p>
      </div>

      {/* ================= FILTER ================= */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full border transition
              ${
                active === cat
                  ? "bg-orange-500 border-orange-500"
                  : "border-gray-600 hover:border-orange-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= PROJECTS ================= */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {filtered.map((project, i) => (
          <div
            key={i}
            className="bg-[#121826] rounded-xl overflow-hidden hover:scale-[1.02] transition"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-orange-500/30 to-transparent"></div>

            <div className="p-6">
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-orange-500 mt-1">
                {project.category}
              </p>
              <p className="text-gray-400 text-sm mt-3">
                {project.desc}
              </p>

              <button className="mt-4 text-sm text-orange-400 hover:underline">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center mt-24">
        <h2 className="text-2xl font-bold">
          Need a similar project?
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s build something amazing for your business.
        </p>

        <button className="mt-6 bg-orange-500 px-8 py-3 rounded-full font-medium">
          Contact Me →
        </button>
      </div>

    </div>
  );
}
