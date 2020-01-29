import React from "react";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <section className="self-stretch flex flex-col justify-center items-center py-16">
      <h1 className="text-3xl sm:text-5xl font-bold px-4 py-2">Thank you!</h1>
      <p className="text-lg sm:text-xl text-center font-semibold bg-gray-100 bg-gray-100 px-2 py-1 mt-5">
        This is a custom thank you page for form submissions
      </p>
    </section>
  </Layout>
);
