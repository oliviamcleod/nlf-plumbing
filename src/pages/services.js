import React from "react"
import { Link } from "gatsby"

import InfoBox from "../components/InfoBox"

import Layout from "../components/Layout"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function Services() {
  return (
    // <SEO title="Home" />
    <Layout>
      <InfoBox title={NLFCopy.Box3.title} />

      <GasSafeLogo />
    </Layout>
  )
}

export default Services
