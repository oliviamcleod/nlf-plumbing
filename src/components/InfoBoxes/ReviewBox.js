import React from "react"
import ImageGallery from "react-image-gallery"

import css from "./InfoBox.module.css"

function ReviewBox({ carousel }) {
  return (
    <div>
      <ImageGallery
        items={carousel.map(item => (
          <p>
            {item.review} {item.reviewer}
          </p>
        ))}
      />
    </div>
  )
}

export default ReviewBox
