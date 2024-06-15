import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ExperienceIcon from "@/app/ui/Icons/ExperienceIcon";
import CVIcon from "@/app/ui/Icons/CVIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DialogShadcn from "../shadcn-components/DialogShadcn";

const responsabilitiesRevature: string[] = [
  "Develop a responsive website for the company using the MERN stack.",
  "The website must display Google reviews of the business provided by customers.",
  "The website must be able to display all the detailed information of the company and must offer different ways to contact customers.",
  "The deployment of the web page must be in AWS using services such as S3, Route 53, CloudFront and Certificate Manager.",
  "The website must be responsive and have a good user experience.",
  "Other technologies used in this project were TailwindCSS, HTML and some NPM packages.",
  "I set up hosting for the website and completed the go-live process by uploading the page to the hosting account.",
  "Meeting with clients to discuss project requirements and objectives.",
  "Designing and developing websites with a focus on user experience and functionality.",
];

export default function RevatureExperience() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/revature-logo.webp"
        alt="Revature-logo"
        width={120}
        height={80}
        quality={100}
        priority
        className="rounded-md object-contain h-auto w-auto"
      />
      <div>
        <p className="text-white/60 font-roboto text-md font-semibold">
          Software Engineer: 2022
        </p>
        <p className="text-white/60 text-sm">Software Engineer</p>
        <DialogShadcn
          title="Revature Responsibilities"
          experienceName="Revature"
        >
          {responsabilitiesRevature.map((item, index) => (
            <li key={index}> • {item}</li>
          ))}
        </DialogShadcn>
      </div>
    </div>
  );
}
