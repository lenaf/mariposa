const path = require('path')
const { slugify } = require('./src/utils/slug')

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
    const slug = slugify(exhibit.title)
    
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
    const slug = slugify(artist.name)
    
    createPage({
      path: `/artist/${slug}`,
      component: path.resolve('./src/templates/artist.tsx'),
      context: {
        id: artist.id,
      },
    })
  })
}