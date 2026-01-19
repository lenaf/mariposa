import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import SEO from "../components/seo"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import DesktopView from "../components/DesktopView"
import MobileView from "../components/MobileView"

const ArtistPage = ({ data }: any) => {
  const artist = data.contentfulArtists
  const breakpoints = useBreakpoint()

  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title={artist.name} />
      {breakpoints.desktop ? (
        <DesktopView
          renderTextCol={() => (
            <div>
              <div className="mb-4.5 text-center md:text-left w-full">
                <div className="mb-4">{artist.name}</div>
              </div>
              {artist.bio && (
                <div>
                  {renderRichText(artist.bio, {
                    renderMark: {
                      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
                    },
                    renderNode: {
                      [BLOCKS.PARAGRAPH]: (node, children) => (
                        <p className="mb-4">{children}</p>
                      ),
                    },
                  })}
                </div>
              )}
            </div>
          )}
          renderImageCol={() => (
            <div className="flex flex-col">
              {artist.works?.map((work: any) => (
                <div key={work.id} className="mb-4">
                  {work.image && (
                    <GatsbyImage
                      image={work.image.gatsbyImageData}
                      alt={work.title || work.image.title}
                      className="mb-2"
                    />
                  )}
                  {work.caption && (
                    <div className="text-sm">
                      {renderRichText(work.caption, {
                        renderMark: {
                          [MARKS.BOLD]: text => (
                            <b className="font-bold">{text}</b>
                          ),
                          [MARKS.ITALIC]: text => <i>{text}</i>,
                        },
                        renderNode: {
                          [BLOCKS.PARAGRAPH]: (node, children) => (
                            <p>{children}</p>
                          ),
                        },
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        />
      ) : (
        <MobileView>
          <div className="mb-4.5 text-center md:text-left w-full">
            <div className="mb-4">{artist.name}</div>
          </div>
          {artist.bio && (
            <div className="mb-8">
              {renderRichText(artist.bio, {
                renderMark: {
                  [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
                },
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (node, children) => (
                    <p className="mb-4">{children}</p>
                  ),
                },
              })}
            </div>
          )}
          {artist.works?.map((work: any) => (
            <div key={work.id} className="mb-4">
              {work.image && (
                <GatsbyImage
                  image={work.image.gatsbyImageData}
                  alt={work.title || work.image.title}
                  className="mb-2"
                />
              )}
              {work.caption && (
                <div className="text-sm">
                  {renderRichText(work.caption, {
                    renderMark: {
                      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
                      [MARKS.ITALIC]: text => <i>{text}</i>,
                    },
                    renderNode: {
                      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
                    },
                  })}
                </div>
              )}
            </div>
          ))}
        </MobileView>
      )}
    </div>
  )
}

export const query = graphql`
  query ($id: String!) {
    contentfulArtists(id: { eq: $id }) {
      id
      name
      bio {
        raw
      }
      works {
        id
        title
        caption {
          raw
        }
        image {
          title
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO])
        }
      }
    }
  }
`

export default ArtistPage
