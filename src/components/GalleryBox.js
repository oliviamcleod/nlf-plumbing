import React from "react"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"

import css from "./GalleryBox.module.css"

import images from "../images/workPhotos"

function GalleryBox({ title, main, list, page }) {
  return (
    <div className={css.infoBox}>
      <Link to={page} className={css.link}>
        {" "}
        <h5 className={css.title}>{title}</h5>
      </Link>
      <div className={css.photo}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          showBullets={true}
        />
      </div>
    </div>
  )
}

export default GalleryBox
