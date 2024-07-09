import Image from "next/image";
import DialogExperienceDetail from "@/app/ui/shadcn-components/DialogExperienceDetail";
import { useDialogState } from "@/store/dialogStore";

const responsabilitiesRevature: string[] = [
  "Assisting senior developers in designing and building websites or web applications.",
  "Writing and maintaining code for website features and functionalities.",
  "Collaborating with the development team to troubleshoot and fix bugs or issues.",
  "Learning and applying best practices in web development to improve your coding skills.",
  "Assisting in the integration of third-party APIs and services.",
  "Participating in code reviews to ensure code quality and adherence to coding standards.",
  "Testing websites or web applications to identify and resolve compatibility issues across different devices and browsers.",
  "Supporting website updates and content changes as required.",
  "Staying up-to-date with the latest trends and technologies in web development.",
  "Assisting in maintaining documentation related to projects and codebases.",
];

export default function RevatureExperience() {
  const { isOpenDialogRevature, setIsOpenDialogRevature } = useDialogState();
  return (
    <div className="flex flex-col lg:text-center justify-center items-center transition-colors shadow-2xl bg-gradient-to-bl from-gold/10 to-dune/100 rounded-lg mt-4">
      <Image
        src="/revature-logo.webp"
        alt="Revature-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="object-contain h-auto w-auto"
      />
      <div className="flex flex-col text-center">
        <p className="text-white/80 font-roboto text-md font-semibold">
          Software Engineer
        </p>
        <p className="text-white/80 text-sm">2022</p>
        <DialogExperienceDetail
          title="Revature Responsibilities"
          experienceName="Revature"
          isOpenDialog={isOpenDialogRevature}
          setIsOpenDialog={setIsOpenDialogRevature}
        >
          {responsabilitiesRevature.map((item, index) => (
            <li key={index}> • {item}</li>
          ))}
        </DialogExperienceDetail>
      </div>
    </div>
  );
}
