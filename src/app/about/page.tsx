import Image from "next/image";
import { Redirect } from "next";
import UserCheckIcon from "../ui/Icons/UserCheckIcon";
import SocialLinks from "./SocialLinks";

export default function AboutPage() {
  return (
    <div className="w-8/12 mx-auto mt-40 flex justify-center gap-20 h-screen">
      <div className="w-6/12">
        <div className="flex justify-start items-center gap-4">
          <UserCheckIcon />
          <h1 className="text-gold text-center sm:text-start text-4xl font-concertOne">
            About Me
          </h1>
        </div>
        <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
          My name is Randy Caballero, I am a
          <span className="text-gold"> Web Developer </span> who graduated from
          Ignacio Agramonte y Loynaz University in Camagüey, Cuba and, I also
          obtained a <span className="text-gold"> Master of Science </span>
          Master of Science degree from Nova Southeastern University in Fort
          Lauderdale,Florida. I am currently in the process of obtaining my
          <span className="text-gold"> Doctorate in Education </span>.
        </p>
        <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
          I have worked on different projects as a
          <span> freelance web developer </span>
          creating dynamic and static <span> web applications </span>. I
          specialize in <span> troubleshooting and code optimization </span>,
          and I enjoy establishing excellent communication with my clients.
        </p>
        <p className="text-white/70 mb-2 font-roboto font-semibold mdtext-lg text-center sm:text-start pt-2">
          I have the necessary skills to develop
          <span className="text-gold"> complex applications </span> for
          different
          <span className="text-gold"> use cases </span> with excellent
          performance and visualization on any device. My experience has allowed
          me to meet the <span className="text-gold"> requirements </span> of my
          clients.
        </p>
      </div>
      <div className="w-6/12">
        <Image
          src="/caballerorandyabout.webp"
          alt="Randy Caballero"
          width={200}
          height={200}
          quality={100}
          priority
          className="w-8/12 h-auto object-contain rounded-2xl image-gradient"
        />
        <SocialLinks />
      </div>
    </div>
  );
}
