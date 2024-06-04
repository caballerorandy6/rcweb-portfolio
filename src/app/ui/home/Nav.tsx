"use client";

import Link from "next/link";
import Image from "next/image";
import TooltipShadcn from "../shadcn-components/TooltipShadcn";
import ExperienceIcon from "@/app/ui/home/NavIcons/ExperienceIcon";
import ProjectsIcon from "@/app/ui/home/NavIcons/ProjectsIcon";
import AboutIcon from "@/app/ui/home/NavIcons/AboutIcon";
import ContactLinks from "./ContactLinks";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  console.log(pathname);

  const links = [
    {
      name: "Experience",
      hash: "/#experience",
      id: "experience",
      icon: <ExperienceIcon />,
    },
    {
      name: "Projects",
      hash: "/#projects",
      id: "projects",
      icon: <ProjectsIcon />,
    },
    { name: "About", hash: "#about", id: "about", icon: <AboutIcon /> },
  ];

  return (
    <nav className="flex justify-around items-center">
      <Link href="home">
        <Image
          src="/logo.webp"
          alt="RC WEB Logo"
          width={100}
          height={100}
          priority
          className="cursor-pointer object-contain w-24 h-auto"
        />
      </Link>

      <ul className="flex justify-center items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.hash}
            className={`text-gurkha/60 hover:text-gold transition-colors font-semibold font-roboto ${
              pathname === link.hash ? "text-gold" : ""
            }`}
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        ))}
      </ul>
      <ContactLinks />
    </nav>
  );
}
