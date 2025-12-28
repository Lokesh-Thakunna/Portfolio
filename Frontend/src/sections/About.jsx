import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#020617] min-h-screen flex items-center pt-28 md:pt-0"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT: Image + Glow + Name Card */}
            <div className="flex justify-center items-center w-full">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Soft Glow */}
                <div
                  className="absolute inset-0 rounded-[2.5rem]
                  bg-sky-400/25 blur-3xl scale-110 -z-10"
                />

                {/* Image (INCREASED SIZE) */}
                <img
                  src="/profile.jpg"
                  alt="Lokesh Thakunna"
                  className="
                    mx-auto
                    w-72 h-72
                    sm:w-80 sm:h-80
                    md:w-[360px] md:h-[360px]
                    object-cover rounded-[2.5rem]
                    border border-sky-400/30
                    shadow-2xl
                    pointer-events-none select-none
                  "
                />

                {/* Name Card (BOTTOM OF IMAGE) */}
                <div
                  className="
                    absolute -bottom-6 left-1/2 -translate-x-1/2
                    w-[85%]
                    bg-[#020617]/95 backdrop-blur-md
                    px-4 py-3 rounded-2xl
                    border border-white/10 shadow-xl
                  "
                >
                  <p className="text-white font-semibold text-sm text-center">
                    Lokesh Thakunna
                  </p>
                  <p className="text-sky-400 text-xs text-center">
                    Software Developer
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                About Me
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
                I am a Computer Science Engineering student with strong skills in
                <span className="text-sky-400"> C, Python, Web Development</span>,
                along with hands-on experience in
                <span className="text-sky-400"> Blockchain</span> and
                <span className="text-sky-400"> AR/VR technologies</span>.
                <br /><br />
                I focus on building secure, scalable, and user-centric
                applications while continuously improving my skills with modern
                tools and best development practices.
              </p>

              {/* Download Resume CTA */}
              <a
                href="/Lokesh_Thakunna_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-10 px-8 py-3 rounded-xl
                  bg-sky-400 text-[#020617] font-semibold
                  hover:bg-sky-300 transition
                "
              >
                Download Resume
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
