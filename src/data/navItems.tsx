import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  UsersIcon,
  MailIcon,
} from "lucide-react";

export const navItems = [
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
