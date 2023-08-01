import DesignLine from "@/components/DesignLine";

const AboutPage = () => {
  return (
    <>
      <div className="py-10 lg:py-16 px-3 true">
        <div className="mt-10 lg:mt-20 bg-gray-700  p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            <span className="text-[#f72b1c]">A</span>bout
          </h1>
          <p className="text-xs lg:text-sm text-gray-400 max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
            Learn more about me and my story by reading my biography. Get to
            know me better by exploring my life experiences and journey.
          </p>
        </div>
      </div>
      <div className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          My<span className="text-[#f72b1c]"> History</span>
        </h2>
        <DesignLine />
        <p className="text-gray-400 text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
          Hi, my name is <span className="text-[#f72b1c]">Swapnil</span> and I
          am a student studying Computer Science Engineering at SPU in Gujarat,
          India. Hello and welcome to my profile!
        </p>
      </div>
      <div className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white ">
          What am i<span className="text-[#f72b1c]"> Doing</span>
        </h2>
        <DesignLine />
        <p className="text-gray-400 text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
          As a student, I am currently focusing on deepening my knowledge and
          skills in web development, specifically Backend development. I am
          actively learning and studying technologies such as{" "}
          <span className="text-[#f72b1c]">
            Webpack, React JS, Next JS, and Typescript.
          </span>{" "}
          In addition, I am building my portfolio by working on personal
          projects to showcase my abilities and experience.
        </p>
      </div>
      <div className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          What<span className="text-[#f72b1c]"> Next</span>
        </h2>
       <DesignLine />
        <p className="text-gray-400 text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
          My goal as a developer is to become a Fullstack Developer with
          expertise in both <span className="text-[#f72b1c]">Frontend</span> and <span className="text-[#f72b1c]">Backend </span>technologies.
          My aim is to be able to easily build solutions to solve
          problems using my skills and knowledge. While it will be a challenging
          and time-consuming journey, I am dedicated to practicing and learning
          continuously to reach my goal.
        </p>
      </div>
    </>
  );
};
export default AboutPage;
