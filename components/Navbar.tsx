import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Primary Logo.png";

interface NavLinkItem {
  href: string;
  label: string;
}

const leftLinks: NavLinkItem[] = [
  { href: "#", label: "Air X" },
  { href: "#", label: "Lexo Z" },
  { href: "#", label: "Gravity 9" },
];

const rightLinks: NavLinkItem[] = [
  { href: "#", label: "Shop" },
  { href: "#", label: "Account" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] fixed top-0 left-0 right-0 z-50 text-white border-b">
      <div className="mx-auto px-12">
        <div className="relative flex items-center justify-between gap-8 h-16">
          <div className="flex items-center space-x-5 justify-center ">
            {leftLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-base">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="">
              <Image className="" src={logo} quality={100} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-5 ">
            {rightLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-base">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
