import React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import { useLocation } from '@reach/router';

const Layout = ({ children, }) => {
  const location = useLocation();
  return (
    <div className="text-xs md:text-15 font-vremena">
      <div className="md:flex md:gap-4">
        <nav className="pt-18 md:pt-10.5 px-9.5 pb-9 md:max-w-285">
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
        </nav>
        <main className="grow">{children}</main>
      </div>
      <footer className={`${location.pathname === '/about' ? 'hidden' : ''} md:block font-glaston text-center md:text-left p-6 `}>
        <div>50 Rue de Turenne, Paris 3</div>
      </footer>
    </div>
  )
}

export default Layout


