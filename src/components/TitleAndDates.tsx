import React from "react"
import { IExhibit } from "./Exhibit";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const FormatedDate = ({ date }: { date?: string }) => {
  if (!date) return null;
  const dateArray = date?.split('-');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = monthNames[parseInt(dateArray[1]) - 1];

  return (
    <span>
      <span className="font-glaston">{monthName} </span>
      <span>{`${dateArray[2]}, ${dateArray[0]}`} </span>
    </span>
  )
}

const TitleAndDates = ({ exhibit }: { exhibit: IExhibit }) => {
  return (
    <div className="mb-4.5 text-center md:text-left w-full ">
      <div>{exhibit.title}</div>
      <div>
        <FormatedDate date={exhibit.startDate} /> - <FormatedDate date={exhibit.endDate} />
        <span>{exhibit.hours}</span>
      </div>
      {exhibit.receptionDate &&
        <div>
          <span>Reception: </span>
          <FormatedDate date={exhibit.receptionDate} />
          <span>{exhibit.receptionHours}</span>
        </div>}
      {exhibit.location && <div>{
        renderRichText(exhibit.location)}
      </div>}
    </div>
  )
}

export default TitleAndDates
