import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { graphql } from 'gatsby';

const PostPage = ({ data }) => {
  console.log(title);
  return (
    <main>
      <h1>{data.title}</h1>
    </main>
  );
};

export default PostPage;
export const Head = () => <title>Pushing Primitives: Photography by Thomas Sweeney</title>;
