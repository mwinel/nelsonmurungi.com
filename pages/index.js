import Head from "next/head";
import PageLayout from "../layout/PageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>main content</PageLayout>
    </>
  );
}
