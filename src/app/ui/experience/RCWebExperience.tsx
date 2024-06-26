import Image from "next/image";
import DialogShadcn from "../shadcn-components/DialogShadcn";
import { useDialogState } from "@/store/dialogStore";

const responsabilitiesRCWEB: string[] = [
  "Meeting with clients to discuss project requirements and objectives.",
  "Designing and developing websites with a focus on user experience and functionality.",
  "Creating responsive layouts that work well across different devices and screen sizes.",
  "Writing well-structured, clean, and efficient code using relevant programming languages and frameworks (e.g., HTML, CSS, JavaScript, React, etc.).",
  "Integrating third-party APIs, plugins, and services to enhance website features.",
  "Testing and debugging websites to identify and fix issues or errors.",
  "Optimizing websites for speed, performance, and search engine visibility.",
  "Ensuring websites comply with web standards, accessibility guidelines, and security protocols.",
  "Providing ongoing website maintenance and support to clients.",
  "Managing project timelines, budgets, and client communications.",
];

export default function RCWEBExperience() {
  const { isOpenDialogRCWeb, setIsOpenDialogRCWEB } = useDialogState();

  return (
    <div className="flex flex-col md:flex-row lg:flex-col lg:text-center justify-center items-center">
      <Image
        src="/logo.webp"
        alt="RCWEB-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="object-contain h-auto w-auto"
      />
      <div className="flex flex-col text-center">
        <p className="text-white/80 font-roboto text-md font-semibold">
          Freelancer Web Developer
        </p>
        <p className="text-white/80 text-sm">2022 - Present</p>
        <DialogShadcn
          title="RC WEB Responsibilities"
          experienceName="RCWEB"
          isOpenDialog={isOpenDialogRCWeb}
          setIsOpenDialog={setIsOpenDialogRCWEB}
        >
          {responsabilitiesRCWEB.map((item, index) => (
            <li key={index}> • {item}</li>
          ))}
        </DialogShadcn>
      </div>
    </div>
  );
}
