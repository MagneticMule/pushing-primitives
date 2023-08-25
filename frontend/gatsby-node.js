exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query PhotoQuery {
    images: allSanityPost {
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


  data.images.nodes.forEach(image => {
    const slug = image.slug.current;
    const title = image.title;
    console.log("Creating photograph at " + slug);
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/pages/templates/single-image.tsx`),
      context: {
        slug: slug,
        title: title
      },
    })
  })
}