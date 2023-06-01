import React from "react";
import Logo from "../atoms/logo";
import Navbar from "../molecules/navbar";
import { NAVBARLIST } from "@/utils/constant";
import Auth from "../molecules/auth";
import Box from "../atoms/box";

const Header = () => {
  return (
      <div className="flex justify-between border-solid border border-stroke sm:border-none  gap-2 py-4 sticky top-0 left-0 w-full items-center z-[2] bg-white bg-opacity-95 px-5 md:px-10 lg:px-[120px]">
        <Logo src="/logo.png" />
        <Navbar lists={NAVBARLIST} />
        <Auth />
      </div>
  );
};

export default Header;
