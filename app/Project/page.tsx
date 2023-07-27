import ProjectData from "../../jsonData/ProjectData.json";
import Project from "../../components/Project";
import DesignLine from "@/components/DesignLine";
const ProjectPage = () => {
  return (
    <section className="py-10 lg:py-16 px-3 border-b border-gray-800 border-opacity-50 ">
      <div className="mt-10 lg:mt-20 bg-gray-700   p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white ">
          <span className="text-[#f72b1c]">P</span>roject
        </h1>
        <p className="text-xs lg:text-sm text-gray-400 max-w-sm tracking-widest mt-3 lg:mt-5 mx-auto">
          I have completed a variety of projects using a range of technologies.
          Some examples of my work include...
        </p>
      </div>
      <div className="py-10 lg:py-16 px-3">
        <h2 className="text-xl lg:text-2xl font-bold mb-0 text-center text-white">
          Personal<span className="text-[#f72b1c]"> Projects</span>
        </h2>
        <DesignLine />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-0 lg:grid-cols-3 gap-x-4 gap-y-6">
        {ProjectData.map((data) => (
          <Project key={data.id} project={data} />
        ))}
      </div>
      </div>
    </section>
  );
};
export default ProjectPage;
