import React from "react"
import { Modal, Carousel } from "react-bootstrap"

import css from "./Modal.module.css"

function GalleryModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className={css.carousel}>
          <Carousel
            fade={true}
            indicators={false}
            defaultActiveIndex={props.image}
          >
            {props.gallery.map(item => (
              <Carousel.Item>
                <img src={item} alt="photo" className={css.image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default GalleryModal
