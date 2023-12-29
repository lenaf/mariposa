import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import burnell from "../images/burnell.jpg";


const Burnell = () => {
  return (
    <Layout>
      <SEO title="Mariposa Gallery" description="Carly Burnell" />
      <div className="flex justify-around gap-6 lg:gap-10 md:h-screen">
        <div className="w-64 md:max-w-543 md:w-1/2 lg:w-1/2 flex flex-col overflow-scroll">
          <div className="md:px-4 md:mt-14 ">

            {/* TITLE AND DATES */}
            <div className="mb-4.5 text-center md:text-left w-full ">
              <div>Carly Burnell</div>
              <div>
                <span className="font-glaston">January </span>
                <span>16, 2024 - </span>
                <span className="font-glaston">February </span>
                <span>25, 2024</span>
              </div>
            </div>

            {/* MOBILE ONLY IMAGE */}
            <div className="md:hidden">
              <img className="mb-2" src={burnell} alt="Burnell Photograph" />
            </div>

          </div>
        </div>

        {/* DESKTOP ONLY IMAGE */}
        <div className="hidden md:flex md:w-1/3 lg:w-1/2 max-w-395 flex-col h-full overflow-scroll">
          <div className="px-4 mt-16 mb-4">
            <img className="mb-2 mx-auto" src={burnell} alt="Burnell Photograph" />
          </div>
        </div>

      </div>
    </Layout >)
}

export default Burnell
