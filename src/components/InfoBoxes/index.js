import React from "react"
import { Link } from "gatsby"

import ReviewBox from "./ReviewBox"
import ServicesBox from "./SevicesBox"

import css from "./InfoBox.module.css"

function InfoBox({
  title,
  main,
  page,
  column1,
  column2,
  carousel,
  expanded,
  images,
}) {
  console.log(carousel)
  return (
    <Link to={page} className={css.link}>
      {" "}
      <div className={css.infoBox}>
        <h5 className={css.title}>{title}</h5>
        <div className={css.mainWrapper}>
          <p className={css.main}>{main}</p>
          {images ? (
            <img className={css.images} src={images.image1} />
          ) : (
            <div></div>
          )}
          {column1 ? (
            <ServicesBox column1={column1} column2={column2} />
          ) : (
            <div></div>
          )}
          {carousel ? <ReviewBox carousel={carousel} /> : <div></div>}
          {expanded ? (
            <div className={css.expandedWrapper}>
              {expanded.map((item, i) => (
                <p className={css.expanded}>
                  {item} <img className={css.images} src={images.image1} />
                </p>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default InfoBox
