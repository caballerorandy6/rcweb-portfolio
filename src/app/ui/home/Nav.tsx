"use client";

import Link from "next/link";
import Image from "next/image";
//import TooltipShadcn from "../shadcn-components/TooltipShadcn";
import ExperienceIcon from "@/app/ui/Icons/ExperienceIcon";
import ProjectsIcon from "@/app/ui/Icons/ProjectsIcon";
import AboutIcon from "@/app/ui/Icons/AboutIcon";
import HomeIcon from "@/app/ui/Icons/HomeIcon";
import clsx from "clsx";
//import { useActiveSection } from "@/store/activeSectionStore";

export default function Nav() {
  //const { activeSection, setActiveSection } = useActiveSection();

  // const links = [
  //   {
  //     name: "Home",
  //     hash: "#home",
  //     id: "home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     name: "Experience",
  //     hash: "#experience",
  //     id: "experience",
  //     icon: <ExperienceIcon />,
  //   },
  //   {
  //     name: "Projects",
  //     hash: "#projects",
  //     id: "projects",
  //     icon: <ProjectsIcon />,
  //   },
  //   {
  //     name: "About",
  //     hash: "#about",
  //     id: "about",
  //     icon: <AboutIcon />,
  //   },
  // ];

  return (
    <nav className="w-full flex items-center">
      <Link href="#" className="w-full">
        <Image
          src="/logo.webp"
          alt="RC WEB Logo"
          width={500}
          height={500}
          quality={100}
          priority
          className="fixed cursor-pointer object-contain w-48 h-auto mx-auto"
        />
      </Link>

      {/* Susrituir por humberger menu */}
      {/* <ul className="flex justify-center items-center gap-8 sm:hidden">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.hash}
            className={clsx(
              "transform transition-transform duration-500 hover:scale-125 text-gurkha/80 hover:text-gold/90",
              { "text-gold/90": activeSection === link.name }
            )}
            onClick={() => setActiveSection(link.name)}
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        ))}
      </ul> */}
    </nav>
  );
}
