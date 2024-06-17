import Link from "next/link";
import React from "react";
import "../../../public/css/style.css";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full px-4 py-3">
        <Link className="text-lg font-bold" href={"/"}>
          Movies-Flex
        </Link>
        <div className="flex items-center justify-center gap-5">
          <Link className="p-2 nav-link" href={"/"}>
            Home
          </Link>
          <Link className="p-2 nav-link" href={"/about"}>
            About
          </Link>
          <Link className="p-2 nav-link" href={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
