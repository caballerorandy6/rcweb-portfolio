import Image from "next/image";
import Hero from "@/app/ui/home/Hero";
import Experience from "@/app/ui/experience/Experience";
import Projects from "@/app/ui/projects/Projects";
import About from "@/app/ui/about/About";
import Header from "@/app/ui/home/Header";

export default function Container() {
  return (
    <section
      id="container"
      className="absolute w-full h-full min-h-screen mx-auto"
    >
      <Image
        src="/background.webp"
        alt="background image"
        width={500}
        height={500}
        quality={100}
        priority
        className="fixed w-full h-full object-cover top-0 left-0 -z-10 mix-blend-overlay"
      />
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        <div className="w-10/12 md:w-9/12 lg:w-7/12 lg:place-self-start lg:ml-20 mt-10 grid grid-col-3 gap-2">
          <Experience />
          <Projects />
          <About />
        </div>
      </div>
    </section>
  );
}
