import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
// import remarkSlug from 'remark-slug'
// import remarkAutolinkHeadings from 'remark-autolink-headings'
// import remarkCodeTitles from "remark-code-titles";

const x = import('remark-autolink-headings')

const root = process.cwd();

export const getFiles = async (type) => {
  return fs.readdirSync(path.join(root, "data", type));
};

export const getFileBySlug = async (type, slug) => {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf-8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf-8");

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        import("remark-autolink-headings"),
        import("remark-slug"),
        import("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesWithFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf-8"
    );

    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
