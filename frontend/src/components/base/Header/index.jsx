import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 md:top-6 w-[95%] max-w-6xl z-[100] left-1/2 -translate-x-1/2">
      <nav className="sci-fi-glass px-6 md:px-8 py-4 flex items-center justify-between border-white/5 shadow-2xl relative">

        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-xl tracking-widest cursor-pointer z-[110]">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#014e3a] blur-md opacity-50 animate-pulse" />
          </div>
          <span className="text-white">Thineshkaran</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-400">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-all duration-300 ${isActive
                  ? "text-white drop-shadow-[0_0_8px_#014e3a]"
                  : "hover:text-white hover:drop-shadow-[0_0_8px_#014e3a]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden lg:block bg-[#006b4f] hover:bg-[#006b4f] px-6 py-2 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(1,78,58,0.4)] transition-all hover:scale-105 active:scale-95">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 h-screen bg-[#020617]/98 backdrop-blur-2xl
  flex flex-col items-center justify-center gap-10 px-6
  transition-all duration-500 lg:hidden
  ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-4xl sm:text-3xl font-extrabold text-white
      hover:text-[#014e3a] transition-colors tracking-wide"
            >
              {item.name}
            </NavLink>
          ))}
        </div>


      </nav>
    </header>
  );
};

export default Header;
