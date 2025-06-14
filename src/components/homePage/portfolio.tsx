"use client";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A clean, modern e-commerce solution with intuitive user experience and powerful admin features.",
      color: "bg-gradient-to-br from-teal-400 to-teal-600",
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      description:
        "Patient-centered mobile application with appointment scheduling and health tracking features.",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description:
        "Comprehensive financial analytics dashboard with clean data visualization and reporting.",
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
    },
    {
      title: "Learning Platform",
      category: "Web Development",
      description:
        "Interactive learning management system with course creation and progress tracking.",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            Selected Work
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            A showcase of projects we're proud to have been part of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div
                className={`${project.color} rounded-2xl p-8 mb-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center relative z-10">
                  <div className="w-16 h-16 bg-white rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-teal-400 font-medium">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
