import { icon } from "@/constants/images";
import { BRAND } from "@/constants";
import { MenuIcon } from "./MenuIcon";
import { IconImg } from "./ImageSet";

const Header = () => {
  return (
    <header className="fixed z-30 top-0 text-xs text-white items-center w-full bg-black">
      <div className="flex m-3 justify-between">
        <div className="flex gap-3 items-center">
          <IconImg from={icon.logo} size={40} />
          <span className="text-xl font-bold text-white">{BRAND}</span>
        </div>
        <MenuIcon />
      </div>
    </header>
  );
};
export default Header;
