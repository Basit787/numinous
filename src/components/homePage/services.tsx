"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { services } from "@/data/service";

const Services = () => {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            {services.title}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            {services.description}
          </p>
        </div>
        <HoverEffect items={services.cards} />
      </div>
    </section>
  );
};

export default Services;
