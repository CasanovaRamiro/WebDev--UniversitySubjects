function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600 overflow-hidden  max-w-[100%]">
      <div></div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://casanova-ramiro.vercel.app/"
          className="hover:underline"
        >
          CasanovaRamiro™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 max-w-[100%]">
        <li>
          <a
            href="https://www.linkedin.com/in/ramiro-casanova/"
            className="mr-4 hover:underline md:mr-6"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
