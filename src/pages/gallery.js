import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import GalleryPage from "../components/Gallery/GalleryPage"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function Gallery() {
  return (
    // <SEO title="Home" />
    <Layout>
      <GalleryPage title={NLFCopy.Box2.title} />

      <GasSafeLogo />
    </Layout>
  )
}

export default Gallery
