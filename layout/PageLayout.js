import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Container from "../components/Container";

const PageLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {/* Header */}
      {/* Navbar */}
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
                    <a
                      href="/"
                      className="h-10 py-3 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                    >
                      About Me
                    </a>
                    <a
                      href="/"
                      className="h-10 py-3 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                    >
                      Blog
                    </a>
                    <a
                      href="/"
                      className="h-10 py-3 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                    >
                      Projects
                    </a>
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
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </Container>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="h-10 py-3 mx-4 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                >
                  About Me
                </a>
                <a
                  href="/"
                  className="h-10 py-3 mx-4 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                >
                  Blog
                </a>
                <a
                  href="/"
                  className="h-10 py-3 mx-4 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center"
                >
                  Projects
                </a>
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
        <footer>footer</footer>
      </Container>
    </div>
  );
};

export default PageLayout;
