import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useLocation } from '@reach/router';

const Nav = () => {
    const { pathname } = useLocation();
    const data = useStaticQuery(graphql`
        {
            allContentfulExhibit(sort: {startDate: DESC}, filter: {node_locale: {eq: "en-US"}}) {
                nodes {
                    id
                    title
                    startDate
                }
            }
        }
    `);

    const exhibits = data.allContentfulExhibit.nodes;

    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin">
            <Link
                to={`/about`}
                className={`mb-2 ${pathname === '/about' ? 'font-black' : ''}`}
            >
                About
            </Link>
            <div>Exhibitions</div>
            {exhibits.map((exhibit: any) => {
                const slug = exhibit.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <Link
                        key={exhibit.id}
                        className={`ml-2 mb-2 ${pathname === `/exhibit/${slug}` ? 'font-black' : ''}`}
                        to={`/exhibit/${slug}`}
                    >
                        {exhibit.title}
                    </Link>
                );
            })}
        </div>
    )
}

export default Nav