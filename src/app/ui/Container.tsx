import Image from "next/image";
import Hero from "../home/Hero";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import About from "../about/About";

export default function Container() {
  return (
    <section
      id="container"
      className="absolute w-full h-full min-h-screen mx-auto antialiased"
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
