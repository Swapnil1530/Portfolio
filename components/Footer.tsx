import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="py-20 border-b border-light-gray dark:border-gray-800">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white">GET IN
                        TOUCH</h2>
                    <p className="text-xs md:text-sm text-gray-400 max-w-[260px] md:max-w-xs mx-auto mt-2">Is
                        there
                        anything I can help you with? My inbox and social media are always open to you,
                        feel
                        free to ask, I will try my best for you. Thank you for visiting.</p>
                    <Link className="inline-block w-max p-2 mt-6 border border-light-gray  dark:border-gray-700" href="/Contact">
                        <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 bg-[#f72b1c] hover:bg-black text-white hover:text-white transition duration-300 ">
                            Say Hi..</span>
                    </Link>
                </div>
            </div>
            <div className="text-center text-xs md:text-md text-gray-400 py-7">
                <p className="mb-1">Design & Build With By Swapnil Patel</p>
            </div>
        </footer>

    );
};

export default Footer;
