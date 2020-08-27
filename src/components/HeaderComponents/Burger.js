import React from "react"
import PropTypes from "prop-types"

import css from "./Burger.module.css"

function Burger({ open, setOpen }) {
  return (
    <div
      className={css.styledBurger}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className={open ? css.cross : css.line} />
      <div className={open ? css.cross : css.line} />
      <div className={open ? css.cross : css.line} />
    </div>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
export default Burger
