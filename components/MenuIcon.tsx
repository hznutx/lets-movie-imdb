"use client"
import { useState } from "react";

export const MenuIcon = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuIconClick = () => {
      setOpenMenu((prev) => !prev);
    };

  return (
    <div className="flex">
      <div className="text-white self-center text-4xl z-30 cursor-pointer" onClick={handleMenuIconClick}>
        #
      </div>
      {openMenu && (
        <div className="inset-0 overflow-hidden top-0 fixed bg-slate-900 items-center z-20"></div>
      )}
    </div>
  );
}