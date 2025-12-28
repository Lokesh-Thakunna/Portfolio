import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const detect = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) setActive(sec);
      });
    };
    window.addEventListener("scroll", detect);
    return () => window.removeEventListener("scroll", detect);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "py-2 shadow-lg" : "py-4"}
        bg-[#020617]/95 backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <h1
          className={`font-semibold tracking-wide transition-all duration-300
            ${scrolled ? "text-lg" : "text-xl md:text-2xl"}
            text-[#38BDF8]`}
        >
          Lokesh Thakunna
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-200">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="relative group capitalize"
            >
              <span
                className={`transition-colors duration-300
                  ${active === sec ? "text-[#38BDF8]" : "group-hover:text-white"}`}
              >
                {sec}
              </span>

              <span
                className={`absolute left-0 -bottom-1 h-[1.5px] bg-[#38BDF8]
                transition-all duration-300
                ${active === sec ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Lokesh_Thakunna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-md border border-sky-400
            text-sky-400 hover:bg-sky-400 hover:text-[#020617]
            transition font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Separator Line */}
      <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#020617]/98 px-6 pb-4"
        >
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm capitalize
                ${active === sec ? "text-[#38BDF8]" : "text-gray-200"}`}
            >
              {sec}
            </a>
          ))}

          {/* Mobile Resume */}
          <a
            href="/Lokesh_Thakunna_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 py-3 text-sm text-sky-400 font-medium"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
