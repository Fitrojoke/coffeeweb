import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Global/Navbar"
import "./bootstrap.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
  <Navbar />
    <div className="none">{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
