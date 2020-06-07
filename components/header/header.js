/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {

  return (
    <header className="w-full max-w-screen h-auto bg-main">
      <nav className="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#">
              <span className="text-xl pl-2">
                <i className="em em-grinning"></i>
              </span>
            </a>
          </div>

          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            <span className="relative w-full">
              <input
                type="search"
                placeholder="Search"
                className="w-full bg-gray-800 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal"
              />
              <div
                className="absolute search-icon"
                css={css`
                  top: 0.5rem;
                  left: 0.8rem;
                `}
              >
                <svg
                  className="fill-current pointer-events-none text-white w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
              </div>
            </span>
          </div>

          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline"
                  href="/"
                >
                  Accueil
                </a>
              </li>
              {/* <li className="flex-1 md:flex-none md:mr-3">
                <a
                  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="/bulletin-edit"
                >
                  link
                </a>
              </li> */}
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button className="flex items-center text-white focus:outline-none">
                    <span className="pr-2">
                      <svg className="fill-current h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
                      </svg>
                    </span>
                    Prof. Kandolo
                    <svg
                      className="h-3 fill-current inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <div
                    id="myDropdown"
                    className="dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                  >
                    <input
                      type="text"
                      className="drop-search p-2 text-gray-600"
                      placeholder="Search.."
                      id="myInput"
                    />
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-user fa-fw"></i> Profile
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fa fa-cog fa-fw"></i> Settings
                    </a>
                    <div className="border border-gray-800"></div>
                    <a
                      href="#"
                      className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                    >
                      <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
