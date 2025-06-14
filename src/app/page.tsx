import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { navItems } from "@/data/navItems";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/homePage/hero"));
const About = dynamic(() => import("@/components/homePage/about"));
const Services = dynamic(() => import("@/components/homePage/services"));
const Portfolio = dynamic(() => import("@/components/homePage/portfolio"));
const Team = dynamic(() => import("@/components/homePage/team"));
const Contact = dynamic(() => import("@/components/homePage/contact"));
const Footer = dynamic(() => import("@/components/homePage/footer"));

export default function Page() {
  return (
    <main className="relative bg-background">
      <FloatingNav navItems={navItems} />
      <Hero />
      <TracingBeam className="px-6 mb-20">
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </TracingBeam>
      <Footer />
    </main>
  );
}
