import Layout from "layout";
import React from "react";
import Banner from "./components/banner";
import Clients from "./components/clients";
import Features from "./components/features";

const Home = () => {
  return (
    <Layout>
      <div>
        <Banner />
      </div>

      <div>
        <Clients />
        <Features />
      </div>
    </Layout>
  );
};

export default Home;
