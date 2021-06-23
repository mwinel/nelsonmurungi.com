import Head from "next/head";
import Link from "next/link";
import PageLayout from "../layout/PageLayout";
import SectionTitle from "../components/SectionTitle";
import ExternalLink from "../components/ExternalLink";
import Subscribe from "../components/Subscribe";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Nelson Murungi | Full-stack Developer and Cyber Security, AI
          enthusiast.
        </title>
      </Head>
      <PageLayout>
        <div className="bg-gray-100 rounded dark:bg-gray-800 focus:outline-none flex items-center p-6 lg:p-10 lg:my-10">
          <div className="flex-1 min-w-0">
            <SectionTitle>I’m Nelson Murungi 👋</SectionTitle>
            <h2 className="prose text-base lg:text-lg sm:pr-0 lg:pr-10 text-gray-800 dark:text-gray-100 mt-4">
              A Fullstack Developer. This website is my zone that helps me
              lessen social anxiety and emotional distress by sharing some
              thoughts on the few things I have learned and created in the tech
              world.
            </h2>
            <h2 className="prose text-base lg:text-lg sm:pr-0 lg:pr-10 text-gray-800 dark:text-gray-100 my-4">
              <Link href="/resume">
                <a className="text-indigo-700 dark:text-indigo-500">
                  Learn more about me.
                </a>
              </Link>
            </h2>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-8 lg:mt-10">
          <SectionTitle>Skills</SectionTitle>
          <div className="my-4">
            {skills.slice(0, 4).map((skill) => (
              <ul className="list-disc list-inside" key={skill.id}>
                <li className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
                  {skill.name}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-4 lg:mt-10">
          <SectionTitle>Projects</SectionTitle>
          <ul className="divide-y divide-gray-200">
            {projects.slice(0, 1).map((project) => (
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

        {/* Newsletter Subscription */}
        <div className="mt-4 lg:mt-10">
          <Subscribe />
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
