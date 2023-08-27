import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const PostPage = ({ data }) => {
  const { post } = data;
  console.log(post);
  const image = getImage(post.mainImage.asset);
  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <GatsbyImage image={image} alt={post.title} />
      <p>{post.body}</p>
    </PostContainer>
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
      body: _rawBody
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
