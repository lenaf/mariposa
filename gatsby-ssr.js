/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="Glaston"
            rel="preload"
            href="/fonts/Glaston.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
        />,
        <link
            key="Minion"
            rel="preload"
            href="/fonts/MinionPro-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
        />,
        <link
            key="Vremena"
            rel="preload"
            href="/fonts/VremenaGroteskBook.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
        />
    ]);
};