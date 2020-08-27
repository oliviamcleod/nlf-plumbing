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
      <a href={NLFCopy.ContactDetails.phone} className={css.callBtn}>
        Call Us
      </a>
      <div className={css.links}>
        <Link to="/about">who we are </Link>|
        <Link to="/services"> services </Link>|
        <Link to="/gallery"> gallery </Link>|
        <Link to="/reviews"> reviews </Link>
      </div>
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
