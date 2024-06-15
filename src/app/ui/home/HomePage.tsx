import Image from "next/image";
import Nav from "@/app/ui/home/Nav";
import Hero from "@/app/ui/home/Hero";
import Container from "@/app/ui/container/Container";

export default function HomePage() {
  return (
    <section id="home" className="relative overflow-y-scroll  w-full h-full">
      <Nav />
      <Hero />
      <Container />
    </section>
  );
}
