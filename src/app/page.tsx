import { About } from "@/components/homePage/about";
import { Contact } from "@/components/homePage/contact";
import { Footer } from "@/components/homePage/footer";
import { Hero } from "@/components/homePage/hero";
import { Portfolio } from "@/components/homePage/portfolio";
import { Services } from "@/components/homePage/services";
import { Team } from "@/components/homePage/team";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  UsersIcon,
  MailIcon,
} from "lucide-react";

const navItems = [
  { name: "Home", link: "#home", icon: <HomeIcon className="h-4 w-4" /> },
  { name: "About", link: "#about", icon: <UserIcon className="h-4 w-4" /> },
  {
    name: "Services",
    link: "#services",
    icon: <BriefcaseIcon className="h-4 w-4" />,
  },
  { name: "Team", link: "#team", icon: <UsersIcon className="h-4 w-4" /> },
  { name: "Contact", link: "#contact", icon: <MailIcon className="h-4 w-4" /> },
];

export default function Page() {
  return (
    <main className="relative bg-background">
      <FloatingNav navItems={navItems} />
      <Hero />
      <TracingBeam className="px-6">
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
