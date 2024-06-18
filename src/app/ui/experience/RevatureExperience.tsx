import Image from "next/image";
import DialogShadcn from "../shadcn-components/DialogShadcn";
import { useDialogState } from "@/store/dialogStore";

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
  const { isOpenDialogRevature, setIsOpenDialogRevature } = useDialogState();
  return (
    <div className="flex flex-col md:flex-row lg:flex-col lg:text-center justify-center items-center">
      <Image
        src="/revature-logo.webp"
        alt="Revature-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="flex flex-col text-center lg:text-start"
      />
      <div className="flex flex-col text-center lg:text-start">
        <p className="text-white/80 font-roboto text-md font-semibold">
          Software Engineer
        </p>
        <p className="text-white/80 text-sm">2022</p>
        <DialogShadcn
          title="Revature Responsibilities"
          experienceName="Revature"
          isOpenDialog={isOpenDialogRevature}
          setIsOpenDialog={setIsOpenDialogRevature}
        >
          {responsabilitiesRevature.map((item, index) => (
            <li key={index}> • {item}</li>
          ))}
        </DialogShadcn>
      </div>
    </div>
  );
}
