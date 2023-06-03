import { useState } from "react";
import { getAllFilesWithFrontMatter } from "../lib/mdx";
import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";
import Subscribe from "../components/Subscribe";
import BlogPost from "../components/BlogPost";

const Blog = ({ posts, frontMatter }) => {
  return (
    <Wrapper
      title="Blog - Nelson Murungi Mwirumubi"
      description="Simple summary"
    >
      <div className="mt-4 lg:mt-10">
        <div className="mt-4">
          <SectionTitle>Recent Articles</SectionTitle>
        </div>
        <div className="my-4">
          {!posts.length && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No posts found.
            </p>
          )}
          {posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-4 lg:mt-10">
        <Subscribe />
      </div>
    </Wrapper>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllFilesWithFrontMatter("blog");

  return { props: { posts } };
};
