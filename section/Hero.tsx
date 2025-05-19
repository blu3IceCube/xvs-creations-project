import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/assets/Hero Image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 -translate-y-6 text-white z-10">
        <Link href="#" className="border px-4 py-2 font-light">
          Test Drive
        </Link>
      </div>
    </div>
  );
};

export default Hero;
