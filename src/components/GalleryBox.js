import React from "react"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"

import css from "./GalleryBox.module.css"

import images from "../images/workPhotos"

function GalleryBox({ title, main, list, page }) {
  return (
    <Link to={page} className={css.link}>
      {" "}
      <div className={css.infoBox}>
        <h5 className={css.title}>{title}</h5>
      </div>
    </Link>
  )
}

export default GalleryBox
