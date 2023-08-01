import React from "react";
import Link from "next/link";
import ProjectData from "../jsonData/ProjectData.json";
import Project from "@/components/Project";
import { FaCode } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import Skill from "@/components/Skill";
import DesignLine from "./../components/DesignLine";

const Home = () => {
  return (
    <>
   {/*<------------- Hero section------------------> */}

      <section className=" bg-no-repeat bg-center px-3">
        <div className="react-reveal h-screen flex flex-col justify-center pt-16 items-center text-center lg:items-start lg:text-left">
          <span className="text-xs md:text-sm text-black flex items-center">
            <span className="text-white">Hi, I'm </span>
            <span className="block w-6 lg:w-11 h-1 bg-[#f72b1c] ml-2 rounded-lg"></span>
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold text-white ">
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
            className="inline-block w-max p-2 mt-6 border border-gray-700  "
            href="/Contact"
          >
            <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 bg-[#f72b1c] hover:bg-black text-white hover:text-white transition duration-300 ">
              GET IN TOUCH
            </span>
          </Link>
        </div>
      </section>

       {/*<------------- Service section------------------> */}

      <section className="py-10 lg:py-16 px-3 border-b  border-opacity-50 border-gray-800">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          What I can <span className="text-[#f72b1c]"> do</span>
        </h2>
        
        <DesignLine />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 lg:gap-4">
          <div className="p-6 border rounded-lg  border-gray-800 ">
            <div className="flex items-center">
              <FaCode className=" p-1.5 border-2 border-[#f72b1c] rounded-full text-white w-[30px] h-[30px]  " />
              <h3 className="ml-4 text-sm font-semibold text-white lg:text-base">
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
          <div className="p-6 border rounded-lg  border-gray-800">
            <div className="flex items-center">
              <HiDownload className="p-1.5 border-2 border-[#f72b1c] rounded-full text-white w-[30px] h-[30px]" />
              <h3 className="ml-4 text-sm font-semibold  text-white lg:text-base">
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

          <div className="p-6 border rounded-lg  border-gray-800">
            <div className="flex items-center">
              <BsFillLightningChargeFill className="p-1.5 border-2 border-[#f72b1c] rounded-full text-white w-[30px] h-[30px]" />
              <h3 className="ml-4 text-sm font-semibold  text-white lg:text-base">
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

       {/*<------------- Skill section------------------> */}

      <section className="py-10 lg:py-16 px-3 border-b  border-opacity-50 border-gray-800">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Skills &<span className="text-[#f72b1c]"> Technology</span>
        </h2>
        <DesignLine />
        <Skill />
      </section>

       {/*<------------- Project section------------------> */}

      <section className="py-10 lg:py-16 px-3 border-b  border-opacity-50 border-gray-800">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Projects I have <span className="text-[#f72b1c]">Completed</span>
        </h2>
        <DesignLine />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {ProjectData.slice(0, 3).map((data) => (
            <Project key={data.id} project={data} />
          ))}
        </div>

        <div className=" text-center py-7">
          <Link
            className=" flex items-center justify-center text-xs transition duration-300 md:text-sm text-gray-400 hover:text-[#f72b1c]"
            href="/Project"
          >
            Show all my projects
            <MdNavigateNext className="w-[20px] h-[20px]" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
