import React from "react"

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import DesktopView from "./DesktopView";
import Info from "./Info";
import MobileView from "./MobileView";
import TitleAndDates from "./TitleAndDates";
import { ImageDataLike } from "gatsby-plugin-image";
import Image, { Images } from './Image'
import Press from "./Press";


export interface IExhibit {
  title: string;
  startDate?: string;
  endDate?: string;
  hours?: string;
  receptionDate?: string;
  receptionHours?: string;
  location?: any;
  heroImage?: ImageDataLike & { title: string };
  information?: any;
  press?: any;
  images?: (ImageDataLike & { title: string })[];
}

const Exhibit = ({ exhibit }: { exhibit: IExhibit }) => {
  const breakpoints = useBreakpoint();

  return (
    <div className="text-xs md:text-15 font-vremena">
      {breakpoints.desktop ?
        <DesktopView
          renderTextCol={() =>
            <div>
              <TitleAndDates exhibit={exhibit} />
              <Press exhibit={exhibit} />
              <Info exhibit={exhibit} />
            </div>
          }
          renderImageCol={() =>
            <Images images={exhibit.images} heroImage={exhibit.heroImage} />
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
          <Press exhibit={exhibit} />
          <Info exhibit={exhibit} />
          <Images images={exhibit.images} />
        </MobileView >
      }
    </div >)
}

export default Exhibit
