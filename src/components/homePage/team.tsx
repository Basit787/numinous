"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export function Team() {
  const people = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "Creative Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      designation: "Lead Developer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "UX Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Project Manager",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
            Meet Our Team
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
            The talented individuals who bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <AnimatedTooltip items={people} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {people.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 group-hover:border-teal-600 transition-colors duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-teal-400 font-medium mb-4">
                  {member.designation}
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Passionate about creating exceptional digital experiences
                  through innovative design and development.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
