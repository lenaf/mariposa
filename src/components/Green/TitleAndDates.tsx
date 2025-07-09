import React from "react"
import { IExhibit } from "../../pages/Exhibit";

const TitleAndDates = ({ exhibit }: { exhibit: IExhibit }) => {
  const startDate = exhibit.startDate ? new Date(exhibit.startDate) : undefined;
  const endDate = exhibit.endDate ? new Date(exhibit.endDate) : undefined;
  return (
    <div className="mb-4.5 text-center md:text-left w-full ">
      <div>{exhibit.title}</div>
      <div>
        <span className="font-glaston">{startDate?.toLocaleDateString('default', { month: 'long' })} </span>
        <span>{`${startDate?.getDate()}, ${startDate?.getFullYear()} - `} </span>
        <span className="font-glaston">{endDate?.toLocaleDateString('default', { month: 'long' })} </span>
        <span>{`${startDate?.getDate()}, ${startDate?.getFullYear()}`}, 10-6pm</span>
      </div>
      <div>Reception: <span className="font-glaston">February </span> 18, 6-8pm </div>
      <div>{exhibit.location}</div>
    </div>
  )
}

export default TitleAndDates
