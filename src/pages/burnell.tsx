import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import BurnellImages from "../components/Burnell/Images";
import BurnellTitleAndDates from "../components/Burnell/TitleAndDates";
import BurnellInfo from "../components/Burnell/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";


const Burnell = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Carly Burnell" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <BurnellTitleAndDates />
              <BurnellInfo />
            </div>
          }
          renderImageCol={() =>
            <BurnellImages />
          }
        /> :
        <MobileView >
          <BurnellTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/burnell/FINAL.jpg'} alt='Carly  Burnell Art' />
          </div>
          <BurnellInfo />
          <BurnellImages />
        </MobileView>
      }
    </div >)
}

export default Burnell
