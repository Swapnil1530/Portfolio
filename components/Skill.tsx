import { FaCss3Alt, FaReact, FaJava, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import {
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = [
  {
    id: 1,
    title: "HTML",
    icon: <ImHtmlFive2 className="w-[28px] h-[28px] text-red-600" />,
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3Alt className="w-[28px] h-[28px] text-blue-500" />,
  },
  {
    id: 3,
    title: "Javascript",
    icon: <TbBrandJavascript className="w-[28px] h-[28px] text-yellow-500" />,
  },
  {
    id: 4,
    title: "Tailwind Css",
    icon: <SiTailwindcss className="w-[28px] h-[28px] text-[#6a83f7]" />,
  },
  {
    id: 5,
    title: "Bootstrap",
    icon: <BsFillBootstrapFill className="w-[28px] h-[28px] text-purple-700" />,
  },
  {
    id: 6,
    title: "React JS",
    icon: <FaReact className="w-[28px] h-[28px] text-[#61DBFB]" />,
  },
  {
    id: 7,
    title: "Next Js",
    icon: <SiNextdotjs className="w-[28px] h-[28px]" />,
  },
  {
    id: 8,
    title: "C++",
    icon: <TbBrandCpp className="w-[28px] h-[28px] text-blue-900" />,
  },
  {
    id: 9,
    title: "Java",
    icon: <FaJava className="w-[28px] h-[28px] text-[#5382a1]" />,
  },
  {
    id: 10,
    title: "Prisma ORM",
    icon: <SiPrisma className="w-[28px] h-[28px]" />,
  },
  {
    id: 11,
    title: "TypeScript",
    icon: <TbBrandTypescript className="w-[28px] h-[28px] text-[#007acc]" />,
  },
  {
    id: 12,
    title: "Git",
    icon: <FaGitAlt className="w-[28px] h-[28px] text-[#f34f29]" />,
  },
  {
    id: 13,
    title: "Github",
    icon: <BsGithub className="w-[28px] h-[28px]" />,
  },
  {
    id: 14,
    title: "Node js",
    icon: <FaNodeJs className="w-[28px] h-[28px] text-green-700" />,
  },
  {
    id: 15,
    title: "Express Js",
    icon: <SiExpress className="w-[28px] h-[28px]" />,
  },
  {
    id: 16,
    title: "Mongo DB",
    icon: <SiMongodb className="w-[28px] h-[28px] text-green-600" />,
  },
  {
    id: 17,
    title: "Postgresql",
    icon: <BiLogoPostgresql className="w-[28px] h-[28px] text-[#0064a5]" />,
  },
];
const Skill = () => {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
      {Skills.map((data) => {
        return (
          <div key={data.id}>
            <div className="flex items-center px-3 py-3 border rounded-lg border-gray-800  hover:border-white hover:bg-[#f72b1c]">
              <div className=" flex items-center justify-center md:w-8 md:h-8 text-white">
                {data.icon}
              </div>
              <h3 className="ml-2 text-xs font-medium text-white md:text-sm md:ml-3 ">
                {data.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
