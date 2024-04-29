import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import CulpritImages from "../components/Culprit/Images";
import CulpritTitleAndDates from "../components/Culprit/TitleAndDates";
import CulpritInfo from "../components/Culprit/Info";
import MobileView from "../components/MobileView";
import { StaticImage } from "gatsby-plugin-image";


const Culprit = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Chelsea Culprit" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <CulpritTitleAndDates />
              <CulpritInfo />
            </div>
          }
          renderImageCol={() =>
            <CulpritImages />
          }
        /> :
        <MobileView >
          <CulpritTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/culprit/mobileLead.jpg'} alt='Chelsea Culprit Showcard' />
          </div>
          <CulpritInfo />
          <CulpritImages />
        </MobileView>
      }
    </div >)
}

export default Culprit
