import Hero from "@/app/ui/rcweb-components/Hero";
import Experience from "@/app/ui/rcweb-components/Experience";
import Projects from "@/app/ui/rcweb-components/Projects";
import About from "@/app/ui/rcweb-components/About";

export default function Container() {
  return (
    <section
      id="container"
      className="absolute w-full h-full min-h-screen overflow-y-scroll mx-auto overflow-x-hidden"
    >
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 self-start w-10/12 md:w-9/12 lg:w-5/12 place-self-start md:ml-14 lg:ml-20 mx-auto">
          <Experience />
          <Projects />
          <About />
        </div>
      </div>
    </section>
  );
}
