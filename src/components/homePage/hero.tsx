"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const words =
    "Creating digital experiences that transform businesses and delight users through innovative design and cutting-edge technology.";

  return (
    <div
      id="home"
      className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
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
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8">
            ABC Company
          </h1>
          <p className="text-neutral-300 max-w-lg mx-auto text-sm md:text-lg mb-8">
            Where innovation meets excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <TextGenerateEffect
            words={words}
            className="text-center max-w-3xl mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium">
            Start Your Project
          </Button>
          <Button
            variant="outline"
            className="border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
