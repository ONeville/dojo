/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout isHome={true}>
    <div className="bg-blue-800 p-2 shadow text-xl text-white">
      <h3 className="font-bold pl-2">Analytics</h3>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-green-600 text-white">
                <svg
                  className="fill-current h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">
                Total Revenue
              </h5>
              <h3 className="font-bold text-3xl">
                $3249{" "}
                <span className="text-green-500">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-orange-100 border-b-4 border-orange-500 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-orange-600 text-white">
                <svg
                  className="fill-current h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
              <h3 className="font-bold text-3xl">
                249{" "}
                <span className="text-orange-500">
                  <i className="fas fa-exchange-alt"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-yellow-600 text-white">
                <svg
                  className="fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">New Users</h5>
              <h3 className="font-bold text-3xl">
                2{" "}
                <span className="text-yellow-600">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-blue-100 border-b-4 border-blue-500 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-blue-600 text-white">
                <svg
                  className="fill-current h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">
                Server Uptime
              </h5>
              <h3 className="font-bold text-3xl">152 days</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-indigo-600 text-white">
                <svg
                  className="fill-current h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">To Do List</h5>
              <h3 className="font-bold text-3xl">7 tasks</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        <div className="bg-red-100 border-b-4 border-red-500 rounded-lg shadow-lg p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-red-600 text-white">
                <svg
                  className="fill-current h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h5 className="font-bold uppercase text-gray-600">Issues</h5>
              <h3 className="font-bold text-3xl">
                3{" "}
                <span className="text-red-500">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>


  </Layout>
);
