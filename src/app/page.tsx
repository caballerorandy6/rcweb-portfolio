import Image from "next/image";
import HomePage from "@/app/ui/home/HomePage";

export default function Home() {
  return (
    <main className="relative h-screen w-full img-effect">
      <HomePage />
      <Image
        src="/background.webp"
        alt="background image"
        width={500}
        height={500}
        quality={100}
        priority
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 mix-blend-overlay"
      />
    </main>
  );
}
