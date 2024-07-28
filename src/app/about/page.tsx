"use client";

//import Image from "next/image";
import Link from "next/link";
import UserCheckIcon from "@/app/ui/Icons/UserCheckIcon";
import SocialLinks from "@/app/ui/rcweb-components/SocialLinks";
import BackIcon from "../ui/Icons/BackIcon";
import TooltipShadcn from "../ui/shadcn-components/TooltipShadcn";
import { Badge } from "@/components/ui/badge";
import Heading from "../ui/rcweb-components/Heading";

export default function About() {
  return (
    <div className="w-10/12 sm:w-6/12 mx-auto text-base sm:mx-20 mt-36 overflow-y-scroll">
      {/* <Image
        src="/caballerorandyabout.webp"
        alt="Randy Caballero"
        width={300}
        height={300}
        quality={100}
        priority
        className="h-auto object-contain image-gradient -z-10"
      /> */}
      <div className="flex justify-center sm:justify-start items-center gap-4 mb-2">
        <UserCheckIcon />
        <Heading>About Me</Heading>
      </div>
      <SocialLinks />

      <p className="text-white/70 mb-2 font-roboto font-semibold text-center sm:text-start mt-8">
        My name is Randy Caballero, I am a
        <span className="text-gold"> Web Developer </span> who graduated from
        Ignacio Agramonte y Loynaz University in Camagüey, Cuba and, I also
        obtained a <span className="text-gold"> Master of Science </span>
        from Nova Southeastern University in Fort Lauderdale,Florida. I am
        currently in the process of obtaining my
        <span className="text-gold"> Doctorate in Education </span>.
      </p>
      <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
        I have worked on different projects as a
        <span> freelance web developer, </span>
        creating <span className="text-gold"> dynamic </span> and{" "}
        <span className="text-gold">static</span> web applications. I specialize
        in <span> troubleshooting and code optimization </span>, and I enjoy
        establishing excellent communication with my clients.
      </p>
      <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
        I have the necessary skills to develop
        <span className="text-gold"> complex applications </span> for different
        use cases with excellent performance and visualization on any device. My
        experience has allowed me to meet the requirements of my clients.
      </p>

      <div className="flex justify-center items-center sm:justify-start mb-8">
        <Link href="/" className="text-gold font-semibold">
          <TooltipShadcn icon={<BackIcon />}>{"Back To Home"}</TooltipShadcn>
        </Link>
      </div>
    </div>
  );
}
