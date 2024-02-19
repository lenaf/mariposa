import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import SchlesingerImages from "../components/Schlesinger/Images";
import SchlesingerTitleAndDates from "../components/Schlesinger/TitleAndDates";
import SchlesingerInfo from "../components/Schlesinger/Info";
import MobileView from "../components/MobileView";
import SchlesingerPress from "../components/Schlesinger/Press";
import { StaticImage } from "gatsby-plugin-image";


const Schlesinger = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description="Peter Schlesinger" />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <SchlesingerTitleAndDates />
              <SchlesingerPress />
              <SchlesingerInfo />
            </div>
          }
          renderImageCol={() =>
            <SchlesingerImages />
          }
        /> :
        <MobileView >
          <SchlesingerTitleAndDates />
          <div className="mb-9">
            <StaticImage className="mb-2" src={'../images/schlesinger/works/C.jpg'} alt='Peter Schlesigner Art' />
          </div>
          <SchlesingerPress />
          <SchlesingerInfo />
          <SchlesingerImages />
        </MobileView>
      }
    </div >)
}

export default Schlesinger
