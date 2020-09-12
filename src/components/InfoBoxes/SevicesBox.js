import React from "react"
import { Carousel } from "react-bootstrap"
import css from "./InfoBox.module.css"

import droplet from "../../images/Droplet.svg"
import flame from "../../images/C5A06F6EFF90B99F.png"

function ServicesBox({ column1, column2 }) {
  return (
    <div className={css.columnWrapper}>
      {" "}
      {column1 ? (
        <ul className={css.column}>
          <img src={droplet} alt="water droplet" className={css.listIcon} />
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
    </div>
  )
}

export default ServicesBox
