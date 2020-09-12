import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import css from "./BurgerMenu.module.css"

function BurgerMenu({ open }) {
  return (
    <div className={open ? css.openMenu : css.burgerMenu} open={open}>
      <Link to="/about" className={open ? css.menuText : null}>
        Who we are
      </Link>
      <Link to="/gallery" className={open ? css.menuText : null}>
        Gallery
      </Link>
      <Link to="/services" className={open ? css.menuText : null}>
        What we do
      </Link>
      <Link to="/reviews" className={open ? css.menuText : null}>
        Reviews
      </Link>
    </div>
  )
}
BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default BurgerMenu
