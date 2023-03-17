import React from "react";

const Footer = () => {
  return (
    <footer class="flex bg-white rounded-lg shadow m-4 md:flex dark:bg-gray-800">
      <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" class="hover:underline">
            Goofy Aah™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center justify-around mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
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
