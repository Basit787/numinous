"use client";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Textarea } from "../ui/textarea";

const contactData = {
  heading: "Let's Work Together",
  subheading: "Ready to bring your vision to life? We'd love to hear from you.",
  form: {
    title: "Send us a message",
    fields: [
      { id: "firstName", label: "First Name", type: "input" },
      { id: "lastName", label: "Last Name", type: "input" },
      { id: "email", label: "Email", type: "email" },
      { id: "message", label: "Message", type: "textarea" },
    ],
    buttonText: "Send Message",
  },
  contactInfo: {
    title: "Get in touch",
    items: [
      {
        icon: <Mail className="h-6 w-6 text-white" />,
        title: "Email",
        value: "hello@abccompany.com",
      },
      {
        icon: <Phone className="h-6 w-6 text-white" />,
        title: "Phone",
        value: "+1 (555) 123-4567",
      },
      {
        icon: <MapPin className="h-6 w-6 text-white" />,
        title: "Office",
        value: "123 Design Street\nCreative District, NY 10001",
      },
    ],
  },
  whyChooseUs: {
    title: "Why choose us?",
    benefits: [
      "Clean, thoughtful design approach",
      "Modern technology solutions",
      "Dedicated support team",
      "Transparent communication",
    ],
  },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            {contactData.heading}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            {contactData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                {contactData.form.title}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-neutral-300">
                      {contactData.form.fields[0].label}
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-neutral-300">
                      {contactData.form.fields[1].label}
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral-300">
                    {contactData.form.fields[2].label}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-neutral-800 border-neutral-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-neutral-300">
                    {contactData.form.fields[3].label}
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-neutral-800 border-neutral-700 text-white min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-medium">
                  {contactData.form.buttonText}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                {contactData.contactInfo.title}
              </h3>
              <div className="space-y-6">
                {contactData.contactInfo.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">
                        {item.title}
                      </div>
                      <div className="text-neutral-400">
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

            <div className="bg-teal-600/10 border border-teal-600/20 rounded-2xl p-8">
              <h4 className="font-bold text-white mb-4">
                {contactData.whyChooseUs.title}
              </h4>
              <ul className="space-y-3 text-neutral-300">
                {contactData.whyChooseUs.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
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
}
