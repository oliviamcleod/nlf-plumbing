import React from "react"

import InfoBox from "../components/InfoBoxes"

import Layout from "../components/Layout"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function Services() {
  return (
    // <SEO title="Home" />
    <Layout>
      <InfoBox
        title={NLFCopy.Box3.title}
        main={NLFCopy.Box3.content1}
        column1={NLFCopy.Box3.content2}
        column2={NLFCopy.Box3.content3}
      />

      <GasSafeLogo />
    </Layout>
  )
}

export default Services
