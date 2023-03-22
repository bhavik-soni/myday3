import React from "react";

const Footer = () => {
  return (
    <footer className="m-4 flex rounded-lg bg-white shadow dark:bg-gray-800 md:flex">
      <div className="w-full justify-self-center p-4 md:flex md:items-center md:justify-between md:p-6">
        <div className="flex justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:justify-self-center sm:text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Goofy Ahh™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <ul className="mt-3 flex flex-wrap items-center justify-around text-sm text-gray-500 dark:text-gray-400 md:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
