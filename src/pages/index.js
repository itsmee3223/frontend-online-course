import Head from "next/head";

import Header from "src/parts/Header";

import axios from "src/configs/axios";
import Circle from "public/images/circle-accent-1.svg";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>MICRO</title>
        {/* <link rel="icon" href="/public/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-18">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="container mx-auto px-4">
            <Header></Header>
          </div>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get("/courses");
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
