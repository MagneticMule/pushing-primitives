exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
            query PhotoQuery{
              allSanityPost {
                edges {
                  node {
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
                        gatsbyImage(width: 1200)
                      }
                    }
                  }
                }
              }
            }
  `);
  data.allSanityPost.edges.forEach(edge => {
    const slug = edge.node.slug.current
    const title = edge.node.title
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