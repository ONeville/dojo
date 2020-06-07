/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import { bulletin_row } from "../services/courses";
import BulletinReadOnly from "../components/bulletin/bulletin-read";

export default () => {

  return (
    <Layout title="Bulletin Grade" isHome={false}>
      <div className="container px-2 md:px-32 my-8">
        <h1 className="text-4xl text-center md:text-left">Bulletin</h1>
        <BulletinReadOnly coursesData={bulletin_row} />
      </div>
    </Layout>
  );};
