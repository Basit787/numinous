"use client";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
 import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Textarea } from "../ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? We'd love to hear from you.
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
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-neutral-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-neutral-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      className="bg-neutral-800 border-neutral-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-neutral-800 border-neutral-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-neutral-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-neutral-800 border-neutral-700 text-white min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 font-medium">
                  Send Message
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
                Get in touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Email</div>
                    <div className="text-neutral-400">hello@abccompany.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Phone</div>
                    <div className="text-neutral-400">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">Office</div>
                    <div className="text-neutral-400">
                      123 Design Street
                      <br />
                      Creative District, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-600/10 border border-teal-600/20 rounded-2xl p-8">
              <h4 className="font-bold text-white mb-4">Why choose us?</h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Clean, thoughtful design approach
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Modern technology solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Dedicated support team
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Transparent communication
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
