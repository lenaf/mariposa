import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin	">
            <div> <Link className={pathname === `/about` ? 'font-bold' : ''} to={`/about`}> About </Link> </div>
            <div> <Link to={`/schlesinger`}> Past </Link>   </div>
            <div className="ml-2"> <Link className={pathname === `/schlesinger` ? 'font-bold' : ''} to={`/schlesinger`} > Peter Schlesinger: France 1969 - 1979 </Link> </div>
        </div>
    )
}

export default Nav


