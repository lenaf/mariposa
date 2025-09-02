import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import DesktopView from "../components/DesktopView"
import PeterBerlinTitleAndDates from "../components/PeterBerlin/TitleAndDates"
import PeterBerlinInfo from "../components/PeterBerlin/Info"
import MobileView from "../components/MobileView"
import { StaticImage } from "gatsby-plugin-image"
import PeterBerlinImages from "../components/PeterBerlin/Images"

const PeterBerlin = () => {
  const breakpoints = useBreakpoint()
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO
        title="Mariposa Gallery"
        description="Peter Berlin: Public Display, Independent 20th Century"
      />
      {breakpoints.desktop ? (
        <DesktopView
          renderTextCol={() => (
            <div>
              <PeterBerlinTitleAndDates />
              <PeterBerlinInfo />
            </div>
          )}
          renderImageCol={() => <PeterBerlinImages />}
        />
      ) : (
        <MobileView>
          <PeterBerlinTitleAndDates />
          <div className="mb-9">
            <StaticImage
              placeholder="blurred"
              className="mb-2"
              src={"../images/peter-berlin/card.jpg"}
              alt="Peter Berlin"
            />
          </div>
          <PeterBerlinInfo />
        </MobileView>
      )}
    </div>
  )
}

export default PeterBerlin
