import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState } from "react"
import logo from "../../images/NLF-Logo-Final.svg"
import NLFCopy from "../../content/content"

import useOnClickOutside from "../Custom Hooks"

import Burger from "./Burger"
import BurgerMenu from "./BurgerMenu"
import css from "./Header.module.css"

function Header() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div className={css.headContainer} ref={node}>
      <Link to="/">
        <img src={logo} className={css.headLogo} />
      </Link>
      <a href={`tel:${NLFCopy.ContactDetails.phone}`} className={css.callBtn}>
        Call Us
      </a>

      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
