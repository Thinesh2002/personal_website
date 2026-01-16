const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-5">
      <h1 className="text-xl font-bold">
        
        Thineshkaran
      </h1>

      <ul className="hidden md:flex gap-8 text-sm text-slate-400">
        {["Home", "Services", "Portfolio", "About", "Contact"].map(item => (
          <li
            key={item}
            className="hover:text-white cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="bg-orange-500 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-400">
        Let’s Talk
      </button>
    </nav>
  );
};

export default Navbar;
