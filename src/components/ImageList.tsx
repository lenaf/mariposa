import React from "react"

const ImageList = ({ images }) => (
  <div>
    {images.map(image => <img className="mb-2" src={image} />)}
  </div>
)

export default ImageList;