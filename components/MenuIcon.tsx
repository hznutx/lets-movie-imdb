"use client"
import { useState } from "react";

export const MenuIcon = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuIconClick = () => {
      setOpenMenu((prev) => !prev);
    };

  return (
    <div className="relative">
      <div className="text-white self-center absolute right-2 top-0 text-4xl z-50 cursor-pointer" onClick={handleMenuIconClick}>
        #
      </div>
      {openMenu && (
        <div className="fixed inset-0 overflow-hidden top-0 bg-slate-900 items-center z-100"></div>
      )}
    </div>
  );
}