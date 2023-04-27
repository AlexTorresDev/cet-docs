/** @jsxImportSource react */
import type { FunctionComponent } from 'react';
import { useState } from "react";

const Navbar: FunctionComponent<{ navbarLinks: {text: string, link: string}[] }> = ({ navbarLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex pl-12">
        {navbarLinks?.map(({ text, link }) => (
          <a
            className="navbar-link"
            href={`${import.meta.env.BASE_URL}${link}`}
            aria-label={text}
            key={text}
          >
            {text}
          </a>
        ))}
      </div>
      <div className="grow basis-0 justify-end hidden lg:flex"></div>
      <div
        className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
        <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
        <div className="w-5 h-0.5 bg-gray-500"></div>
      </div>
    </>
  );
};

export default Navbar;