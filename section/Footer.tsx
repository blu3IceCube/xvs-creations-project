import EmailInput from "@/components/EmailInput";
import FooterLinks from "@/components/FooterLinks";

const LeftLink = [
  "Air X",
  "Fleet",
  "Lexo Z",
  "Company",
  "Gravity 9",
  "Stories",
];
const RightLink = [
  "Purchasing",
  "Spaces",
  "Charging",
  "Investors",
  "Insurance",
  "Career",
  "Service",
  "Contact Us",
];

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] text-white pb-8">
      <div className="h-[500px] flex items-center">
        <div className="h-4/5 w-4/5 mx-auto flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <header className="text-3xl font-light">
              Subscribe to our newsletter
            </header>
            <EmailInput />
          </div>
          <div className="flex justify-between items-start">
            <FooterLinks
              links={LeftLink}
              txtSize="20px"
              gapY="40px"
              gapX="200px"
            />
            <FooterLinks
              links={RightLink}
              txtSize="14px"
              fontWeight="300"
              gapY="30px"
              gapX="150px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
