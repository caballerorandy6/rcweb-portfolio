import Link from "next/link";
import { yearsOfExperience } from "@/app/lib/utils";
import { Badge } from "@/components/ui/badge";
import ContactLinks from "./ContactLinks";
import Heading from "@/app/ui/rcweb-components/Heading";

export default function Hero() {
  return (
    <div
      id="home"
      className="w-full lg:place-self-start sm:ml-28 lg:ml-20 mt-36"
    >
      <div className="sm:flex items-center justify-start gap-2">
        <Heading>Randy Caballero</Heading>
        <Link
          href="https://www.linkedin.com/in/caballerorandy/"
          target="_blank"
          className="hidden sm:block"
        >
          <Badge variant="hero">Open to work</Badge>
        </Link>
      </div>

      <p className="text-white/70 font-roboto font-semibold text-lg sm:text-xl text-center sm:text-start">
        Software Engineer with{" "}
        <span className="text-gold">+{yearsOfExperience(2022)} years</span> of
        experience specialized in{" "}
        <span className="text-gold">web development.</span>
      </p>
      <p className="text-white/80 font-roboto font-semibold text-lg sm:text-xl text-center sm:text-start">
        Currently working as a <span className="text-gold">freelancer</span>.
      </p>
      <ContactLinks />
    </div>
  );
}
