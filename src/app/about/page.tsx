"use client";

import Image from "next/image";
import Link from "next/link";
import UserCheckIcon from "@/app/ui/Icons/UserCheckIcon";
import SocialLinks from "@/app/ui/rcweb-components/SocialLinks";
import BackIcon from "../ui/Icons/BackIcon";
import TooltipShadcn from "../ui/shadcn-components/TooltipShadcn";
import clsx from "clsx";

export default function About() {
  return (
    <div className="w-full mx-auto mt-40 flex justify-center gap-20 min-h-screen ml-20">
      <div className="w-6/12">
        <div className="flex justify-start items-center gap-4">
          <UserCheckIcon />
          <h1 className="text-gold text-center sm:text-start text-4xl font-concertOne">
            About Me
          </h1>
        </div>
        <p className="text-white/70 mb-2 font-roboto font-semibold text-lg text-center sm:text-start pt-2">
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
          <span className="text-gold">static</span> web applications. I
          specialize in <span> troubleshooting and code optimization </span>,
          and I enjoy establishing excellent communication with my clients.
        </p>
        <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
          I have the necessary skills to develop
          <span className="text-gold"> complex applications </span> for
          different use cases with excellent performance and visualization on
          any device. My experience has allowed me to meet the requirements of
          my clients.
        </p>
        <Link href="/" className="text-gold font-semibold">
          <TooltipShadcn icon={<BackIcon />}>{"Back To Home"}</TooltipShadcn>
        </Link>
      </div>
      <div className="w-6/12">
        {/* <Image
          src="/caballerorandyabout.webp"
          alt="Randy Caballero"
          width={200}
          height={200}
          quality={100}
          priority
          className="w-5/12 h-auto object-contain rounded-2xl image-gradient -z-10"
        /> */}
        <SocialLinks />
      </div>
    </div>
  );
}
