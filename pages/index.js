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
    name: "JavaScript",
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
        <div className="bg-gray-100 rounded dark:bg-gray-800 focus:outline-none flex items-center p-10 my-10">
          <div className="flex-1 min-w-0">
            <SectionTitle>I’m Nelson Murungi 👋</SectionTitle>
            <h2 className="prose text-lg sm:pr-0 lg:pr-10 text-gray-800 dark:text-gray-100 mt-4">
              A Fullstack Developer. This website is my zone that helps me
              lessen social anxiety and emotional distress by sharing some
              thoughts on the few things I have learned and created in the tech
              world.
            </h2>
            <h2 className="prose text-lg sm:pr-0 lg:pr-10 text-gray-800 dark:text-gray-100 my-4">
              <Link href="/resume">
                <a className="text-indigo-700 dark:text-indigo-500">
                  Learn more about me.
                </a>
              </Link>
            </h2>
          </div>
          {/* <div className="mt-4 w-64 flex md:mt-0 md:ml-4 border-4 border-gray-200 dark:border-gray-800">
            <Image
              src="https://avatars.githubusercontent.com/u/14992011?v=4"
              alt="Nelson Murungi"
              width={250}
              height={250}
            />
          </div> */}
        </div>
        {/* Tech stack */}
        <div>
          <SectionTitle>Skills</SectionTitle>
          {/* <Divider /> */}
          <ul className="my-4 list list-disc">
            {skills.map((skill) => (
              <li key={skill.id} className="flex">
                <p className="text-lg text-gray-800 dark:text-gray-100 leading-9">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>Projects</SectionTitle>
          {/* <Divider /> */}
          <ul className="my-4 list list-disc">
            {skills.map((skill) => (
              <li key={skill.id} className="flex">
                <p className="text-lg text-gray-800 dark:text-gray-100 leading-9">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
