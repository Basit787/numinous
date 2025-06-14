"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that create meaningful connections between your brand and your audience.",
      //   icon: <Palette className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies for optimal performance and user experience.",
      //   icon: <Code className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
      //   icon: <Smartphone className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
    {
      title: "Analytics",
      description:
        "Data-driven insights to help you make informed decisions and optimize your digital presence.",
      //   icon: <BarChart3 className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
    {
      title: "Security",
      description:
        "Comprehensive security solutions to protect your digital assets and user data.",
      //   icon: <Shield className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
    {
      title: "Support",
      description:
        "Ongoing support and maintenance to ensure your digital solutions continue to perform at their best.",
      //   icon: <Headphones className="h-8 w-8 text-teal-400" />,
      link: "abc",
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            What We Do Best
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to help your
            business thrive in the digital world.
          </p>
        </div>

        <HoverEffect items={services} />
      </div>
    </section>
  );
}
