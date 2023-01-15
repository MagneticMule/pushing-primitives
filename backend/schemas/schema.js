
// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import project from './project'
// import author from './author'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  post,
  category,
  project,
  blockContent,
]
