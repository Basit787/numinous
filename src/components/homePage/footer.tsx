"use client";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-teal-400 mb-4">
              ABC Company
            </div>
            <p className="text-neutral-400 leading-relaxed max-w-md mb-6">
              Creating digital experiences that are not just beautiful, but
              meaningful. We craft solutions that truly serve your business
              goals.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-teal-400 transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-teal-400 transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400">
            &copy; 2024 ABC Company. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
