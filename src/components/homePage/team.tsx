"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/data/team";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="py-24 bg-[var(--black)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[var(--neutral-50)] to-[var(--neutral-400)] mb-8">
            Meet Our Team
          </h2>
          <p className="text-xl text-[var(--neutral-400)] max-w-3xl mx-auto mb-12">
            The talented individuals who bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <AnimatedTooltip items={people} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {people.map((member, index) => (
            <div key={index} className="text-center group h-full">
              <div className="h-full flex flex-col justify-between bg-[var(--neutral-900)] border border-[var(--neutral-800)] rounded-2xl p-4 group-hover:border-[var(--teal-600)] transition-colors duration-300">
                <div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={member.image}
                      alt={member.image}
                      height={1000}
                      width={1000}
                      className="h-24 w-24"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[var(--teal-400)] font-medium mb-4 ">
                    {member.designation}
                  </div>
                </div>
                <p className="text-[var(--neutral-400)] text-sm leading-relaxed text-justify mt-4">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
