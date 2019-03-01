import React from "react"
import { Link } from "gatsby"
import Title from '../Global/Title'

export default function Info () {
  return ( 
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center">
                <Title title="About" />
                <p className="lead text-muted mb-5">
                 Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <Link to="/about">
                  <button className="btn text-uppercase btn-yellow">about</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
  );
}