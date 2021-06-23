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
            <li key={project.id} className="py-4 flex">
              <div className="">
                <p className="text-base font-medium lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
                  {project.name}
                </p>
                <p className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
                  {project.description}
                </p>
                <p className="flex space-x-4 mt-3">
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
