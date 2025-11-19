import React from "react"
import TextSection from "./TextSection"
import { IExhibit } from "./Exhibit"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

const Info = ({ exhibit }: { exhibit: IExhibit }) => (
  <TextSection headingText={'INFORMATION'}>

    {exhibit.information && renderRichText(exhibit.information, {
      renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
      },
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
          const { uri } = node.data
          return (
            <a href={uri} className="underline">
              {children}
            </a>
          )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return <h2>{children}</h2>
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
          return <p className="mb-4">{children}</p>
        },
      },
    })}


  </TextSection>
)

export default Info