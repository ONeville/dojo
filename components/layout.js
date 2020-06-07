import Head from "next/head";
import Header from "./header/header";
import SideMenu from "../components/header/side-menu";

export default ({
  children,
  title = "This is the default title",
  isHome = false,
}) => (
  <div className="bg-gray-900 font-sans leading-normal tracking-normal mt-12">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header isHome={isHome} />
    <main className="flex flex-col md:flex-row">
      <SideMenu />
      <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        {children}
      </div>
    </main>
    {/* <Footer /> */}
  </div>
);
