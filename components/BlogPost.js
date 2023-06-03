import Link from "next/link";

const BlogPost = ({ title, summary, slug, publishedAt }) => {
  return (
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a className="w-full">
        <div className="w-full mb-4">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-base font-medium text-blue-600 md:text-xl hover:underline dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-base text-gray-600 leading-7 dark:text-gray-400">
            {summary}
          </p>
          <div className="flex items-center">
            <p className="my-2 text-sm text-gray-500">
              {publishedAt}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
