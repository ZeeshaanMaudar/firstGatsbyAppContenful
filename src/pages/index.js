import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage;

export const query = graphql`
 query SiteMeta {
  site {
    siteMetadata {
      title
      description
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
        createdAt(formatString: "MMMM DD YYYY")
        body {
          childMarkdownRemark {
            excerpt
          }
        id
      }
        slug
        id
      }
    }
  }
}
`