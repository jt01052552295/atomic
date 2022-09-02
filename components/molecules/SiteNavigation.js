import { React, PropTypes, Link } from "../../libraries";

export default function SiteNavigation({ ...props }) {
  //   console.log(Link);

  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/">
        <a className="mr-5 hover:text-gray-900">home</a>
      </Link>
      <Link href="/about">
        <a className="mr-5 hover:text-gray-900">order</a>
      </Link>
      <Link href="/about">
        <a className="mr-5 hover:text-gray-900">sign-in</a>
      </Link>
      <a
        className="mr-5 hover:text-gray-900"
        target="blank"
        href="https://github.com/justirva09/NextJS-Boilerplate-withAtomicDesign"
      >
        Fourth Link
      </a>
    </nav>
  );
}
