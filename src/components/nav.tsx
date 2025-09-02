import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const Nav = () => {
  const { pathname } = useLocation()
  return (
    <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin">
      <Link
        to={`/about`}
        className={`mb-2 ${pathname === "/about" ? "font-black" : ""}`}
      >
        About
      </Link>
      <Link to={`/berlin-public-display`}>Exhibitions</Link>
      <Link
        className={`ml-2 mb-2 ${
          pathname === "/berlin-public-display" ? "font-black" : ""
        }`}
        to={`/berlin-public-display`}
      >
        Peter Berlin: Public Display, Independent 20th Century
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/aspen" ? "font-black" : ""}`}
        to={`/aspen`}
      >
        Another Man’s Treasure
      </Link>

      <Link
        className={`ml-2 mb-2 ${
          pathname === "/berlin-permission-to-stare" ? "font-black" : ""
        }`}
        to={`/berlin-permission-to-stare`}
      >
        Peter Berlin: Permission to Stare
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/green" ? "font-black" : ""}`}
        to={`/green`}
      >
        Ethan James Green: Bombshell
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/basel" ? "font-black" : ""}`}
        to={`/basel`}
      >
        Basel Social Club 2024
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/culprit" ? "font-black" : ""}`}
        to={`/culprit`}
      >
        Chelsea Culprit: PSYCHOPOMP
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/carr" ? "font-black" : ""}`}
        to={`/carr`}
      >
        Drake Carr: Les Walk-ins
      </Link>
      <Link
        className={`ml-2 mb-2 ${pathname === "/burnell" ? "font-black" : ""}`}
        to={`/burnell`}
      >
        Carly Burnell: où il n’y a rien / where there is nothing
      </Link>
      <Link
        className={`ml-2 ${pathname === "/schlesinger" ? "font-black" : ""}`}
        to={`/schlesinger`}
      >
        Peter Schlesinger: France 1969 - 1979
      </Link>
    </div>
  )
}

export default Nav
