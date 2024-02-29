import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import CarrImages from "../components/Carr/Images";
import CarrTitleAndDates from "../components/Carr/TitleAndDates";
import CarrInfo from "../components/Carr/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";


const Carr = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Drake Carr" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <CarrTitleAndDates />
              <CarrInfo />
            </div>
          }
          renderImageCol={() =>
            <CarrImages />
          }
        /> :
        <MobileView >
          <CarrTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/Carr/showcard.png'} alt='Drake Carr Showcard' />
            <label>Les Walk-ins showcard by <a href="https://patrikas.pro/">John Paul Patrikas</a></label>
          </div>
          <CarrInfo />
        </MobileView>
      }
    </div >)
}

export default Carr
