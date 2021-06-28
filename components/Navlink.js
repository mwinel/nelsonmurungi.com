import Link from "next/link";

const Navlink = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={`h-10 py-3 px-6 bg-gray-200 font-medium rounded dark:bg-gray-800 focus:outline-none flex items-center ${className}`}>
        {children}
      </a>
    </Link>
  );
};

export default Navlink;
