"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-600">
            ABC
            <span className="block text-xs font-normal text-gray-600 -mt-1">
              COMPANY
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
