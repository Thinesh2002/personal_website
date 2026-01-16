import profile from "./../assets/me.png";

export default function Home() {
  return (
    <div className="bg-[#0b0f19] text-white font-sans">


      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

<div className="relative flex justify-center items-center">
  {/* Glow */}
  <div className="absolute w-82 h-82 rounded-full bg-orange-500/30 blur-3xl"></div>

  {/* Profile Image - Circle */}
  <img
    src={profile}
    alt="Profile"
    className="relative w-74 h-74 object-cover rounded-full border-4 border-orange-500"
  />
</div>


        {/* Content */}
        <div>
          <span className="px-4 py-1 rounded-full border border-orange-500 text-orange-500 text-sm">
            About Me
          </span>

          <h2 className="text-4xl font-bold mt-6 leading-tight">
            Get a website that will make a lasting impression on your audience!!!
          </h2>

          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <p><span className="text-orange-500">Name:</span> Saira Karim</p>
            <p><span className="text-orange-500">Phone:</span> (+234) 567-8910</p>
            <p><span className="text-orange-500">Email:</span> example@domain.com</p>
            <p><span className="text-orange-500">Twitter:</span> @sairakarim</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bg-orange-500 px-6 py-3 rounded-full">
              Contact me →
            </button>
            <button className="border border-orange-500 px-6 py-3 rounded-full">
              Download CV →
            </button>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          My <span className="text-orange-500">Work Skills</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            ["Figma", 99],
            ["WordPress", 99],
            ["Web Development", 95],
            ["Web Design", 97],
            ["Sketch", 93],
            ["XD", 99],
            ["Video Editing", 94],
            ["Mobile App", 90],
          ].map(([name, value], i) => (
            <div key={i} className="bg-[#121826] p-6 rounded-xl">
              <p className="font-semibold mb-3">{name}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${value}%` }}
                />
              </div>
              <p className="text-right text-sm mt-2">{value}%</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          My <span className="text-orange-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {["UI/UX Design", "Web Design", "Web Development"].map((service, i) => (
            <div key={i} className="bg-[#121826] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-semibold">{service}</h3>
                <span className="bg-orange-500 p-2 rounded-full">↗</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 px-6 py-3 rounded-full">
            See All →
          </button>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
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

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#080b14] px-10 py-12">
        <div className="grid md:grid-cols-4 gap-10 text-gray-400">
          <div>
            <h3 className="text-orange-500 text-xl font-bold">Saira</h3>
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">example@domain.com</p>
            <p className="text-sm">(+234) 567-8910</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-[#121826]"
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          © 2024 Saira. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}
