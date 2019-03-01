import React, { Component } from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.svg'
import {FaCartArrowDown} from "react-icons/fa"
import "../style.css"


export default class Navbar extends Component {
  state = {
    navBarOpen: true,
    css: "collapse show",
    links: [
      {
        id:1,
        path: "/",
        text: 'HOME'
      },{
        id:2,
        path: "/about",
        text: 'ABOUT'
      }
    ]
  }
  
  navBarHandler = () => {
    console.log('handler')
    this.state.navBarOpen
      ? this.setState({
        navBarOpen: false,
        css: "collapse"
      }) 
      : this.setState({
        navBarOpen: true,
        css: "collapse show"
      })
  };
  
  render() {
    return(
      <div className="navbar bg-light navbar-light">
      <Link to="/">
        <div>
          <button className="borderless" type="button" onClick={this.navBarHandler}>
            <img src={logo} alt="Caffee" />
          </button>
        </div>
      </Link>
        <div className={this.state.css}>
          <ul className="nav">
            { this.state.links.map(link => {
              return(
                <Link to={link.path} key={link.id} className="nav-link">
                  <li  className="nav-item">{link.text}</li>
                </Link>
              )
              })
            }
          </ul>
        </div>
        <FaCartArrowDown className="cart-icon" style={{height: '1.5rem', width: '1.5rem'}}/>
      </div>
    )
  }
}