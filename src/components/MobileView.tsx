import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import Nav from "./nav";

const MobileView = ({ children, }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div>
      <div >
        <nav className="flex flex-col pt-18 px-9.5 pb-9">
          <div className="flex items-center justify-center md:justify-start md:mb-6">
            <button className="absolute left-6 md:hidden" onClick={() => setIsMobileNavOpen(true)}>
              <CiMenuBurger size={20} />
            </button>
            <Link className="shrink flex" to={`/`}>
              <h1><Logo className="flex justify-center md:justify-start" /></h1>
            </Link>
          </div>

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
        <main className="flex"><div className="w-72 sm:w-96 mx-auto">{children}</div></main>
      </div >
    </div >
  )
}

export default MobileView


