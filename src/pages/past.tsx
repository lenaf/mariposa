import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pSchlesinger from "../images/pSchlesinger.png";
import butterfly from "../images/butterfly.png";



const Past = () => {
  return (
    <Layout>
      <SEO title="Mariposa Gallery" description="Past Exhibitions" />
      <div className="flex justify-around gap-6 lg:gap-10 md:h-screen">
        <div className="w-64 md:max-w-543 md:w-2/3 lg:w-1/2 flex flex-col overflow-scroll">
          <div className="md:px-4 md:mt-14 ">
            {/* TITLE AND DATES */}
            <div className="mb-4.5 text-center md:text-left w-full">
              <div>Peter Schlesinger: France 1969 - 1979</div>
              <div>
                <span className="font-glaston">October </span>
                <span>15, 2023 - </span>
                <span className="font-glaston">November </span>
                <span>25, 2023</span>
              </div>
            </div>

            {/* MOBILE ONLY IMAGE */}
            <div className="md:hidden">
              <img className="mb-2" src={pSchlesinger} alt="Peter Schlesinger Photograph" />
              <div className="text-center mb-9">Tina Chow and Paloma Picasso reapplying their makeup during Paloma’s wedding at Karl Lagerfeld’s apartment (1978)</div>
            </div>

            {/* PRESS */}
            <div className="mb-4.5 flex gap-0.5	align-center">
              <img width={'15px'} src={butterfly} />PRESS<img width={'15px'} src={butterfly} />
            </div>
            <a className="mb-4" target="_blank" href="https://www.interviewmagazine.com/art/peter-schlesinger-and-manolo-blahnik-look-back-on-the-golden-age-of-paris" >
              Peter Schlesinger and Manolo Blahnik Look Back on the Golden Age of Paris, Interview Magazine
            </a>
            <a className="mb-4" target="_blank" href="https://www.vogue.fr/article/peter-schlesinger-david-hockney-andy-warhol-galerie-mariposa-paris-photographie-exposition-grace-coddington-paloma-picasso"  >
              Les Clichés de Peter Schlesinger S'exposent à Paris, Vogue
            </a>
            <a className="mb-4" target="_blank" href="https://www.harpersbazaar.fr/culture/rencontre-avec-lartiste-et-icone-peter-schlesinger_1267">
              Rencontre avec l'Artiste et Icône Peter Schlesinger, Harper Bazaar
            </a>
            <a className="mb-9" target="_blank" href="https://airmail.news/arts-intel/events/peter-schlesinger-france-1969-1979">
              Peter Schlesinger: France 1969–1979, The Arts Intel Report
            </a>

            {/* INFO */}
            <div className="mb-4.5 flex gap-0.5	align-center">
              <img width={'15px'} src={butterfly} />INFORMATION<img width={'15px'} src={butterfly} />
            </div>
            <div className="mb-4">“The work of the young is to be alive to the present, and the present after that. That’s the work of the artist, too– to immerse himself in the moment. Peter’s pictures document not only his openness to the current events and fleeting wisdom of the past, but to what he saw and what he made of it.” </div>
            <div className="mb-4">
              <span className="font-glaston">Hilton Als</span>, foreword to A Photographic Memory
            </div>
            <div className="mb-4">Paris based Mariposa Gallery is pleased to announce their inaugural exhibition featuring photographs by the artist Peter Schlesinger. The presentation will include images taken by Schlesinger on trips to France from 1969 - 1979. Schlesinger, a noted ceramicist and painter is also known for being the subject in numerous notable canvases by the British painter David Hockney. This will be the first exhibition of Schlesinger’s photography in Europe.</div>
            <div className="mb-4">Schlesinger’s photographic journey began in 1966 when as an 18-year-old student he met the artist David Hockney, then a visiting professor at UCLA. After a short period living together in Los Angeles, the two then moved to London where Schlesinger was introduced to the city’s fashionable bohemian society. There, as well as on trips, Schlesinger met and photographed some of the great personalities of the day, including Hockney, Cecil Beaton, Christopher Isherwood, Amanda Lear, and Andy Warhol. His photography is the subject of two volumes A Checkered Past (2003), and Peter Schlesinger: A Photographic Memory 1968–1989 (2015).</div>
            <div className="mb-4">Schlesinger approached photography pragmatically– he used amateur print film and processed the images at his corner pharmacy. With this informal strategy, akin to Jacques-Henri Lartigue, whom the artist met and photographed in 1971, Schlesinger captured larger-than-life figures with intimacy and immediacy, their humanity frozen in time with the click of his lens. The images convey the clear emotional state of their maker: hopeful, romantic, imaginative, free.</div>

          </div>
        </div>

        {/* DESKTOP ONLY IMAGE */}
        <div className="hidden md:flex mx-16 md:w-1/3 lg:w-1/2 max-w-395 flex-col h-full overflow-scroll">
          <div className="px-4 mt-16">
            <img className="mb-2 mx-auto" src={pSchlesinger} alt="Peter Schlesinger Photograph" />
            <div className="text-center px-4">Tina Chow and Paloma Picasso reapplying their makeup during Paloma’s wedding at Karl Lagerfeld’s apartment (1978)</div>
          </div>
        </div>

      </div>
    </Layout >
  )
}

export default Past
