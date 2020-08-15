import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import css from "./BurgerMenu.module.css"

function BurgerMenu({ open }) {
  return (
    <div className={open ? css.openMenu : css.burgerMenu} open={open}>
      <Link to="/about" className={css.menuText}>
        Who we are
      </Link>
      <Link to="/gallery" className={css.menuText}>
        Gallery
      </Link>
      <Link to="/services" className={css.menuText}>
        What we do
      </Link>
      <Link to="/reviews" className={css.menuText}>
        Reviews
      </Link>
    </div>
  )
}
BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default BurgerMenu
