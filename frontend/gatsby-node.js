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
  }
`)


  data.posts.nodes.forEach(post => {
    const slug = post.slug.current;
    const title = post.title;
    console.log("Creating photograph at " + slug);
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/templates/post.tsx`),
      context: {
        slug: slug,
        title: title
      },
    })
  })
}