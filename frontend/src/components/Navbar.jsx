import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="container mx-auto flex items-center justify-between py-5">
      
      {/* Logo / Name */}
      <h1 className="text-xl font-bold text-white">
        Thineshkaran
      </h1>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 text-sm">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <NavLink
        to="/contact"
        className="bg-orange-500 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-400 transition"
      >
        Let’s Talk
      </NavLink>

    </nav>
  );
};

export default Navbar;
