import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "../components/Container";
import Navlink from "../components/Navlink";
import ExternalLink from "../components/ExternalLink";
import Divider from "../components/Divider";

const PageLayout = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const router = useRouter();

  const meta = {
    title:
      "Nelson Murungi Mwirumubi - Fullstack Developer, Cyber Security, AI enthusiast.",
    description: "Fullstack Developer, Cyber Security, AI enthusiast.",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          // content={`https://nelsonmurungi.vercel.app${router.asPath}`}
          content={`http://localhost:3000${router.asPath}`}
        />
        <link
          rel="canonical"
          // href={`https://nelsonmurungi.vercel.app${router.asPath}`}
          href={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Nelson Murungi Mwirumubi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mwinel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Disclosure as="nav" className="my-3">
        {({ open }) => (
          <>
            <Container>
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8 items-center lg:ml-0 lg:space-x-1">
                    <Navlink href="/">About Me</Navlink>
                    <Navlink href="/blog">Blog</Navlink>
                    <Navlink href="/projects">Projects</Navlink>
                    <Navlink href="/resume">Resume</Navlink>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button
                      aria-label="Toggle Dark Mode"
                      type="button"
                      className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800 focus:outline-none"
                      onClick={() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      }
                    >
                      {mounted && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-800 dark:text-gray-100"
                        >
                          {resolvedTheme === "dark" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          )}
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Container>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Navlink href="/" className="mx-4">
                  About Me
                </Navlink>
                <Navlink href="/blog" className="mx-4">
                  Blog
                </Navlink>
                <Navlink href="/projects" className="mx-4">
                  Projects
                </Navlink>
                <Navlink href="/resume" className="mx-4">
                  Resume
                </Navlink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Main */}
      <Container>
        <main>{children}</main>
      </Container>

      {/* Footer */}
      <Container>
        <footer className="my-10">
          <Divider />
          <div className="flex space-x-4">
            <ExternalLink href="https://github.com/mwinel">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nelson-mwirumubi/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://twitter.com/mwinel">
              Twitter
            </ExternalLink>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default PageLayout;
