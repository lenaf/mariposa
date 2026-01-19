const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const exhibitResult = await graphql(`
    {
      allContentfulExhibit {
        nodes {
          id
          title
        }
      }
    }
  `)

  exhibitResult.data.allContentfulExhibit.nodes.forEach((exhibit) => {
    const slug = exhibit.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    createPage({
      path: `/exhibit/${slug}`,
      component: path.resolve('./src/templates/exhibit.tsx'),
      context: {
        id: exhibit.id,
      },
    })
  })

  const artistResult = await graphql(`
    {
      allContentfulArtists {
        nodes {
          id
          name
        }
      }
    }
  `)

  artistResult.data.allContentfulArtists.nodes.forEach((artist) => {
    const slug = artist.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    createPage({
      path: `/artist/${slug}`,
      component: path.resolve('./src/templates/artist.tsx'),
      context: {
        id: artist.id,
      },
    })
  })
}