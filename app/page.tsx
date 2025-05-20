import Navbar from "@/components/Navbar";
import Features1 from "@/section/Features1";
import Features2 from "@/section/Features2";
import Features3 from "@/section/Features3";
import Hero from "@/section/Hero";
import PictureBoard from "@/section/PictureBoard";
import Specifications from "@/section/Specifications";
import SpecNumber from "@/section/SpecNumber";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Features1 />
      <Features2 />
      <Features3 />
      <Specifications />
      <SpecNumber />
      <PictureBoard />
    </main>
  );
}
