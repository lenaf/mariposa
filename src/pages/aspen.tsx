import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import AspenTitleAndDates from "../components/Aspen/TitleAndDates";
import AspenInfo from "../components/Aspen/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";
import AspenImages from "../components/Aspen/Images";


const Aspen = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Another Man’s Treasure" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <AspenTitleAndDates />
              <AspenInfo />
            </div>
          }
          renderImageCol={() =>
            <AspenImages />
          }
        /> :
        <MobileView >
          <AspenTitleAndDates />
          <div className="mb-9">
            <StaticImage
              placeholder="blurred"
              aspectRatio={.66}
              className="mb-2" src={'../images/aspen/card.jpg'} alt='Aspen' />
          </div>
          <AspenInfo />
        </MobileView>
      }
    </div >)
}

export default Aspen
