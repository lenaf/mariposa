import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin	">
            <Link
                to={`/about`}
            >
                About
            </Link>
            <Link
                to={`/schlesinger`}
            >
                Past
            </Link>
            <Link
                className={`ml-2 `}
                to={`/schlesinger`}
            >
                Peter Schlesinger: France 1969 - 1979
            </Link>
        </div>
    )
}

export default Nav


