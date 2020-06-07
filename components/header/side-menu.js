/** @jsx jsx */
import { jsx } from "@emotion/core";

const SideMenu = () => {
  return (
    <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 flex-1">
            <a
              href="/"
              className="flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
            >
              <svg
                className="fill-current h-8 w-8 pr-0 md:pr-3 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
              </svg>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                Accueil
              </span>
            </a>
          </li>
          <li className="mr-3 flex-1">
            <a
              href="/bulletin-edit"
              className="flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
            >
              <svg
                className="fill-current h-8 w-8 pr-0 md:pr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z" />
              </svg>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Gestion de Notes
              </span>
            </a>
          </li>
          <li className="mr-3 flex-1">
            <a
              href="/student"
              className="flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
            >
              {/* <svg
                className="fill-current h-8 w-8 pr-0 md:pr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
              </svg> */}
              <svg
                className="fill-current h-8 w-8 pr-0 md:pr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
              </svg>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Eleves
              </span>
            </a>
          </li>
          {/* <li className="mr-3 flex-1">
            <a
              href="#"
              className="flex items-center py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
            >
              <svg
                className="fill-current h-8 w-8 pr-0 md:pr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Payments
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
