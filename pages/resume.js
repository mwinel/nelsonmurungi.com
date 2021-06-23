import Head from "next/head";
import PageLayout from "../layout/PageLayout";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Nelson Murungi | Resume.</title>
      </Head>
      <PageLayout>
        {/* Me */}
        <div className="mt-4 lg:mt-10">
          <SectionTitle>Nelson Murungi Mwirumubi</SectionTitle>
          <div className="my-4">
            <p className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
              Fullstack Developer, Cyber Security enthuthiast. I satrted this
              journey as a self taught developer and everything has turned out
              to be amazing.
            </p>
            <p className="flex space-x-4 mt-3">
              <ExternalLink href="https://github.com/mwinel">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/nelson-mwirumubi/">
                LinkdeIn
              </ExternalLink>
              <ExternalLink href="https://twitter.com/mwinel">
                Twitter
              </ExternalLink>
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 lg:mt-10">
          <SectionTitle>Skills/Tech-stack</SectionTitle>
          <div className="my-4">
            {skills.map((skill) => (
              <ul className="list-disc list-inside" key={skill.id}>
                <li className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
                  {skill.name}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-8 lg:mt-10">
          <SectionTitle>Experience</SectionTitle>
          <ExperienceTimeline experience={experience} />
        </div>

        {/* Education */}
        {/* Licences & Certifications */}
        {/* Projects */}
        <div className="mt-4 lg:mt-10">
          <SectionTitle>Projects</SectionTitle>
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
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
      </PageLayout>
    </>
  );
};

export default Resume;
