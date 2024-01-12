import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import burnell from "../images/burnell.jpg";
import butterfly from "../images/butterfly.png";

const Burnell = () => {
  return (
    <Layout>
      <SEO title="Mariposa Gallery" description="Carly Burnell" />
      <div className="flex justify-around gap-6 lg:gap-10 md:h-screen">
        <div className="w-64 md:max-w-543 md:w-1/2 lg:w-1/2 flex flex-col overflow-scroll">
          <div className="md:px-4 md:mt-14 ">

            {/* TITLE AND DATES */}
            <div className="mb-4.5 text-center md:text-left w-full ">
              <div>Carly Burnell: où il n’y a rien / where there is nothing</div>
              <div>
                <span className="font-glaston">January </span>
                <span>16, 2024 - </span>
                <span className="font-glaston">February </span>
                <span>25, 2024</span>
              </div>
            </div>

            {/* MOBILE ONLY IMAGE */}
            <div className="md:hidden mb-9">
              <img className="mb-2" src={burnell} alt="Burnell Photograph" />
            </div>

            {/* INFO */}
            <div className="mb-4.5 flex gap-0.5	align-center">
              <img width={'15px'} src={butterfly} />INFORMATION<img width={'15px'} src={butterfly} />
            </div>
            <div className="mb-4">"The main aspects of art are invisible; the basic nature of art is invisible. The essence of visual art is not seen. The unseen nature of art, and the development of its aspects, reduces thought to all sorts of speculation. The discussion of science is scientific; the discussion of art is superstitious. There is no history. </div>
            <div className="mb-4">What are its dimensions? Is it on a flat plane? Do the mediums recline on the surface or are they perched upon it? Is each medium itself evenly balanced? If the surface is not level, does the tilted plane give rise to a secondary stratum of materials? Is the painting itself symmetrical? If not, does it face outwards or inwards relative to the tilted plane? Does the paint spread from a focal point at the centre towards the peripheral edges? Ostensibly, the contours and drama crescendo at the periphery, however I hesitate to fully commit to this observation. How would I describe the shape of the outermost layer of this mountain-like form - is it pointed, rounded, or flat? Very well - this rigid, rock-shaped silicone and resin alchemical invention is a dense stroke running parallel to the surface plane. And then as I move to the side, it evaporates. In what manner is it seemingly disappearing? More broadly, how do the materials establish this ‘spatial’ environment encompassing the sculpture-painting? When two surfaces proximate, they delineate an area between; separated far enough, the area ceases to be an area. Only a void persists."</div>
            <div className="mb-4">
              <span className="font-glaston"> — After Judd, Schiller, and Derrida</span>
            </div>
            <div className="mb-4">Carly Burnell (b. 1991, Santa Barbara, California) lives and works in New York. She completed her BFA in Fine Arts at Parsons The New School of Design in 2015 and received her MFA from New York University in 2017. Selected solo and two person exhibitions include changeling, Spencer Brownstone Gallery, New York (2022); latent impressions, Spencer Brownstone Gallery, New York (2019); You Have My Eyes, CFCP, Brooklyn (2016); November, 80WSE Project Space, New York (2016). Burnell was featured on David Zwirner’s Platform in 2021, and her work has been included in several group exhibitions in New York, Los Angeles, Miami, and Nashville. Burnell is also a writer and performs with Stanley Love Performance Group.</div>
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
