import Image from "next/image";
import React from "react";
import LogoImg from "../../../public/logo.jpg";
import NavLinks from "./NavLinks/NavLinks";
import MenuLinks from "./MenuLinks/MenuLinks";
import ThemeButton from "./ThemeButton/ThemeButton";

const Header = () => {
  return (
    <header className=" flex justify-between items-center w-full z-50 bg-accent-light dark:bg-accent-dark bg-opacity-20 max-w-[1400px] mx-auto px-4">
      {/* Logo */}
      <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] ">
        <Image src={LogoImg} alt="af-logo" className="w-full h-full" />
      </div>
      {/* links */}
      <nav className=" hidden md:block">
        <NavLinks />
      </nav>

      <div>
        <ThemeButton />
      </div>

      {/* responsive menu */}
      <div className="hidden max-md:block ">
        <MenuLinks />
      </div>
    </header>
  );
};

export default Header;
