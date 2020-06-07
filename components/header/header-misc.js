/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import Link from "next/link";
import { useHttpGet } from "../../hooks/http";
import { orderDateAsc } from "../shared/utils";

export const menuData = [
         {
           title: "Home",
           isMenuList: false,
           link: "/",
           items: [],
         },
         {
           title: "Our Church",
           isMenuList: true,
           items: [
             { label: "About our Church", link: "/about" },
             { label: "The Pastor", link: "/pastor" },
           ],
         },
         {
           title: "Services",
           isMenuList: true,
           items: [
             { label: "Live Streaming", link: "/live-streaming" },
             { label: "Sermon Archives", link: "/sermon-archive" },
           ],
         },
         {
           title: "Propht's Corner",
           isMenuList: true,
           items: [
             {
               label: "William Branham's Ministry",
               link: "/prophet-corner",
             },
             {
               label: "William Branham's Sermons",
               link: "https://churchages.net/en/sermons/branham",
               external: true,
             },
           ],
         },
         //  {
         //    title: "The Bible",
         //    isMenuList: false,
         //    link: "/bible",
         //    items: [],
         //  },
       ];

export const Logo = () => (
  <div className="flex-1 flex justify-between items-center">
    <Link href="/">
      <a>
        <img
          src="/logo.png"
          alt="Bethlehem Tabernacle Logo"
          className="h-auto w-20"
        />
      </a>
    </Link>
  </div>
);

export const MenuDropDown = ({ title, items, sticky, onSelect }) => {
  const stickStyle = sticky
    ? " text-md font-semibold transition duration-300 ease-in"
    : " duration-300 ease-in";

  return (
    <div className="text-left">
      <div className="dropdown inline-block relative">
        <button
          className={
            "lg:p-4 lg:py-3 px-5 py-2 inline-flex items-center hover:border-red-600 hover:bg-gray-500" +
            stickStyle
          }
        >
          <span className="mr-1">{title}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden bg-white shadow-xl z-20 hover:border-red-600">
          {items.map((item, i) => (
            <li
              key={i.toString() + item.label}
              className="text-gray-800 text-lg"
            >
              {item.external ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-0 pl-3 pr-5 my-2 block border-b-2 border-transparent hover:bg-gray-300 whitespace-no-wrap"
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.link}>
                  <a
                    className="py-0 pl-3 pr-5 my-2 block border-b-2 border-transparent hover:bg-gray-300 whitespace-no-wrap"
                    onClick={onSelect}
                  >
                    {item.label}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
