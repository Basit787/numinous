"use client";
import { people } from "@/data/team";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Team = () => {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] mb-8">
            Meet Our Team
          </h2>
          <p className="text-xl text-[var(--neutral-400)] max-w-3xl mx-auto mb-12">
            The talented individuals who bring your ideas to life.
          </p>
        </div>

        <AnimatedTestimonials testimonials={people} />
      </div>
    </section>
  );
};

export default Team;
