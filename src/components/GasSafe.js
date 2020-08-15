import React from "react"

import css from "./GasSafe.module.css"

import gasSafe from "../images/Gas_Safe_Register_logo_symbol.png"

function GasSafeLogo() {
  return <img src={gasSafe} alt="gas safe logo" className={css.gasSafe} />
}

export default GasSafeLogo
