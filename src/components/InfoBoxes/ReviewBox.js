import React from "react"

import css from "./InfoBox.module.css"

function ReviewBox({ carousel }) {
  return (
    <div>
      {carousel.map(item => (
        <p>
          {item.review} {item.reviewer}
        </p>
      ))}
    </div>
  )
}

export default ReviewBox
