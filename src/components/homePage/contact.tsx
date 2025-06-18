"use client";
import { contactData } from "@/data/contact";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";
import ContactForm from "../contactForm";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] mb-8">
            {contactData.heading}
          </h2>
          <p className="text-xl text-[var(--neutral-400)] max-w-3xl mx-auto">
            {contactData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactForm />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--white)] mb-8">
                {contactData.contactInfo.title}
              </h3>
              <div className="space-y-6">
                {contactData.contactInfo.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[var(--teal-600)] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--white)] mb-1">
                        {item.title}
                      </div>
                      <div className="text-[var(--neutral-400)]">
                        {item.value.includes("\n")
                          ? item.value.split("\n").map((line, i) => (
                              <div key={i}>
                                {line}
                                {i < item.value.split("\n").length - 1 && (
                                  <br />
                                )}
                              </div>
                            ))
                          : item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--teal-600)]/10 border border-[var(--teal-600)]/20 rounded-2xl p-8">
              <h4 className="font-bold text-[var(--white)] mb-4">
                {contactData.whyChooseUs.title}
              </h4>
              <ul className="space-y-3 text-[var(--neutral-300)]">
                {contactData.whyChooseUs.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[var(--teal-400)] rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
