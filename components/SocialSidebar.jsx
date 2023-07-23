import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

const SocialSidebar = () => {
    // @ts-ignore
    return (
        <>
        <div className="fixed z-[-1] w-[80%] 2xl:w-[1200px] transform right-1/2 translate-x-1/2">
            <div className="decoration h-screen w-full" />
        </div>
    <div className="hidden md:flex justify-between fixed bottom-0 left-0 right-0 z-10 w-full px-3 md:px-10 2xl:px-20 max-w-[1905px] mx-auto">
        <aside className="flex flex-col items-center">
        <div className="h-full w-[2px] bg-[#f72b1c] mb-5" />
            <ul className="flex flex-col items-center justify-center w-6 gap-5 space-y-1">

                <Link className="text-gray-400 hover:text-[#f72b1c] w-7"
                    href="#" // Replace with your Instagram profile link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                >
                    <FontAwesomeIcon icon={faGithub}  className="transition duration-300 transform hover:-translate-y-1" />
                </Link>
                <Link  className="text-gray-400 hover:text-[#f72b1c] w-7"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkdin"
                    aria-label="Linkdin"
                >
                    <FontAwesomeIcon icon={faLinkedin}  className="transition duration-300  transform hover:-translate-y-1" />
                </Link>
                <Link className="w-7 text-gray-400 hover:text-[#f72b1c]"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faTwitter}  className="transition duration-300  transform hover:-translate-y-1" />
                </Link>
                <Link className="w-7 text-gray-400 hover:text-[#f72b1c]"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                    <FontAwesomeIcon icon={faInstagram}  className="transition duration-300 transform hover:-translate-y-1" />
                </Link>
            </ul>
            <div className="h-full w-[2px] bg-[#f72b1c] mt-5" />
        </aside>
        
        <aside className="react-reveal flex flex-col justify-end items-center">
        <div className=" h-52 w-[2px] bg-[#f72b1c] mb-5" />
            <Link
                href="mailto:patelswapnil438@gmail.com"
                className="text-gray-400 transition  duration-300 hover:text-[#f72b1c] tracking-widest  "
                style={{ writingMode: 'tb-rl'} }
            >
               patelswapnil438@gmail.com
            </Link>

            <div className="h-28 w-[2px] bg-[#f72b1c] mt-5" />
        </aside>
    </div>
    <canvas
        className="flex pointer-events-none absolute inset-0"
        id="canvas"
    />
    </>
    );
};

export default SocialSidebar;
