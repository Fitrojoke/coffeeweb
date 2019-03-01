import React from "react"
import Img from "gatsby-image"

export default function Product ({product}) {
  return (   
    <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card">
        <Img fluid={product.productimg.fluid} className="card-img-top"/>
        <div className="card-body text-center">
          <h6>{product.productitle}</h6>
          <p>$ {product.productprice}</p>
          <div className="col-12 text-center">
            <button type="button" className="btn text-uppercase btn-yellow m-2">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}