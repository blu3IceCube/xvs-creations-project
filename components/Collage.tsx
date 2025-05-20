import Image, { StaticImageData } from "next/image";

const Collage = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {images &&
        images.map((img, index) => (
          <div key={index}>
            <Image src={img} alt="image" />
          </div>
        ))}
    </div>
  );
};

export default Collage;
