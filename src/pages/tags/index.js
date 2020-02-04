import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section>
      <Helmet title={`Tags | ${title}`} />
      <div className="max-w-xl mx-auto px-10 py-16">
        <h1 className="text-2xl sm:text-3xl font-semibold">Tags</h1>
        <ul className="font-semibold text-blue-600 mt-10">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link
                className="inline-block hover:bg-blue-200 focus:outline-none focus:bg-blue-200 rounded px-5 mt-1"
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
