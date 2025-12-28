import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 🔹 Separator Line */}
        <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">
              Lokesh Thakunna
            </span>
            . All rights reserved.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Lokesh-Thakunna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Github size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Linkedin size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lokeshthakunna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Instagram size={22} />
            </a>

            {/* Email */}
            <a
              href="mailto:lokeshthakunna@gmail.com"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Mail size={22} />
            </a>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
