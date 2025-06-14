"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function About() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            About ABC Company
          </h2>
          <TextGenerateEffect
            words="We believe in the power of simplicity, the beauty of clean design, and the impact of meaningful digital experiences."
            className="text-center max-w-3xl mx-auto text-xl"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Design</h3>
            <p className="text-neutral-400">
              Clean, intuitive interfaces that users love to interact with
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Develop</h3>
            <p className="text-neutral-400">
              Robust, scalable solutions built with modern technologies
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Deliver</h3>
            <p className="text-neutral-400">
              Exceptional results that exceed expectations every time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
