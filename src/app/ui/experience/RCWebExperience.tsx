import Image from "next/image";
import DialogShadcn from "../shadcn-components/DialogShadcn";

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
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.webp"
        alt="RCWEB-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="object-contain h-auto w-auto"
      />
      <div>
        <p className="text-white/60 font-roboto text-md font-semibold">
          Freelancer: 2022 - Present
        </p>
        <p className="text-white/60 text-sm">Freelancer Web Developer</p>
        <DialogShadcn title="RC WEB Responsibilities" experienceName="RCWEB">
          {responsabilitiesRCWEB.map((item, index) => (
            <li key={index}> • {item}</li>
          ))}
        </DialogShadcn>
      </div>
    </div>
  );
}
