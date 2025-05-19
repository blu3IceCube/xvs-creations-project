import Navbar from "@/components/Navbar";
import Features1 from "@/section/Features1";
import Features2 from "@/section/Features2";
import Features3 from "@/section/Features3";
import Hero from "@/section/Hero";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Features1 />
      <Features2 />
      <Features3 />
    </main>
  );
}
