import Link from "next/link";
import Image from "next/image";

const Project = ({ project }: any) => {
  return (
    <div className="bg-[#181818] border border-gray-800 rounded-lg px-4 pt-6 text-center overflow-hidden">
      <div className="mb-3">
        <Link href={project.link} target="_blank">
          <h3 className="text-white text-base lg:text-xl font-semibold transition duration-300 hover:text-[#f72b1c]">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-xs">
          {project.technologies.join(", ")}
        </p>
      </div>
      <div className="shadow-xl">
        <span className="transition duration-300 transform translate-y-5 hover:translate-y-0 "></span>
        <Image
          alt={`${project.title}`}
          src={project.image_url}
          className="transition duration-300 transform translate-y-5 hover:translate-y-0"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Project;
