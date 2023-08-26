import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Gallery = styled.section`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ImageCard = styled.div``;

const GalleryPage = ({ data }) => {
  console.log(data.posts.nodes);
  const posts = data.posts.nodes;
  return (
    <main>
      <Gallery>
        {posts.map((post, index: Number) => (
          <div>
            <h3>{post.title}</h3>
            {console.log(post.slug.current);}
            <Link to='{post.slug.current}'>
              <GatsbyImage image={post.mainImage.asset.gatsbyImageData} alt='{post.blurb}' />
            </Link>
          </div>
        ))}
      </Gallery>
    </main>
  );
};

export const query = graphql`
  query PhotoQuery {
    posts: allSanityPost {
      nodes {
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
            gatsbyImageData(width: 320, height: 240, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export default GalleryPage;
export const Head = () => <title>Pushing Primitives: Gallery</title>;