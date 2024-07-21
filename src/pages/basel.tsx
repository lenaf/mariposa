import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import BaselImages from "../components/Basel/Images";
import BaselTitleAndDates from "../components/Basel/TitleAndDates";
import BaselInfo from "../components/Basel/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";


const Basel = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Basel Social Club" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <BaselTitleAndDates />
              <BaselInfo />
            </div>
          }
          renderImageCol={() =>
            <BaselImages />
          }
        /> :
        <MobileView >
          <BaselTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/basel/hero.jpg'} alt='Basel Social Club' />
          </div>
          <BaselInfo />
          <BaselImages />
        </MobileView>
      }
    </div >)
}

export default Basel
