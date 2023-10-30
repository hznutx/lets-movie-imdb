import { icon } from "@/constants/images";
import { BRAND, COPYRIGHT } from "@/constants/main";
import Image from "next/image";
import { MenuIcon } from "./MenuIcon";

const Header = () => {
  return (
    <header className="fixed z-10 top-0 text-xs text-white items-center w-full bg-black">
      <div className="flex container p-3 mx-auto justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src={icon.logo}
            alt="logo"
            height={40}
            width={40}
          />
          <span className="text-xl font-bold text-white">{BRAND}</span>
        </div>
        <MenuIcon/>
      </div>
    </header>
  );
};
export default Header;
