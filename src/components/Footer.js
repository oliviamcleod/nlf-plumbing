import React from "react"
import { Link } from "gatsby"

import NLFCopy from "../content/content"
import css from "./Footer.module.css"

function Footer() {
  return (
    <div className={css.footContainer}>
      <div className={css.links}>
        <Link>who we are </Link>|<Link> services </Link>|<Link> gallery </Link>|
        <Link> reviews </Link>
      </div>
      <div className={css.contactDetails}>
        <p>{NLFCopy.ContactDetails.phone}</p>
        <p>{NLFCopy.ContactDetails.email}</p>
      </div>
      <p className={css.gatsbyCred}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  )
}

export default Footer
