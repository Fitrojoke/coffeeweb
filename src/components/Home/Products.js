import React from "react"
import Title from '../Global/Title'
import Product from './Product'
import { StaticQuery, graphql } from "gatsby"

export default function Products () {
  return ( 
    <StaticQuery
    query={graphql`{
        product: allContentfulCoffeeproduct {
          edges {
            node {
              id
              productitle
              productprice
              productimg {
                fluid(maxWidth:400){
                	src
                  ...GatsbyContentfulFluid_tracedSVG
              	}
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="py-5">
        <div className="container text-center">
        <Title title="Products" />
          <div className="row">
            <div className="col-10 col-sm-8 d-md-flex mx-auto text-center">
              {data.product.edges.map( ({node:product}) => {
                return (
                  <Product key={product.id} product={product}/>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )}
  />
  );
}