import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PostPage = ({ data }) => {
  const { post } = data;
  const image = getImage(post.mainImage.asset);
  return (
    <main>
      <h1>{post.title}</h1>
      <GatsbyImage image={image} alt={post.title} />
    </main>
  );
};

export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      categories {
        title
        description
        id
      }
      body {
        children {
          text
        }
      }
      slug {
        _key
        _type
        current
      }
      mainImage {
        asset {
          gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;

export default PostPage;
export const Head = (post) => <title>Pushing Primitives: {post.title}</title>;
