import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          className="w-full bg-cover bg-bottom flex justify-center items-center mt-0"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),url('/img/blog-index.jpg')`,
            height: `26rem`
          }}
        >
          <h1 className="text-blue-grey-050 text-3xl sm:text-5xl font-bold px-6 py-4"
          >
            Blog
          </h1>
        </section>
        <section className="bg-black flex justify-center items-center">
              <BlogRoll />
        </section>
      </Layout>
    )
  }
}
