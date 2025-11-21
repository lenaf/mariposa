import React from "react"
import TextSection from "./TextSection"
import { IExhibit } from "./Exhibit"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"

const Press = ({ exhibit }: { exhibit: IExhibit }) => {
  if (!exhibit.press) return null
  return (
    <TextSection headingText={"PRESS"}>
      {renderRichText(exhibit.press, {
        renderMark: {
          [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
        },
        renderNode: {
          [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return <a href={uri} target="_blank" rel="noopener noreferrer">{children}</a>
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
}

export default Press
