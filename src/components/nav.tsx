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
            allContentfulArtists(sort: {name: ASC}, filter: {node_locale: {eq: "en-US"}}) {
                nodes {
                    id
                    name
                }
            }
        }
    `);

    const exhibits = data.allContentfulExhibit.nodes;
    const artists = data.allContentfulArtists.nodes;

    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin">
            <div>Artists</div>
            {artists.map((artist: any) => {
                const slug = artist.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <Link
                        key={artist.id}
                        className={`ml-2 mb-2 ${pathname === `/artist/${slug}` ? 'font-black' : ''}`}
                        to={`/artist/${slug}`}
                    >
                        {artist.name}
                    </Link>
                );
            })}
            <div className="mt-4">Exhibitions</div>
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
            <Link
                to={`/about`}
                className={`mt-4 ${pathname === '/about' ? 'font-black' : ''}`}
            >
                About
            </Link>
        </div>
    )
}

export default Nav