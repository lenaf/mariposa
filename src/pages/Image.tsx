import React from "react"

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

export type ImageProps = { image?: ImageDataLike & { title: string } } & { className?: string }

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

export default Image;
