import { resolveUrl } from "./url"

const SITE_URL = "https://www.mariposa.gallery"

export const artGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: "Mariposa Gallery",
  url: SITE_URL,
  location: [
    {
      "@type": "Place",
      name: "Mariposa Gallery Los Angeles",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2700 N Beachwood Drive",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "Mariposa Gallery New York",
      address: {
        "@type": "PostalAddress",
        streetAddress: "150 W 28th Street",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
    },
  ],
}

export function getPersonJsonLd({
  name,
  description,
  image,
  pathname,
}: {
  name: string
  description?: string
  image?: string
  pathname: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    ...(description ? { description } : {}),
    ...(image ? { image: resolveUrl(SITE_URL, image) } : {}),
    url: resolveUrl(SITE_URL, pathname),
  }
}
