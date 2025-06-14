"use client";
import { footerData } from "@/data/footer";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] border-t border-[var(--neutral-800)] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-[var(--teal-400)] mb-4">
              {footerData.company.name}
            </div>
            <p className="text-[var(--neutral-400)] leading-relaxed max-w-md mb-6">
              {footerData.company.description}
            </p>
            <div className="flex space-x-4">
              {footerData.company.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Image
                    src={link.img}
                    alt={link.img}
                    height={1000}
                    width={1000}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex sm:grid-cols-1 grid-cols-2 gap-20">
            <div>
              <h4 className="font-bold text-[var(--white)] mb-6">Services</h4>
              <ul className="space-y-3 text-[var(--neutral-400)]">
                {footerData.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.url}
                      className="hover:text-[var(--teal-400)] transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[var(--white)] mb-6">Company</h4>
              <ul className="space-y-3 text-[var(--neutral-400)]">
                {footerData.companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="hover:text-[var(--teal-400)] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-[var(--neutral-800)] pt-8 text-center">
          <p className="text-[var(--neutral-400)]">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
