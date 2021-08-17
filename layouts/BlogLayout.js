import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";
import Subscribe from "../components/Subscribe";

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Wrapper
      title={`${frontMatter.title} - Nelson Murungi`}
      description={frontMatter.summary}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <div className="mt-4 lg:mt-10">
        <article className="flex flex-col justify-center items-start mx-auto w-full">
          <SectionTitle>{frontMatter.title}</SectionTitle>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 my-2">
              {frontMatter.publishedAt}
            </p>
            <p className="mx-2 text-gray-500"> • </p>
            <p className="text-sm text-gray-500 my-2">
              {frontMatter.readingTime.text}
            </p>
          </div>
          <div className="prose text-base lg:text-lg text-gray-800 dark:prose-dark max-w-none w-full mt-8">
            {children}
          </div>
        </article>
        {/* Newsletter Subscription */}
        <div className="mt-4 lg:mt-10">
          <Subscribe />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogLayout;
