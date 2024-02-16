import React from "react"

import SEO from "../components/seo"
import headerImage from "../images/burnell/FINAL.jpg";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import BurnellImages from "../components/Burnell/Images";
import BurnellTitleAndDates from "../components/Burnell/TitleAndDates";
import BurnellInfo from "../components/Burnell/Info";
import MobileView from "../components/MobileView";


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
            <img className="mb-2" src={headerImage} />
          </div>
          <BurnellInfo />
          <BurnellImages />
        </MobileView>
      }
    </div >)
}

export default Burnell
