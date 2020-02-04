import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="inline-block font-semibold text-blue-600  hover:bg-blue-200 focus:outline-none focus:bg-blue-200 rounded mt-1 ">
            {post.node.frontmatter.title}
          </h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="max-w-xl px-4 py-16 mx-auto">
            <h3 className="text-lg sm:text-3xl font-semibold">{tagHeader}</h3>
            <ul className="px-6 mt-10">{postLinks}</ul>
            <p className="mt-10">
              <Link
                className="font-semibold text-blue-700 px-4 py-2 rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-100"
                to="/tags/"
              >
                Browse all tags
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
