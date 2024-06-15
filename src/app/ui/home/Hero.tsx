import Link from "next/link";
import { yearsOfExperience } from "@/app/lib/utils";
import { Badge } from "@/components/ui/badge";
import ContactLinks from "@/app/ui/home/ContactLinks";

export default function Hero() {
  return (
    <div id="home" className="pt-8 w-10/12 mx-auto">
      <div className="flex items-center  gap-4 mb-2">
        <h1 className="text-gurkha text-5xl font-concertOne">
          Randy Caballero
        </h1>
        <ContactLinks />
      </div>

      <p className="text-white/60 font-roboto text-lg">
        Software Engineer with{" "}
        <span className="text-gold">+{yearsOfExperience(2022)} years</span> of
        experience specialized in{" "}
        <span className="text-gold">web development.</span>
      </p>
      <p className="text-white/60 font-roboto text-lg">
        Currently working as a <span className="text-gold">freelancer</span>.
      </p>

      <Link href="https://www.linkedin.com/in/caballerorandy/" target="_blank">
        <Badge variant="gold" className="mt-4">
          Open to work
        </Badge>
      </Link>
    </div>
  );
}
