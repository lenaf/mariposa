import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import Nav from "./nav";

const Layout = ({ children, }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="text-xs md:text-15 font-vremena">
      <div className="md:flex md:gap-4">
        <nav className="flex flex-col pt-18 md:pt-10.5 px-9.5 pb-9 md:max-w-80">
          <div className="flex items-center justify-center md:justify-start md:mb-6">
            <button className="absolute left-6 md:hidden" onClick={() => setIsMobileNavOpen(true)}>
              <CiMenuBurger size={20} />
            </button>
            <Link className="shrink flex" to={`/`}>
              <h1><Logo className="flex justify-center md:justify-start" /></h1>
            </Link>
          </div>
          <div className="hidden md:block"><Nav /></div>
          <div className={`hidden md:block text-base font-glaston text-center mt-auto`}>
            50 Rue de Turenne, Paris 3
          </div>

          {/* mobile nav */}
          <div
            onClick={() => setIsMobileNavOpen(false)}
            className={`${isMobileNavOpen ? '' : '-translate-x-full'} fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-full dark:bg-gray-800`}
          >
            <div className="flex justify-end">
              <button>
                <span className="sr-only">Close menu</span>
                <button onClick={() => setIsMobileNavOpen(false)}>
                  <VscChromeClose size={16} />
                </button>
              </button>
            </div>
            <Nav />
          </div>

        </nav>
        <main className="grow">{children}</main>
      </div >
    </div >
  )
}

export default Layout


