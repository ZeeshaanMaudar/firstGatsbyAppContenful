import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ post }) => (
  <article>
    <h3><Link to={post.slug}>{post.title}</Link></h3>
    <span>{post.createdAt}</span>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
);

export default PostListing;
