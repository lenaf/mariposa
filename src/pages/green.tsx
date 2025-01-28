import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import GreenImages from "../components/Green/Images";
import GreenTitleAndDates from "../components/Green/TitleAndDates";
import GreenInfo from "../components/Green/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";


const Green = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Ethan James Green: Bombshell" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <GreenTitleAndDates />
              <GreenInfo />
            </div>
          }
          renderImageCol={() =>
            <GreenImages />
          }
        /> :
        <MobileView >
          <GreenTitleAndDates />
          <div className="mb-9">
            <StaticImage
              placeholder="blurred"
              aspectRatio={.66}
              className="mb-2" src={'../images/green/green.jpg'} alt='Green' />
          </div>
          <GreenInfo />
          {/* <GreenImages /> */}
        </MobileView>
      }
    </div >)
}

export default Green
