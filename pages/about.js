/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";

export default () => (
  <Layout title="About us" isHome={false}>
    <div className="container px-2 md:px-32 my-8">
      <h1 className="text-4xl text-center md:text-left">
        Bethlehem Tabernacle
      </h1>

      <div className="flex flex-col md:flex-row mt-16">
        <div className="md:w-1/2 px-4 md:pr-5 mx-auto">
          <p className="mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
          <p className="my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>

          <h2 className="my-5 text-3xl font-semibold">Our History</h2>
          <p className="my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
          <p className="my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="md:w-1/2 pb-3 px-4 md:px-1 mx-auto">
          <img
            className="h-full w-full object-cover"
            src="./images/todo/about-img.jpg"
            alt="Bethlehem Tabernacle"
          />
        </div>
      </div>
    </div>
  </Layout>
);
