/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Layout from '../components/layout'

export default () => (
  <Layout title="Contact us">
    <div className="container px-2 md:px-32 my-8">
      <h1 className="text-4xl my-5 text-center md:text-left">Contact Us</h1>
      <h2 className="mt-6 text-2xl text-center font-semibold leading-none">
        We would love to hear from you !
      </h2>

      <div className="flex flex-col mt-6">
        <div className="md:w-1/3 pb-3 px-4 md:px-1 mx-auto">
          <p className="my-3 text-center">
            +1 (310)-751-4735 <br />
            churchinfo@mail.com
          </p>
        </div>
        <div className="md:w-2/3 pl-5 px-4 md:px-1 mx-auto">
          <p className="mb-3 text-justify md:text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </p>
        </div>
      </div>
      
    </div>
  </Layout>
);