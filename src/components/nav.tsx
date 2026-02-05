import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useLocation } from '@reach/router';

const Nav = () => {
    const { pathname } = useLocation();
    const [artistsOpen, setArtistsOpen] = useState(false);
    const [exhibitsOpen, setExhibitsOpen] = useState(false);
    
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
    const artists = data.allContentfulArtists.nodes.sort((a: any, b: any) => {
        const lastNameA = a.name.split(' ').pop();
        const lastNameB = b.name.split(' ').pop();
        return lastNameA.localeCompare(lastNameB);
    });

    return (
        <div className="flex flex-col text-start justify-start gap-x-4.5 leading-5 font-thin">
            <div 
                onClick={() => setArtistsOpen(!artistsOpen)}
                className="mb-2 cursor-pointer select-none"
            >
                <span className="inline-block w-3">{artistsOpen ? '▾' : '▸'}</span> Artists
            </div>
            {artistsOpen && artists.map((artist: any) => {
                const slug = artist.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <Link
                        key={artist.id}
                        className={`ml-5 mb-2 block ${pathname === `/artist/${slug}` ? 'font-black' : ''}`}
                        to={`/artist/${slug}`}
                    >
                        {artist.name}
                    </Link>
                );
            })}
            <div 
                onClick={() => setExhibitsOpen(!exhibitsOpen)}
                className="mb-2 cursor-pointer select-none"
            >
                <span className="inline-block w-3">{exhibitsOpen ? '▾' : '▸'}</span> Exhibitions
            </div>
            {exhibitsOpen && exhibits.map((exhibit: any) => {
                const slug = exhibit.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                    <Link
                        key={exhibit.id}
                        className={`ml-5 mb-2 block ${pathname === `/exhibit/${slug}` ? 'font-black' : ''}`}
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