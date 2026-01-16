export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center">
        What My <span className="text-orange-500">Clients Say</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-[#121826] p-6 rounded-xl">
            <p className="text-orange-500 text-xl">★★★★★</p>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-4 font-semibold">Client Name</p>
          </div>
        ))}
      </div>
    </section>
  );
}
