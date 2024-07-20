import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import LinkedinIcon from "@/app/ui/Icons/LinkedinIcon";
import GitHubIcon from "@/app/ui/Icons/GitHubIcon";
import TwitterIcon from "@/app/ui/Icons/TwitterIcon";
import TooltipShadcn from "@/app/ui/shadcn-components/TooltipShadcn";

const socialLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/caballerorandy",
    icon: <LinkedinIcon />,
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/caballerorandy6",
    icon: <GitHubIcon />,
  },
  {
    id: "twitter",
    name: "Twitter",
    href: "https://x.com/caballerorandy6",
    icon: <TwitterIcon />,
  },
];

export default function SocialLinks() {
  return (
    <>
      <Badge className="text-gold font-concertOne text-xl border-none mt-8">
        Follow Me
      </Badge>
      <div className="flex items-center gap-4 mt-4">
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            className="text-gold font-semibold"
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        ))}
      </div>
    </>
  );
}
