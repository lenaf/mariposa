import React from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  React.useEffect(() => {
    navigate("/about")
  }, [])

  return null
}

export default IndexPage
