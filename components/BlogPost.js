import Link from "next/link";

const BlogPost = ({ title, summary, slug, publishedAt }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-4 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-blue-500 hover:underline dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400">
            {summary}
          </p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 my-2">
              {publishedAt}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
