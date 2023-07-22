"use client"
import React from 'react';
import Link from "next/link"
import {useSelectedLayoutSegment} from "next/navigation";

const linkData:any = [
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
        lable : 'Projects',
        path:"/Project",
        targetSegment: "Project"
    },
    {
        lable : 'Blog',
        path:"/Blog",
        targetSegment: "Blog"
    },
    {
        lable : 'About',
        path:"/About",
        targetSegment: "About"
    },
    {
        lable : 'Contact',
        path:"/Contact",
        targetSegment: "Contact"
    },
]
const Header = () => {
    const activeSegment = useSelectedLayoutSegment();
    return (
        <>

            <nav className="p-4 flex items-center justify-center bg-[#181818] fixed top-0 z-40 w-full max-w-[1905px] transform right-1/2 translate-x-1/2   transition duration-500  false">
                <ul className="flex gap-16 ">
                    {linkData.map((link:any, index:any) => {
                        return (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${
                                    activeSegment === link.targetSegment ? " text-[#f72b1c] " : "text-sm text-center transition block py-3 lg:py-0 rounded-lg lg:bg-transparent dark:lg:bg-transparent dark:text-white tracking-widest font-bold hover:text-[#f72b1c] "
                                }`}
                            >
                                {link.lable}
                            </Link>
                        );
                    })}

                </ul>
            </nav>

      </>
    );
};

export default Header;
