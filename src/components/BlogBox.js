import React from "react"
import css from "./BlogBox.module.css"

function BlogBox({ blogImg, altText, blogText }) {
  return (
    <div className={css.blogBoxContainer}>
      <div className={css.imgContainer}>
        <img src={blogImg} alt={altText} className={css.blogImg} />
      </div>
      <p className={css.blogText}>{blogText}</p>
    </div>
  )
}

export default BlogBox
