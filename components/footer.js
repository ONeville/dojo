export default () => (
  <div className="w-full h-auto flex flex-row justify-center bg-main py-5">
    <div className="container flex flex-col lg:flex-row justify-between items-center mb-6 md:ml-12">
      <div className="mx-2 px-3 w-screen lg:w-1/3">
        <h2 className="text-gray-100 font-semibold text-2xl mt-5">
          Bethelem Tabernacle
        </h2>
        <p className="text-justify text-gray-200 mt-5">
          “But you, Bethlehem Ephrathah, though you are small among the clans of
          Judah, out of you will come for me one who will be ruler over Israel,
          whose origins are from of old, from ancient times.”
        </p>
      </div>
      <div className="mx-1 lg:mx-2 py-5 lg:py-1 lg:flex-grow">
        <h2 className="text-gray-100 text-left lg:text-center font-semibold text-2xl">
          Useful links
        </h2>
        <ul className="mt-5">
          <li className="block list-none text-left lg:text-center text-lg text-gray-200 hover:bg-accent py-2 cursor-pointer">
            More abour William Branham
          </li>
          <li className="block list-none text-left lg:text-center text-lg text-gray-200 hover:bg-accent py-2 cursor-pointer">
            Archive Sermons
          </li>
        </ul>
      </div>
      <div className="mx-2 px-3 w-screen lg:w-1/3">
        <h2 className="text-gray-100 font-semibold text-2xl lg:mt-8">
          Our Address
        </h2>
        <div className="flex flex-col text-gray-200 mt-5">
          <p className="flex items-center">
            <span>
              <svg
                className="fill-current text-accent hover:text-gray-300 h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
              </svg>
            </span>
            <span className="text-base">+1 (310)-751-4735</span>
          </p>
          <p className="flex items-center">
            <span>
              <svg
                className="fill-current text-accent hover:text-gray-300 h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
              </svg>
            </span>
            <span className="text-base">churchinfo@mail.com</span>
          </p>
          <p className="flex">
            <span>
              <svg
                className="fill-current text-accent hover:text-gray-300 h-4 w-4 mr-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </span>
            <span className="text-base">
              19 Jeffrey Lane, Brunswick, <br /> MD 21758-9016, USA.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
