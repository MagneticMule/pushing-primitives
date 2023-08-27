exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query PhotoQuery {
    posts: allSanityPost {
      nodes {
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
  }
`)


  data.posts.nodes.forEach(post => {
    const path = `/gallery/${post.slug.current}`;
    const title = post.title;
    console.log("Creating photograph at " + path);
    actions.createPage({
      path,
      component: require.resolve(`./src/pages/templates/single-image.tsx`),
      context: {
        slug: post.slug.current,
        title: title
      },
    })
  })
}