import Image from "next/image";
import { Project } from "@/app/ui/rcweb-components/ProjectComponent";
import { ProjectComponent } from "@/app/ui/rcweb-components/ProjectComponent";

const technologies: React.ReactNode[] = [
  <Image key="vite" src="/vite.webp" alt="Vite" width={60} height={60} />,
  <Image
    key="javascript"
    src="/javascript.webp"
    alt="Javascript"
    width={60}
    height={60}
  />,
  <Image key="react" src="/react.webp" alt="React" width={70} height={70} />,
  <Image
    key="tailwindcss"
    src="/tailwindcss.webp"
    alt="Tailwindcss"
    width={60}
    height={60}
  />,
  <Image
    key="typescript"
    src="/typescript.webp"
    alt="Typescript"
    width={60}
    height={60}
    className="rounded"
  />,
];

const realProjects: Project[] = [
  {
    name: "GSM AC",
    image: "/gsmac.webp",
    description:
      "GSM AC is a Single Page Application (SPA) that provides relevant information about the company to customers and gives the possibility to schedule personal or digital meetings with members of the company, which are useful for creating estimates and future services.",
    technologies: [],
    websiteLink: "https://gsmactx.com/",
  },
  {
    name: "Modolith LLC",
    image: "/modolithLLC.webp",
    description:
      "GSM AC is a SPA that provides relevant information about the company to customers. Through this website customers can contact the company's managers and get the information they need for future agreements.",
    technologies: [...technologies],
    websiteLink: "https://modolith.vercel.app",
  },
];

export default function RealProjects() {
  return (
    <div className="">
      <ul className="min-h-screen mt-36">
        {realProjects.map((project) => (
          <li key={project.name}>
            <ProjectComponent
              name={project.name}
              image={project.image}
              customer={project.customer}
              description={project.description}
              technologies={project.technologies}
              websiteLink={project.websiteLink}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
