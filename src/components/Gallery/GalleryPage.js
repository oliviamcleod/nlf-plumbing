import React, { useState } from "react"

import css from "./GalleryPage.module.css"

import workPhotos from "../../images/workPhotos"
import NLFCopy from "../../content/content"
import GalleryModal from "./Modal"

function GalleryPage() {
  const [modalShow, setModalShow] = useState(false)
  const [imageDisplayed, setImageDisplayed] = useState("")

  console.log(imageDisplayed)

  return (
    <div className={css.galleryPage}>
      <h5 className={css.title}>{NLFCopy.Box2.title}</h5>
      <div className={css.galleryGrid}>
        {workPhotos.map((item, i) => (
          <img
            className={css.galleryItem}
            src={item}
            alt="example of our work"
            onClick={() => {
              return setModalShow(true), setImageDisplayed(i)
            }}
            data-slide-to={i}
          />
        ))}
      </div>
      <GalleryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={imageDisplayed}
        gallery={workPhotos}
      />
    </div>
  )
}

export default GalleryPage
