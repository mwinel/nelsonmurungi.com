import SectionTitle from "./SectionTitle";
import ExternalLink from "./ExternalLink";

const ProjectsList = ({ projects, start, end }) => {
  return (
    <>
      {/* Projects */}
      <div className="mt-4 lg:mt-10">
        <SectionTitle>Projects</SectionTitle>
        <ul className="divide-y divide-gray-200">
          {projects.slice(start, end).map((project) => (
            <li key={project.id} className="flex py-4">
              <div className="">
                <p className="text-base font-medium text-blue-500 hover:underline dark:text-gray-100 lg:leading-7">
                  {project.name}
                </p>
                <p className="text-base text-gray-800 dark:text-gray-100 lg:leading-7">
                  {project.description}
                </p>
                <p className="flex mt-3 space-x-4">
                  <ExternalLink href={project.projectURL}>
                    See Project
                  </ExternalLink>
                  <ExternalLink href={project.repositoryURL}>
                    GitHub
                  </ExternalLink>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProjectsList;
