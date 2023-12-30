import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin	">
            <Link
                className={`hover:font-semibold ${pathname === `/about` ? 'font-semibold' : ''}`}
                to={`/about`}
            >
                About
            </Link>
            <Link
                className="hover:font-semibold"
                to={`/schlesinger`}
            >
                Past
            </Link>
            <Link
                className={`ml-2 hover:font-semibold ${pathname === `/schlesinger` ? 'font-semibold' : ''}`}
                to={`/schlesinger`}
            >
                Peter Schlesinger: France 1969 - 1979
            </Link>
        </div>
    )
}

export default Nav


