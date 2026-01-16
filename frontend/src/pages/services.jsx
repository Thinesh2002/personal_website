import { useRef } from "react";

export default function Services() {
  const portfolioRef = useRef(null);

  const openPortfolio = (service) => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const Card = ({ title, items }) => (
    <div className="bg-[#121826] rounded-xl p-6">
      <h3 className="text-xl font-semibold text-orange-500 mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-300">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => openPortfolio(item)}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            ➜ {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-[#0b0f19] text-white px-6 py-20">

      {/* ================= SERVICES ================= */}
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-orange-500">Services</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Web Development */}
        <Card
          title="Web Development"
          items={[
            "Personal Website",
            "Business Website",
            "E-commerce Website",
            "Custom Website",
          ]}
        />

        {/* Graphic Design */}
        <Card
          title="Graphic Design"
          items={[
            "Logo Design",
            "Banner Design",
            "Product Images",
            "Branding Materials",
          ]}
        />

        {/* E-commerce */}
        <Card
          title="E-commerce Services"
          items={[
            "Amazon Account Management",
            "Amazon Listing Creation",
            "Amazon PPC",
            "Amazon FBA",
            "eBay Listing Creation",
            "eBay PPC",
            "eBay Account Management",
            "Daraz Listing Creation",
            "Daraz Account Management",
          ]}
        />

        {/* Digital Marketing */}
        <Card
          title="Digital Marketing"
          items={[
            "Social Media Management",
            "SEO Management",
            "Google Ads",
            "Facebook Ads",
          ]}
        />
      </div>

      {/* ================= PORTFOLIO ================= */}
      <section ref={portfolioRef} className="mt-32">
        <h2 className="text-3xl font-bold text-center">
          Service <span className="text-orange-500">Portfolio</span>
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
          Click panna service-ku related projects inga display aagum.
          (Later dynamic ah filter pannalaam)
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="bg-[#121826] rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold">Project Title</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Service related portfolio showcase
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
