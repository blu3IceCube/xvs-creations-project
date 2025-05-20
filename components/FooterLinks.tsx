import Link from "next/link";

const FooterLinks = ({
  links,
  txtSize,
  fontWeight,
  gapX,
  gapY,
}: {
  links: string[];
  txtSize?: string;
  fontWeight?: string;
  gapX?: string;
  gapY?: string;
}) => {
  return (
    <div
      className="grid grid-cols-2"
      style={{
        rowGap: gapY,
        columnGap: gapX,
      }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          href="#"
          style={{
            fontSize: txtSize,
            fontWeight: fontWeight,
          }}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
