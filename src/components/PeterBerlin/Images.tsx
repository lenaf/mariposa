import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const PeterBerlinImages = () => {
  return (
    <div className="flex flex-col">
      <StaticImage
        placeholder="blurred"
        className="mb-2"
        src={"../../images/peter-berlin/card.jpg"}
        alt="Peter Berlin"
      />
    </div>
  )
}

export default PeterBerlinImages
