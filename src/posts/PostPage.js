import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

class PostPage extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <Layout location={location}>
        <span>{data.contentfulBlogPost.createdAt}</span>
        <h1>{data.contentfulBlogPost.title}</h1>
        {/* <p>{data.contentfulBlogPost.childMarkdownRemark.excerpt}</p> */}
        <div dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html
          }} />
      </Layout>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      createdAt(formatString: "MMMM DD YYYY")
      title
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      id
    }
  }
}
`