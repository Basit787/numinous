"use client";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { heroData } from "@/data/hero";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen relative w-full bg-[var(--black)] flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#14b8a6"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 space-y-2"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] bg-opacity-50 uppercase">
            {heroData.companyName}
          </h1>
          <p className="text-[var(--teal-400)] text-2xl md:text-4xl uppercase">
            {heroData.companyDescription}
          </p>
          <TextGenerateEffect
            words={heroData.companyMeta}
            className="text-center max-w-3xl mx-auto text-lg text-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-[var(--teal-600)] md:hover:bg-[var(--teal-700)] text-[var(--white)] px-8 py-3 rounded-full text-lg font-medium">
            Start Your Project
          </Button>
          <Button
            variant="outline"
            className="border-[var(--teal-600)] text-[var(--teal-400)] md:hover:bg-[var(--teal-600)] hover:text-[var(--white)] px-8 py-3 rounded-full text-lg font-medium"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
