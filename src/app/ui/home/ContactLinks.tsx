"use client";

import Link from "next/link";
import EmailIcon from "@/app/ui/home/SocialIcons/EmailIcon";
import PhoneIcon from "@/app/ui/home/SocialIcons/PhoneIcon";
import DownloadIcon from "@/app/ui/home/SocialIcons/DownloadIcon";
import TooltipShadcn from "../shadcn-components/TooltipShadcn";
import { usePathname } from "next/navigation";

const links = [
  {
    id: "phone",
    icon: <PhoneIcon />,
    name: "Call me",
    href: "tel:+18325465983",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    name: "Send me an email",
    href: "mailto:caballerorandy7@gmail.com",
  },
  {
    id: "resume",
    icon: <DownloadIcon />,
    name: "Download my Resume",
    href: "/resume.pdf",
    download: "resume.pdf",
  },
];

export default function ContactLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex justify-center items-center gap-8">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className="flex items-center gap-2 text-gurkha/60 hover:text-gold transition-colors font-roboto font-semibold"
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        </li>
      ))}
    </ul>
  );
}
