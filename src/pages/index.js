import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FaTrain} from "react-icons/fa"
import BackgroundSection from "../components/Global/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Regular" className="default-background" />
    <Info />
    <Menu items={data.menu}/>
    <div className="text-center navigator"><Link to="/page-2/">Go to page 2<FaTrain /></Link></div>
    <Products />
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
    menu: allContentfulCoffeemenu{
    edges {
      node {
        id
        menutitle
        menudescription{
          menudescription
        }
        menuimg {
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        menuprice
        menucategory
      }
    }
  }
  product: allContentfulCoffeeproduct {
    edges {
      node {
        id
        productitle
        productprice
        productimg {
          fluid(maxWidth:400){
          	...GatsbyContentfulFluid_tracedSVG
        	}
        }
      }
    }
  }
  }
`

export default IndexPage
