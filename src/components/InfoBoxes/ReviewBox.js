import React from "react"
import ImageGallery from "react-image-gallery"

import css from "./InfoBox.module.css"

function ReviewBox({ carousel }) {
  console.log(carousel)
  return (
    <div>
      <ImageGallery items={carousel} />
    </div>
  )
}

export default ReviewBox
