import Link from "next/link";
import PageLayout from "../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";
import SkillsList from "../components/SkillsList";
import ProjectsList from "../components/ProjectsList";
import Subscribe from "../components/Subscribe";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

const Home = () => {
  return (
    <PageLayout>
      <div className="flex items-center p-6 bg-gray-100 rounded dark:bg-gray-800 focus:outline-none lg:p-10 lg:my-10">
        <div className="flex-1 min-w-0">
          <SectionTitle>I’m Nelson Murungi 👋</SectionTitle>
          <h2 className="mt-4 text-base prose text-gray-800 lg:text-lg sm:pr-0 lg:pr-10 dark:text-gray-100">
            A Fullstack Developer. This website is my zone that helps me lessen
            social anxiety and emotional distress by sharing some thoughts on
            the few things I have learned and created in the tech world.
          </h2>
          <h2 className="my-4 text-base prose text-gray-800 lg:text-lg sm:pr-0 lg:pr-10 dark:text-gray-100">
            <Link href="/resume" legacyBehavior>
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
        <SkillsList skills={skills} start={0} end={4} />
      </div>

      {/* Projects */}
      <ProjectsList projects={projects} start={0} end={1} />

      {/* Newsletter Subscription */}
      <div className="mt-4 lg:mt-10">
        <Subscribe />
      </div>
    </PageLayout>
  );
};

export default Home;
