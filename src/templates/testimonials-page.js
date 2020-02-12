import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const TestimonialsPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="bg-black text-blue-grey-200">
      <div className="max-w-xl px-4 mx-auto py-16">
        <h2 className="font-bold text-2xl sm:text-4xl">{title}</h2>
        <PageContent
          className="about content text-blue-grey-200"
          content={content}
        />
      </div>
    </section>
  );
};

TestimonialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const TestimonialsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TestimonialsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

TestimonialsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TestimonialsPage;

export const TestimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
