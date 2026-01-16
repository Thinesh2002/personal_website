export default function Footer() {
  return (
    <footer className="bg-[#080b14] px-10 py-12 mt-20">
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
  );
}
