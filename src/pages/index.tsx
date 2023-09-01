import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/logo"

const IndexPage = () => {
  const colorSchemeClass =
    [
      'fill-electricBlue text-electricBlue bg-yellow',
      'fill-lightPink text-lightPink bg-brown',
      'fill-white text-white bg-mutedBlue',
      'fill-red text-red bg-hotPink'
    ][Math.floor(Math.random() * 4)]

  return (
    <Layout>
      <SEO title="Mariposa Gallery" />
      <div className={`${colorSchemeClass} text-lg text-center h-full flex flex-col justify-center items-center`}>
        <h1 className="font-minion mb-4">MARIPOSA</h1>
        <div className="font-vremena mb-6">
          <p>presents our inaugural exhibition,</p>
          <p>Peter Schlesinger: France 1969 - 1979</p>
          <p> opening October 15, 2023</p>
        </div>
        <div className="font-glaston mb-4">
          <p>50 Rue de Turenne.</p>
          <p> Paris, 3.</p>
        </div>
        <Logo />
      </div>
    </Layout >
  )
}

export default IndexPage
