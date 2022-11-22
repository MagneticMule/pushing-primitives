import * as React from 'react';
import type { HeadFC } from 'gatsby';

const AboutPage = () => {
  return (
    <main>
      <h1>Pushing Primitives: About Thomas Sweeney</h1>
      <p>
        I originally started Pushing Primitives in 2005. Like most people that started a photography site back then we
        did it is a means to stay motivated and post images for feedback. This is way before Instagram took over
        everything even vaguely photography related.
      </p>
    </main>
  );
};

export default AboutPage;
export const Head = () => <title>Pushing Primitives: About Thomas Sweeney</title>;
