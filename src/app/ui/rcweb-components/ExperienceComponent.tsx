import Image from "next/image";
import DialogExperienceDetail from "@/app/ui/shadcn-components/DialogExperienceDetail";
import { useDialogState } from "@/store/dialogStore";

interface Experience {
  title: string;
  years: string;
  experienceName: string;
  responsabilities: string[];
  image: JSX.Element;
}

const experiences: Experience[] = [
  {
    title: "Freelancer Web Developer",
    years: "2022 - Present",
    experienceName: "RCWEB",
    responsabilities: [
      "Meeting with clients to discuss project requirements and objectives.",
      "Designing and developing websites with a focus on user experience and functionality.",
      "Creating responsive layouts that work well across different devices and screen sizes.",
      "Writing well-structured, clean, and efficient code using relevant programming languages and frameworks.",
      "Integrating third-party APIs, plugins, and services to enhance website features.",
      "Testing and debugging websites to identify and fix issues or errors.",
      "Optimizing websites for speed, performance, and search engine visibility.",
      "Providing ongoing website maintenance and support to clients.",
      "Managing project timelines, budgets, and client communications.",
    ],
    image: (
      <Image
        src="/logo.webp"
        alt="RCWEB-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="object-contain h-auto w-auto"
      />
    ),
  },
  {
    title: "Full Stack Developer",
    years: "2022",
    experienceName: "Revature",
    responsabilities: [
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
    ],
    image: (
      <Image
        src="/revature-logo.webp"
        alt="Revature-logo"
        width={120}
        height={120}
        quality={100}
        priority
        className="object-contain h-auto w-auto"
      />
    ),
  },
];

export default function ExperienceComponent() {
  const {
    isOpenDialogRCWeb,
    setIsOpenDialogRCWEB,
    isOpenDialogRevature,
    setIsOpenDialogRevature,
  } = useDialogState();

  return (
    <>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col lg:text-center justify-center items-center transition-colors shadow-2xl bg-gradient-to-tr from-gold/10 to-dune/100 rounded-lg"
        >
          {experience.image}
          <div className="flex flex-col text-center">
            <p className="text-white/80 font-roboto">{experience.title}</p>
            <p className="text-white/80 text-sm">{experience.years}</p>
            <DialogExperienceDetail
              title={`${experience.experienceName} Responsibilities`}
              experienceName={experience.experienceName}
              isOpenDialog={
                experience.experienceName === "RCWEB"
                  ? isOpenDialogRCWeb
                  : isOpenDialogRevature
              }
              setIsOpenDialog={
                experience.experienceName === "RCWEB"
                  ? setIsOpenDialogRCWEB
                  : setIsOpenDialogRevature
              }
            >
              {experience.responsabilities.map((item, index) => (
                <li key={index} className="font-roboto">
                  • {item}
                </li>
              ))}
            </DialogExperienceDetail>
          </div>
        </div>
      ))}
    </>
  );
}
