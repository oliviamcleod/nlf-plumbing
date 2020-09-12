import React from "react"
import { Link } from "gatsby"

import InfoBox from "../components/InfoBoxes"
import BlogBox from "../components/BlogBox"
import GalleryBox from "../components/GalleryBox"
import Layout from "../components/Layout"
import TradeLogoDisplay from "../components/TradeLogoDisplay"

import NLFCopy from "../content/content.js"
import GasSafeLogo from "../components/GasSafe"

function IndexPage() {
  return (
    // <SEO title="Home" />
    <Layout>
      <BlogBox
        blogText={NLFCopy.BlogBox.headline}
        altText={NLFCopy.BlogBox.altText}
        blogImg={NLFCopy.BlogBox.image}
      />
      <InfoBox
        title={NLFCopy.Box1.title}
        page={NLFCopy.Box1.link}
        main={NLFCopy.Box1.content}
      />
      <GalleryBox
        title={NLFCopy.Box2.title}
        page={NLFCopy.Box2.link}
        main={NLFCopy.Box2.content}
      />
      <InfoBox
        title={NLFCopy.Box3.title}
        page={NLFCopy.Box3.link}
        main={NLFCopy.Box3.content1}
        column1={NLFCopy.Box3.content2}
        column2={NLFCopy.Box3.content3}
      />
      <InfoBox
        title={NLFCopy.Box4.title}
        page={NLFCopy.Box4.link}
        main={NLFCopy.Box4.content}
        carousel={NLFCopy.Box4.reviews}
      />
      <TradeLogoDisplay />
      <GasSafeLogo />
    </Layout>
  )
}

export default IndexPage
