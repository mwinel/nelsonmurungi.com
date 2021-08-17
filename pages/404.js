import Link from "next/link";
import PageLayout from "../layouts/PageLayout";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center max-w-2xl md:p-0 mx-auto h-96 text-center lg:p-10">
        <h1 className="font-bold text-3xl md:text-3xl tracking-tight text-gray-800 dark:text-gray-100">
          404 | Not Found
        </h1>
        <p className="text-base my-10 text-gray-800 dark:text-gray-100">
          I am so sorry you could not find what you are looking for. You are
          definetely looking for something I did not think would be important to
          you. Once again I apologise, my bad.
        </p>
        <Link href="/">
          <a className="p-3 w-64 font-medium mx-auto bg-gray-200 dark:bg-gray-900 text-center rounded-md text-gray-800 dark:text-gray-100">
            Return Home
          </a>
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
