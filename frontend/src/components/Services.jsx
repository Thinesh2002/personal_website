const services = [
  "Website Design",
  "Mobile & Desktop App",
  "UI & UX Design",
  "Photo Editing",
];

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-10">
        WHAT <span className="text-neon">WE DO?</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-neon/20 p-6 rounded-xl hover:shadow-[0_0_25px_#00ffd5] transition"
          >
            <h3 className="text-lg font-semibold mb-2">{service}</h3>
            <p className="text-sm text-gray-400">
              Creative modern solutions tailored for your business.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
