"use client";

import Link from "next/link";
import EmailIcon from "@/app/ui/Icons/EmailIcon";
import PhoneIcon from "@/app/ui/Icons/PhoneIcon";
import DownloadIcon from "@/app/ui/Icons/DownloadIcon";
import TooltipShadcn from "../shadcn-components/TooltipShadcn";

const links = [
  {
    id: "phone",
    icon: <PhoneIcon />,
    name: "Call",
    href: "tel:+18325465983",
  },
  {
    id: "email",
    icon: <EmailIcon />,
    name: "Send Email",
    href: "mailto:caballerorandy7@gmail.com",
  },
  {
    id: "resume",
    icon: <DownloadIcon />,
    name: "Download Resume",
    href: "/resume.pdf",
    download: "resume.pdf",
  },
];

export default function ContactLinks() {
  return (
    <ul className="flex justify-center sm:justify-start items-center gap-8 mt-4">
      {links.map((link) => (
        <li
          key={link.id}
          className="transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <Link
            href={link.href}
            className="text-gurkha hover:text-gold transition-colors font-roboto font-semibold"
          >
            <TooltipShadcn icon={link.icon}>{link.name}</TooltipShadcn>
          </Link>
        </li>
      ))}
    </ul>
  );
}
