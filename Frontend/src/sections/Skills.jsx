import { motion } from "framer-motion";

/* ======================================================
   👉 ADD / REMOVE SKILLS ONLY HERE (FUTURE-PROOF)
   ====================================================== */
const skills = [
  { name: "C" },
  { name: "Python" },
  { name: "React" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Blockchain" },
  { name: "Unity" },
  { name: "Git" },
  // 👉 Add more like this:
  // { name: "Docker" },
  // { name: "AWS" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#020617] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">

        {/* 🔹 Separator Line (About → Skills) */}
        <div className="mb-10 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Skills
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to build scalable and modern
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="
                relative group
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-2xl
                py-6
                text-center
                shadow-lg
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-sky-400/20 opacity-0
                  group-hover:opacity-100
                  blur-xl transition
                  -z-10
                "
              />

              {/* Skill Name */}
              <p className="text-white font-medium text-lg">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
