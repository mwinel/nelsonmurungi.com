import Head from "next/head";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>main content</PageLayout>
    </>
  );
};

export default Home;
