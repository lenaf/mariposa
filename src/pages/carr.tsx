import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import CarrImages from "../components/Carr/Images";
import CarrTitleAndDates from "../components/Carr/TitleAndDates";
import CarrInfo from "../components/Carr/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";
import CarrPress from "../components/Carr/Press";


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
              <CarrPress />
              <CarrInfo />
            </div>
          }
          renderImageCol={() =>
            <div>
              <CarrImages />
              <StaticImage className="mb-2" src={'../images/carr/carr.jpg'} alt='Drake Carr Showcard' />
            </div>
          }
        /> :
        <MobileView >
          <CarrTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/carr/carr.jpg'} alt='Drake Carr Showcard' />
            <label>Les Walk-ins showcard by <a href="https://patrikas.pro/">John Paul Patrikas</a></label>
          </div>
          <CarrPress />
          <CarrInfo />
          <CarrImages />
        </MobileView>
      }
    </div >)
}

export default Carr
