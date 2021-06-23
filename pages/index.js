import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../layout/PageLayout";

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
        <div className="md:flex md:items-center md:justify-between my-4 lg:my-10">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 md:text-2xl lg:text-3xl dark:text-gray-100">
              I’m Nelson Murungi 👋
            </h1>
            <h2 className="prose text-lg sm:pr-0 lg:pr-10 text-gray-800 dark:text-gray-100 my-4">
              A Fullstack Developer. This website is my zone that helps me
              lessen social anxiety and emotional distress by sharing some
              thoughts on the few things I have learned and created in the tech
              world. –&nbsp;
              <Link href="/resume">
                <a className="text-indigo-700 dark:text-indigo-500">Learn more about me.</a>
              </Link>
            </h2>
          </div>
          <div className="mt-4 w-64 flex md:mt-0 md:ml-4 border-4 border-gray-200 dark:border-gray-800">
            <Image
              src="https://avatars.githubusercontent.com/u/14992011?v=4"
              alt="Nelson Murungi"
              width={250}
              height={250}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
