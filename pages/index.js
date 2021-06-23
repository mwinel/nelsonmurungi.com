import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../layout/PageLayout";
import SectionTitle from "../components/SectionTitle";
import Divider from "../components/Divider";

const skills = [
  {
    id: 1,
    name: "JavaScript (NodeJS/ExpressJS, ReactJS, React Native for mobile apps).",
  },
  {
    id: 2,
    name: "Python (Django, Flask)",
  },
];

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
        <div className="mt-4 lg:mt-10">
          <SectionTitle>Skills</SectionTitle>
          {skills.map((skill) => (
            <ul class="list-disc list-inside">
              <li className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
                {skill.name}
              </li>
            </ul>
          ))}
        </div>

        {/* Projects */}
      </PageLayout>
    </>
  );
};

export default Home;
