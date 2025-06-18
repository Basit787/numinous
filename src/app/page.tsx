import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { navItems } from "@/data/navItems";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

const Hero = dynamic(() => import("@/components/homePage/hero"));
const About = dynamic(() => import("@/components/homePage/about"));
const Services = dynamic(() => import("@/components/homePage/services"));
const Portfolio = dynamic(() => import("@/components/homePage/portfolio"));
const Team = dynamic(() => import("@/components/homePage/team"));
const Contact = dynamic(() => import("@/components/homePage/contact"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Page() {
  return (
    <section className="relative bg-background">
      <FloatingNav navItems={navItems} />
      <Hero />
      <TracingBeam className="px-6 mb-20 relative">
        <article className="space-y-40">
          <About />
          <Services />
          <Portfolio />
          <Team />
          <Contact />
        </article>
      </TracingBeam>
      <Footer />
      <BackgroundBeams />
      <Toaster />
    </section>
  );
}
