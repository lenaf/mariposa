import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Butterfly from "../components/butterfly"
import Logo from "../components/logo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mariposa Gallery" />
      <div className={`text-lg text-center h-full flex flex-col justify-center items-center`}>
        <h1><Logo /></h1>
        <div className="font-vremena leading-6 mb-6">
          <div>presents our inaugural exhibition,</div>
          <div><i>Peter Schlesinger: France 1969 - 1979</i></div>
          <div> opening October 15, 2023.</div>
        </div>
        <div className="font-glaston leading-5 mb-2">
          <p>50 Rue de Turenne,</p>
          <p> Paris 3</p>
        </div>
        <Butterfly />
      </div>
    </Layout >
  )
}

export default IndexPage
