import React from "react"

import logo1 from "../images/logos/Baxi-Logo-1.png"
import logo2 from "../images/logos/BRISTAN-LOGO-cropped-transparent.gif"
import logo3 from "../images/logos/gascentrelogo.png"
import logo4 from "../images/logos/ideal-boiler-installation.jpg"
import logo5 from "../images/logos/Pochin-logo.jpg"
import logo6 from "../images/logos/Polypipe-Logo-19.jpg"
import logo7 from "../images/logos/Vaillant-Logo.jpg"
import logo8 from "../images/logos/Worcester-Bosch-Logo.png"

import css from "../components/TradeLogoDisplay.module.css"

function TradeLogoDisplay() {
  const logoArray = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]

  return (
    <div className={css.trades}>
      {logoArray.map(item => (
        <img src={item} alt="trade logo" className={css.tradeSml} />
      ))}
    </div>
  )
}

export default TradeLogoDisplay
