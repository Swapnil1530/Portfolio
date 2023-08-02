"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const linkData = [
  {
    lable: "Home",
    path: "/",
    targetSegment: null,
  },
  {
    lable: "Resume",
    path: "/Resume",
    targetSegment: "Resume",
  },
  {
    lable: "Projects",
    path: "/Project",
    targetSegment: "Project",
  },
  {
    lable: "Blog",
    path: "/Blog",
    targetSegment: "Blog",
  },
  {
    lable: "About",
    path: "/About",
    targetSegment: "About",
  },
  {
    lable: "Contact",
    path: "/Contact",
    targetSegment: "Contact",
  },
];

const Header = () => {
  const activeSegment = useSelectedLayoutSegment();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="p-4 flex  bg-[#181818] fixed top-0 z-40 w-full transform  transition duration-500 false lg:hidden">
        <div className="flex-row ">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="menu"
            className="flex lg:hidden flex-col w-8 h-8 space-y-[6px] justify-center"
          >
            {!isMenuOpen ? (
              <>
              <span className="w-full h-[2px] bg-[#f72b1c] transform origin-top-right transition duration-500"></span>
              <span className="w-full h-[2px] bg-white -ml-2 transform transition duration-500"></span>
              <span className="w-full h-[2px] bg-[#f72b1c] transform origin-bottom-right transition duration-500"></span>
              </>
            ):(
              <>
              <span className="w-full h-[2px] bg-[#f72b1c] transform origin-center rotate-45 transition duration-500"></span>
              <span className="w-full h-[2px] bg-white transform origin-center -rotate-45 transition duration-500"></span>
              </>
            )}
            
          </button>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 mt-4 items-center justify-center w-full">
            {linkData.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  activeSegment === link.targetSegment
                    ? "text-[#f72b1c] text-center"
                    : "text-sm text-center transition block py-3 lg:py-0 rounded-lg lg:bg-transparent text-white tracking-widest font-bold hover:text-[#f72b1c]"
                }`}
              >
                {link.lable}
              </Link>
            ))}
          </ul>
        )}
      </nav>

      <nav className="hidden lg:flex p-4 items-center justify-center bg-[#181818] fixed top-0 z-40 w-full max-w-[1905px] transform right-1/2 translate-x-1/2 transition duration-500 false">
        <ul className="flex gap-16">
          {linkData.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                activeSegment === link.targetSegment
                  ? "text-[#f72b1c]"
                  : "text-sm text-center transition block py-3 lg:py-0 rounded-lg lg:bg-transparent text-white tracking-widest font-bold hover:text-[#f72b1c]"
              }`}
            >
              {link.lable}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
