import React from "react";

const Footer = () => {
  return (
    <footer class="m-4 flex rounded-lg bg-white shadow dark:bg-gray-800 md:flex">
      <div class="w-full justify-self-center p-4 md:flex md:items-center md:justify-between md:p-6">
        <div class="flex justify-center">
          <span class="text-sm text-gray-500 dark:text-gray-400 sm:justify-self-center sm:text-center">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Goofy Ahh™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <ul class="mt-3 flex flex-wrap items-center justify-around text-sm text-gray-500 dark:text-gray-400 md:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
