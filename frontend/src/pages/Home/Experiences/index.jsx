import brighthubImg from "../../../assets/brighthub.png";
import teckvoraImg from "../../../assets/teckvora.png";
import digitwebImg from "../../../assets/digitweb.jpg";

const experience = [
  {
    role: "Founder",
    company: "Brighthub",
    period: "2024 – Present",
    link: "https://brighthubstore.com",
    image: brighthubImg,
    desc: "Providing Daraz store management and social media marketing services, helping brands improve visibility, sales performance, and customer engagement.",
  },
  {
    role: "Founder",
    company: "Teckvora",
    period: "2024 – Present",
    link: "https://teckvora.com",
    image: teckvoraImg,
    desc: "Leading web development, e-commerce solutions, and digital services using modern technologies with a strong focus on UI/UX and business growth.",
  },
  {
    role: "eBay Department Head & UK E-commerce Lead",
    company: "Digitweb Lanka",
    period: "Feb 2023 – Present",
    link: "https://digitweblk.com/",
    image: digitwebImg,
    desc: "Started as an Intern and progressed through Junior, Senior, Team Lead, and UK E-commerce Lead roles. Currently heading the eBay department, managing large-scale Amazon and eBay accounts, strategy, team operations, and performance optimization.",
  },
];

const Experience = () => {
  return (
    <section className="container mx-auto  px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
        Work <span className="text-[#00c990]">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-[#004f39] transition-all"
          >
            <div className="flex gap-5 items-start">
              
              {/* Company Image */}
              <img
                src={exp.image}
                alt={exp.company}
                className="w-14 h-14 object-contain rounded-lg bg-slate-800 p-2"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-[#00c990]">
                    {exp.period}
                  </span>
                </div>

                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00c990] hover:underline block mb-2"
                >
                  {exp.company}
                </a>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
