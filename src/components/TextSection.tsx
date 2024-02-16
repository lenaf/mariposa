import React from "react"

import butterfly from "../images/butterfly.png";

const TextSection = ({ headingText, children }) => (
  <div>
    <div className="mb-4.5 flex gap-0.5	align-center">
      <img width={'15px'} src={butterfly} />{headingText}<img width={'15px'} src={butterfly} />
    </div>
    {children}
  </div>
)


export default TextSection;