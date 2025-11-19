const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(`
    {
      allContentfulExhibit {
        nodes {
          id
          title
        }
      }
    }
  `)

  result.data.allContentfulExhibit.nodes.forEach((exhibit) => {
    const slug = exhibit.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    createPage({
      path: `/exhibit/${slug}`,
      component: path.resolve('./src/templates/exhibit.tsx'),
      context: {
        id: exhibit.id,
      },
    })
  })
}