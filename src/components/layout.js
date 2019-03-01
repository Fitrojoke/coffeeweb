import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Global/Navbar"
import Footer from "../components/Global/Footer"
import "./bootstrap.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
      <div className="none">{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
