import React from "react"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import css from "./InfoBox.module.css"

import droplet from "../images/Droplet.svg"
import flame from "../images/C5A06F6EFF90B99F.png"

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
          <div className={css.columnWrapper}>
            {" "}
            {column1 ? (
              <ul className={css.column}>
                <img
                  src={droplet}
                  alt="water droplet"
                  className={css.listIcon}
                />
                {column1.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
            {column2 ? (
              <ul className={css.column}>
                <img src={flame} alt="flame" className={css.listIcon} />
                {column2.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            ) : (
              <div></div>
            )}
            {carousel ? (
              <div>
                <Carousel
                  className={css.carousel}
                  indicators={false}
                  fade={true}
                >
                  {carousel.map(item => (
                    <Carousel.Item>
                      <p className={css.review}>{item.review}</p>{" "}
                      <Carousel.Caption className={css.reviewCaption}>
                        {item.reviewer}
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            ) : (
              <div></div>
            )}
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
      </div>
    </Link>
  )
}

export default InfoBox
