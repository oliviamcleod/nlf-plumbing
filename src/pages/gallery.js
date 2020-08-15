import React from "react"
import { Link } from "gatsby"

import InfoBox from "../components/InfoBox"

import Layout from "../components/Layout"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function Gallery() {
  return (
    // <SEO title="Home" />
    <Layout>
      <InfoBox title={NLFCopy.Box2.title} />

      <GasSafeLogo />
    </Layout>
  )
}

export default Gallery
