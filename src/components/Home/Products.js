import React from "react"
import Title from '../Global/Title'
import Product from './Product'
import { StaticQuery, graphql } from "gatsby"

export default function Products () {
  return ( 
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <Title title="Products" />
                <Product />
              </div>
            </div>
          </div>
        </section>
  );
}