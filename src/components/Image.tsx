import React from "react"

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

export type ImageProps = { image?: ImageDataLike & { title: string } } & { className?: string }
export type ImagesProps = { images?: (ImageDataLike & { title: string })[] } & { className?: string }

export const Image = ({ image, className }: ImageProps) => {
  if (!image) return null;

  const gatsbyImage = getImage(image);

  return (
    gatsbyImage ?
      <GatsbyImage
        image={gatsbyImage}
        className={className}
        alt={image.title}
      />
      : null
  )
}

export const Images = ({ images, heroImage }: ImagesProps & { heroImage?: ImageDataLike & { title: string } }) => {

  if (!images || images.length === 0) {
    return heroImage ? <Image image={heroImage} className="mb-2" /> : null;
  }

  return (
    <div>{images.map((image, index) => <Image image={image} key={index} className="mb-2" />)}</div>
  )
}
export default Image;
