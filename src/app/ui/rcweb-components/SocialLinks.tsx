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
    <ul className="flex items-center gap-4 mt-4">
      {socialLinks.map((link) => (
        <li
          className="transition-all duration-300 ease-in-out transform hover:scale-110"
          key={link.id}
        >
          <Link
            href={link.href}
            target="_blank"
            className="text-gold font-semibold"
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        </li>
      ))}
    </ul>
  );
}
