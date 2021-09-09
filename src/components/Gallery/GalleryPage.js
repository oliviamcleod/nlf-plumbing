import React from "react"
import ImageGallery from "react-image-gallery"
import css from "./GalleryPage.module.css"

import workPhotos from "../../images/workPhotos"
import NLFCopy from "../../content/content"

function GalleryPage() {
  return (
    <div className={css.galleryPage}>
      <h5 className={css.title}>{NLFCopy.Box2.title}</h5>
      <div>
        <ImageGallery
          items={workPhotos}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </div>
  )
}

export default GalleryPage
