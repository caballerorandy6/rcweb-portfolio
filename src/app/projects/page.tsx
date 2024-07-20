import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import GitHubIcon from "@/app/ui/Icons/GitHubIcon";

const projectsImg = [
  {
    id: "modolithllc",
    projectImage: "/modolithLLC.webp",
    alt: "Modolith LLC",
    title: "Modolith LLC",
  },
  { id: "gsmac", projectImage: "/gsmac.webp", alt: "GSMAC", title: "GSMAC" },
  {
    id: "photographyportfolio",
    projectImage: "/photographerportfolio.webp",
    alt: "Photography Portfolio",
    title: "Photography Portfolio",
  },
  {
    id: "insurancequotes",
    projectImage: "/insurancequotes.webp",
    alt: "Insurance Quotes",
    title: "Insurance Quotes",
  },
  {
    id: "minilibrary",
    projectImage: "/minilibrary.webp",
    alt: "Mini Library",
    title: "Mini Library",
  },
  {
    id: "monthlyexpenses",
    projectImage: "/monthlyexpenses.webp",
    alt: "Monthly Expenses",
    title: "Monthly Expenses",
  },
  {
    id: "pitchfinder",
    projectImage: "/pitchfinder.webp",
    alt: "Pitch Finder",
    title: "Pitch Finder",
  },
  {
    id: "searchdrinks",
    projectImage: "/searchdrinks.webp",
    alt: "Search Drinks",
    title: "Search Drinks",
  },
  {
    id: "weatherapp",
    projectImage: "/weatherapp.webp",
    alt: "Weather App",
    title: "Weather App",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-gold/10 to-dune/100 p-20">
      <h1 className="text-gold text-center text-4xl font-concertOne mb-10 mt-20">
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {projectsImg.map((img) => (
          <Card key={img.id} className="border-2 border-gurkha/40 w-full">
            <CardContent>
              <Image
                key={img.id}
                src={img.projectImage as string}
                alt={img.alt as string}
                width={300}
                height={300}
                priority
                quality={100}
                className="rounded object-contain w-full my-2"
              />
              <CardDescription className="text-white/80 font-roboto">
                {img.title}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center items-center gap-4">
              <GitHubIcon />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
