"use client";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] mb-8">
            Selected Work
          </h2>
          <p className="text-xl text-[var(--neutral-400)] max-w-3xl mx-auto">
            A showcase of projects we&apos;re proud to have been part of.
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
                style={{ backgroundColor: `var(--${project.color})` }}
              >
                <div className="absolute inset-0 bg-[var(--black)]/20 group-hover:bg-[var(--black)]/10 transition-colors duration-300"></div>
                <div className="w-32 h-32 bg-[var(--white)]/20 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center relative z-10">
                  <div className="w-16 h-16 bg-[var(--white)] rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[var(--teal-400)] font-medium">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-[var(--white)]">
                  {project.title}
                </h3>
                <p className="text-[var(--neutral-400)] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
