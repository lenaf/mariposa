import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"

const Layout = ({ children, }) => {
  return (
    <div className="text-xs md:text-15 font-vremena">
      <div className="md:flex md:gap-4">
        <nav className="flex flex-col pt-18 md:pt-10.5 px-9.5 pb-9 md:max-w-285">
          <Link to={`/`}>
            <h1><Logo className="flex justify-center md:justify-start mb-6" /></h1>
          </Link>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4.5">
            <Link to={`/about`} className="" >
              About
            </Link>
            <Link to={`/past`} >
              Past
            </Link>
          </div>
          <div className={`hidden md:block text-base font-glaston text-center p-6 mt-auto`}>
            50 Rue de Turenne, Paris 3
          </div>
        </nav>
        <main className="grow">{children}</main>
      </div>
    </div>
  )
}

export default Layout


