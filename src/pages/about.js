import React from "react"
import { Link } from "gatsby"

import InfoBox from "../components/InfoBox"

import Layout from "../components/Layout"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function AboutMe() {
  return (
    // <SEO title="Home" />
    <Layout>
      <InfoBox
        title={NLFCopy.Box1.title}
        // page={NLFCopy.Box1.link}
        main={NLFCopy.Box1.content}
        expanded={NLFCopy.Box1.expanded}
        images={NLFCopy.Box1.images}
      />

      <GasSafeLogo />
    </Layout>
  )
}

export default AboutMe
