import Link from "next/link";
import { yearsOfExperience } from "@/app/lib/utils";
import { Badge } from "@/components/ui/badge";
import ContactLinks from "@/app/ui/home/ContactLinks";

export default function Hero() {
  return (
    <div
      id="home"
      className="w-8/12 md:w-9/12 lg:w-7/12 lg:place-self-start lg:ml-20 pt-32"
    >
      <div className="sm:flex items-center justify-start gap-2">
        <h1 className="text-gold text-center sm:text-start text-4xl font-concertOne mb-2">
          Randy Caballero
        </h1>
        <Link
          href="https://www.linkedin.com/in/caballerorandy/"
          target="_blank"
          className="hidden sm:block"
        >
          <Badge variant="gold">Open to work</Badge>
        </Link>
      </div>

      <p className="text-white/80 font-roboto font-semibold md:text-lg text-center sm:text-start">
        Software Engineer with{" "}
        <span className="text-gold">+{yearsOfExperience(2022)} years</span> of
        experience specialized in{" "}
        <span className="text-gold">web development.</span>
      </p>
      <p className="text-white/80 font-roboto font-semibold mdtext-lg text-center sm:text-start">
        Currently working as a <span className="text-gold">freelancer</span>.
      </p>
      <ContactLinks />
    </div>
  );
}
