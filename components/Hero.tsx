import { image } from "@/constants/images";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="top" className="flex w-full">
      <Image src={image.hero} width={1920} height={909} alt="hero" />
    </div>
  );
};
export default Hero;
