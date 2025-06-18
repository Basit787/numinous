"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { aboutData } from "@/data/about";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-[var(--white)] pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] mb-8">
            {aboutData.title}
          </h2>
          <TextGenerateEffect
            words="We believe in the power of simplicity, the beauty of clean design, and the impact of meaningful digital experiences."
            className="text-center md:text-lg text-base text-white"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[var(--teal-400)] mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--neutral-400)]">{stat.label}</div>
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
          {aboutData.cards.map((item) => (
            <div
              className="text-center p-8 rounded-2xl bg-[var(--neutral-900)] border border-[var(--neutral-800)]"
              key={item.title}
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
              >
                <Image
                  src={item.img}
                  alt={item.img}
                  height={1000}
                  width={1000}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[var(--neutral-400)]">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
