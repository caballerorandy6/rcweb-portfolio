import Image from "next/image";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import About from "./About";

export default function Container() {
  return (
    <section
      id="container"
      className="absolute w-full h-full min-h-screen mx-auto antialiased"
    >
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center gap-4 mt-10 self-start w-10/12 md:w-9/12 lg:w-5/12 place-self-start md:ml-20">
          <Experience />
          <Projects />
          <About />
        </div>
      </div>
    </section>
  );
}
