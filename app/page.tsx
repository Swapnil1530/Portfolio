import React from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Skills = [
    {
        id: 1,
        title: "HTML",
    },
    {
        id: 2,
        title: "CSS",
    },
    {
        id: 3,
        title: "Javascript",
    },
];
const Home = () => {
    return (
        <>
            <header className=" bg-no-repeat bg-center px-3">
                <div className="react-reveal h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
                    <span className="text-xs md:text-sm text-black flex items-center">
                        <span className="dark:text-white">Hi, I'm</span>
                        <span className="block w-6 lg:w-11 h-1 bg-[#f72b1c] ml-2 rounded-lg"></span>
                    </span>
                    <h1 className="text-5xl lg:text-8xl font-bold text-black dark:text-white">
                        Swapnil Patel
                    </h1>
                    <h2 className="text-xl lg:text-4xl font-bold text-[#f72b1c] mt-2">
                        [Full-Stack Web Developer]
                    </h2>
                    <p className="text-xs lg:text-base text-gray-400 max-w-md tracking-widest mt-2 lg:mt-3 md:ml-1">
                        I am a student from India with a passion for full stack development.
                        Follow my journey as I strive to improve my skills and become a
                        proficient full stack developer.
                    </p>
                    <Link
                        className="inline-block w-max p-2 mt-6 border border-light-gray  dark:border-gray-700"
                        href="/Contact"
                    >
                        <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 bg-[#f72b1c] hover:bg-black text-white hover:text-white transition duration-300 ">GET IN TOUCH</span>
                    </Link>
                </div>
            </header>
            <section className="py-10 lg:py-16 px-3 border-b border-light-gray border-opacity-50 dark:border-gray-800">
                <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white">
                    What I can <span className="text-[#f72b1c]"> do</span>
                </h2>
                <div className="text-center mt-2 mb-3 lg:mb-5">
                    <span className="inline-block bg-[#f72b1c] w-[1.5px] lg:w-[2px] h-8 lg:h-9"></span>
                    <span className="inline-block bg-black dark:bg-white w-[1.5px] lg:w-[2px] h-8 lg:h-9 mx-1 lg:mx-[5px] -mb-2"></span>
                    <span className="inline-block bg-[#f72b1c] w-[1.5px] lg:w-[2px] h-8 lg:h-9"></span>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 lg:gap-4">
                    <div className="p-6 border rounded-lg border-light-gray dark:border-gray-800">
                        <div className="flex items-center">
                            <FaCode className=" p-1.5 border-2 border-[#f72b1c] rounded-full dark:text-white w-[30px] h-[30px]  " />
                            <h3 className="ml-4 text-sm font-semibold text-black dark:text-white lg:text-base">
                                Web Development
                            </h3>
                        </div>
                        <div className="mt-3">
                            <p className="text-xs lg:text-sm text-gray-400">
                                I specialize in turning stunning designs into functional and
                                high-performing websites.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 border rounded-lg border-light-gray dark:border-gray-800">
                        <div className="flex items-center">
                            <HiDownload className="p-1.5 border-2 border-[#f72b1c] rounded-full dark:text-white w-[30px] h-[30px]" />
                            <h3 className="ml-4 text-sm font-semibold text-black dark:text-white lg:text-base">
                                WebApps Dev
                            </h3>
                        </div>
                        <div className="mt-3">
                            <p className="text-xs lg:text-sm text-gray-400">
                                I am skilled in developing high-functioning web applications
                                with a variety of features and excellent performance.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="p-6 border rounded-lg border-light-gray dark:border-gray-800">
                        <div className="flex items-center">
                            <BsFillLightningChargeFill className="p-1.5 border-2 border-[#f72b1c] rounded-full dark:text-white w-[30px] h-[30px]" />
                            <h3 className="ml-4 text-sm font-semibold text-black dark:text-white lg:text-base">
                                Best Performance
                            </h3>
                        </div>
                        <div className="mt-3">
                            <p className="text-xs lg:text-sm text-gray-400">
                                I am skilled in developing high-performing websites and web
                                applications that provide a seamless and enjoyable user
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 lg:py-16 px-3 border-b border-light-gray border-opacity-50 dark:border-gray-800">
                <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center dark:text-white">
                    Skills &<span className="text-primary"> Technology</span>
                </h2>
                <div className="text-center mt-2 mb-3 lg:mb-5">
                    <span className="inline-block bg-[#f72b1c] w-[1.5px] lg:w-[2px] h-8 lg:h-9"></span>
                    <span className="inline-block bg-black dark:bg-white w-[1.5px] lg:w-[2px] h-8 lg:h-9 mx-1 lg:mx-[5px] -mb-2"></span>
                    <span className="inline-block bg-[#f72b1c] w-[1.5px] lg:w-[2px] h-8 lg:h-9"></span>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
                    {Skills.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className="flex items-center px-3 py-3 border rounded-lg border-light-gray dark:border-gray-800">
                                    <h3 className="ml-2 text-xs font-medium text-black dark:text-white md:text-sm md:ml-3">
                                        {data.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
