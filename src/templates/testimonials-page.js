import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TestimonialsPageTemplate = ({ title, testimonials }) => {
  return (
    <section className="text-gray-800">
      <div className="max-w-xl px-4 mx-auto py-16">
        <h2 className="font-bold text-2xl sm:text-4xl">{title}</h2>
        <div>
          {testimonials.map(testimonial => (
            <div key={testimonial.client}>
              {testimonial.client} - {testimonial.quote}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TestimonialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.array
};

const TestimonialsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TestimonialsPageTemplate
        title={frontmatter.title}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

TestimonialsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default TestimonialsPage;

export const TestimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        testimonials {
          client
          quote
        }
      }
    }
  }
`;
