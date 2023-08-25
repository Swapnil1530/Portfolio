import DesignLine from "@/components/DesignLine";
import Link from "next/link";

const Resume = () => {
  return (
    <>
      <section className="py-10 lg:py-16 px-3 true">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          <span className="text-[#f72b1c]"> </span>
        </h2>
        <div className="mt-10 lg:mt-20 bg-gray-700 p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            <span className="text-[#f72b1c]">R</span>esume
          </h1>
          <p className="text-xs lg:text-sm text-gray-400 max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
            Explore my background and achievements by reading about my
            experiences and education.
          </p>
        </div>
      </section>
      <section className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Work<span className="text-[#f72b1c]"> Experience</span>
        </h2>
        <DesignLine />
        <div className="py-7 px-5 border-l border-[#f72b1c]">
          <div className="relative">
            <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-[#f72b1c] text-white">
              Present
            </span>
            <span className="absolute w-3 h-3 bg-[#f72b1c] rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <h3 className="text-base md:text-lg font-semibold">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white"
                >
                  Full Stack Web Development{" "}
                </Link>
              </h3>
              <h4 className="text-xs lg:text-sm text-[#f72b1c]">
                Web Stack Acedemy - Internship
              </h4>
            </div>
            <div className="text-xs md:text-base text-gray-400 col-span-3">
              Engaged in an ongoing dynamic MERN stack internship, contributing
              to end-to-end web development projects. Proficiently working with
              React, integrating Express.js and Node.js for back-end, and honing
              skills in MongoDB database management. Gaining valuable experience
              in building responsive and interactive web applications.
            </div>
          </div>
        </div>
        <div className="py-7 px-5 border-l border-[#f72b1c]">
          <div className="relative">
            <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-[#f72b1c] text-white">
              July - Aug 2023
            </span>
            <span className="absolute w-3 h-3 bg-[#f72b1c] rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <h3 className="text-base md:text-lg font-semibold">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white"
                >
                  Web Development{" "}
                </Link>
              </h3>
              <h4 className="text-xs lg:text-sm text-[#f72b1c]">
                Prodigy Infotech - Internship
              </h4>
            </div>
            <div className="text-xs md:text-base text-gray-400 col-span-3">
              I have recently wrapped up a hands-on web development internship,
              specializing in HTML, CSS, and JavaScript. Throughout the
              internship, I adeptly translated design concepts into interactive
              web interfaces. This experience further enriched my skills in
              front-end development, equipping me to create engaging and
              user-friendly web experiences.
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Educational<span className="text-[#f72b1c]"> Level</span>
        </h2>
        <DesignLine />
        <div className="py-7 px-5 border-l border-[#f72b1c]">
          <div className="relative">
            <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-[#f72b1c] text-white">
              2020 - Present
            </span>
            <span className="absolute w-3 h-3 bg-[#f72b1c] rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <h3 className="text-base md:text-lg font-semibold">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white"
                >
                  Sankalchand Patel Univercity{" "}
                </Link>
              </h3>
              <h4 className="text-xs lg:text-sm text-[#f72b1c]">College</h4>
            </div>
            <div className="text-xs md:text-base text-gray-400 col-span-3">
              I am currently pursuing a degree in Computer Science Engineering
              at Sankalchand Patel College of Engineering Visnagar,Gujarat.
            </div>
          </div>
        </div>
        <div className="py-7 px-5 border-l border-[#f72b1c]">
          <div className="relative">
            <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-[#f72b1c] text-white">
              2019 - 2020
            </span>
            <span className="absolute w-3 h-3 bg-[#f72b1c] rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <h3 className="text-base md:text-lg font-semibold">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white"
                >
                  Glorious Public School{" "}
                </Link>
              </h3>
              <h4 className="text-xs lg:text-sm text-[#f72b1c]">
                Higher Secondary School
              </h4>
            </div>
            <div className="text-xs md:text-base text-gray-400 col-span-3">
              I successfully completed my 12th class from Gujarat Secondary and
              Higher Secondary Education Board.
            </div>
          </div>
        </div>
        <div className="py-7 px-5 border-l border-[#f72b1c]">
          <div className="relative">
            <span className="text-xs inline-block py-[3px] px-5 rounded-full border border-[#f72b1c] text-white">
              2017 - 2018
            </span>
            <span className="absolute w-3 h-3 bg-[#f72b1c] rounded-full left-[-26.5px] bottom-1/2 transform translate-y-1/2"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <h3 className="text-base md:text-lg font-semibold">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-white"
                >
                  Affinity Education Foundation{" "}
                </Link>
              </h3>
              <h4 className="text-xs lg:text-sm text-[#f72b1c]">
                Secondary School
              </h4>
            </div>
            <div className="text-xs md:text-base text-gray-400 col-span-3">
              I successfully completed my 10th class from Gujarat Secondary and
              Higher Secondary Education Board.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resume;
