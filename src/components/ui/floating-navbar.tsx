"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string; // e.g., '#about'
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const prev = scrollYProgress.getPrevious();
    if (typeof current === "number" && typeof prev === "number") {
      const direction = current - prev;
      setVisible(current >= 0.05 && direction < 0);
    }
  });

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.link.replace("#", ""));

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "fixed top-6 inset-x-0 z-[5000] flex max-w-fit mx-auto px-6 py-2 rounded-full",
          "backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 shadow-lg",
          "items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem) => {
          const isActive = activeId === navItem.link.replace("#", "");

          return (
            <a
              key={navItem.name}
              href={navItem.link}
              aria-label={navItem.name}
              className={cn(
                "flex items-center space-x-1 px-3 py-1 rounded-full transition-colors",
                "text-white font-bold",
                "md:hover:bg-white/20 md:dark:hover:bg-white/20",
                isActive && "text-teal-500 border-b-2 border-teal-500"
              )}
            >
              {navItem.icon && (
                <span className="block sm:hidden text-lg">{navItem.icon}</span>
              )}
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
