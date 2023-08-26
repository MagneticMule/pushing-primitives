import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from './../components/Layout';

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <h1>Pushing Primitives: Photography by Thomas Sweeney</h1>
      </Layout>
    </main>
  );
};

export default IndexPage;
export const Head = () => <title>Pushing Primitives: Photography by Thomas Sweeney</title>;
