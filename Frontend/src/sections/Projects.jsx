import { motion } from "framer-motion";

/* ======================================================
   👉 ONLY ADD / EDIT PROJECTS HERE IN FUTURE
   ====================================================== */
const projects = [
  {
    title: "Transparent Fund Tracking System",
    description:
      "A blockchain-based web platform designed to ensure transparency and accountability in fund utilization through immutable transaction records.",
    tech: ["React", "Node.js", "MongoDB", "Blockchain"],
    github: "https://github.com/Lokesh-Thakunna/mini_project",
    demo: "",
  },
  {
    title: "Web Automation & Data Scraping",
    description:
      "Automation and data scraping tools built using Selenium and Scrapy, with data analysis and visualization using Pandas and Matplotlib.",
    tech: ["Python", "Selenium", "Scrapy", "Pandas"],
    github: "https://github.com/yourusername/web-automation",
    demo: "",
  },
  {
  title: "Government Schemes Information & Eligibility System",
  description:
    "A full-stack web application that provides centralized access to Indian government welfare schemes with search, category filtering, scheme comparison, and eligibility checking. Includes an admin panel for managing and updating scheme data.",
  tech: [
    "React","FastAPI","MongoDB","Axios","Tailwind CSS","Python"],
  github: "https://github.com/yourusername/government-schemes-system",
  demo: "",
  },
];

/* ======================================================
   COMPONENT (NO NEED TO TOUCH THIS LATER)
   ====================================================== */
const Projects = () => {
  return (
    <section id="projects" className="bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* 🔹 Separator Line (Skills → Projects) */}
        <div className="mb-10 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="
                relative group
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-2xl
                p-6
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

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-3 py-1 rounded-full
                      bg-sky-400/10 text-sky-400
                      border border-sky-400/20
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 text-sm font-medium">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sky-400 transition"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sky-400 transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
