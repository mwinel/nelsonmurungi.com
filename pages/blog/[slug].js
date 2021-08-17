import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/BlogLayout";
import MDXComponents from "../../components/MDXComponent";

const Blog = ({ mdxSource, frontMatter }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </BlogLayout>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug("blog", params.slug);

  return { props: { ...post } };
};
