import Head from "next/head";
import PageLayout from "../layout/PageLayout";
import SectionTitle from "../components/SectionTitle";
import Subscribe from "../components/Subscribe";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Nelson Murungi | Articles or call them blogs.</title>
      </Head>
      <PageLayout>
        <div className="mt-4 lg:mt-10">
          <SectionTitle>Articles</SectionTitle>
          <div className="my-4">
            <p className="text-base lg:text-lg text-gray-800 dark:text-gray-100 lg:leading-9">
              I am working on some articles, just to share some thoughts and
              what I have learned so far. Feel free to subscribe to the
              newsletter to get a notification when I publish one.
            </p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-4 lg:mt-10">
          <Subscribe />
        </div>
      </PageLayout>
    </>
  );
};

export default Blog;
