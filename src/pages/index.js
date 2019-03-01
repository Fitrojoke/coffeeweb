import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaTrain} from "react-icons/fa"
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular" className="default-background" />
    <Info />
    <div className="text-center navigator"><Link to="/page-2/">Go to page 2<FaTrain /></Link></div>
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
