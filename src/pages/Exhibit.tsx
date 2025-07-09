import React from "react"

import SEO from "../components/seo"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "../components/DesktopView";
import GreenImages from "../components/Green/Images";
import GreenInfo from "../components/Green/Info";
import MobileView from "../components/MobileView";
import GreenPress from "../components/Green/Press";
import TitleAndDates from "../components/Green/TitleAndDates";
import { ImageDataLike } from "gatsby-plugin-image";
import Image from './Image'
import RichText from "./RichText";
import { renderRichText } from 'gatsby-source-contentful/rich-text'


export interface IExhibit {
  title: string;
  startDate?: string;
  endDate?: string;
  receptionDate?: string;
  location?: string;
  heroImage?: ImageDataLike & { title: string };
  information?: any;
  press?: any;
  images?: (ImageDataLike & { title: string })[];
}

const Exhibit = ({ exhibit }: { exhibit: IExhibit }) => {
  const breakpoints = useBreakpoint();

  return (
    <div className="text-xs md:text-15 font-vremena">
      <SEO title="Mariposa Gallery" description={exhibit.title} />
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <TitleAndDates exhibit={exhibit} />
              <RichText content={exhibit.information.content} />
              {renderRichText(exhibit.information)}
              {/* <GreenPress />
              <GreenInfo /> */}
            </div>
          }
          renderImageCol={() =>
            <GreenImages />
          }
        /> :
        < MobileView >
          <TitleAndDates exhibit={exhibit} />
          <div className="mb-9">
            <Image
              image={exhibit.heroImage}
              className="mb-2"
            />
          </div>
          <GreenPress />
          <GreenInfo />
          <GreenImages />
        </MobileView >
      }
    </div >)
}

export default Exhibit
