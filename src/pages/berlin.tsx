import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import BerlinImages from "../components/Berlin/Images";
import BerlinTitleAndDates from "../components/Berlin/TitleAndDates";
import BerlinInfo from "../components/Berlin/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";
import BerlinPress from "../components/Berlin/Press";


const Berlin = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Peter Berlin: Permission to Stare" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <BerlinTitleAndDates />
              <BerlinPress />
              <BerlinInfo />
            </div>
          }
          renderImageCol={() =>
            <BerlinImages />
          }
        /> :
        <MobileView >
          <BerlinTitleAndDates />
          <div className="mb-9">
            <StaticImage
              placeholder="blurred"
              aspectRatio={.66}
              className="mb-2" src={'../images/berlin/berlin.jpg'} alt='Berlin' />
          </div>
          <BerlinPress />
          <BerlinInfo />
          <BerlinImages />
        </MobileView>
      }
    </div >)
}

export default Berlin
