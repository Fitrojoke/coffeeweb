import React, { Component } from "react"
import Title from '../Global/Title'
import Img from "gatsby-image"

const getCategory = items => {
  let tempItems = items.map(items =>{
    return items.node.menucategory
  });
  let tempCategory = new Set (tempItems);
  let categories = Array.from(tempCategory);
  categories = ["all",...categories];
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      menu: props.items.edges,
      categories: getCategory(props.items.edges)
    }
  }
  handlerCategories = category => {
    let tempItems = [...this.state.items];
    if (category === "all") {
      this.setState(() => {
        return {menu: tempItems}
      })
    } else {
      let items = tempItems.filter( ({node}) => node.menucategory === category);
      this.setState(() => {
        return {menu: items}
      })
    }
    console.log(category)
  }
  render () {
    if (this.state.items.length > 0) {
    return ( 
          <section className="menu py-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 mx-auto text-center">
                  <Title classing="text-white" title="Our menu"/>
                  <div className="row mb-5">
                    <div className="col-12 text-center">
                      {this.state.categories.map( (category, index) => {
                        return(
                          <button 
                            type="button" 
                            key={index} 
                            className="btn text-uppercase btn-yellow m-2"
                            onClick={() => {this.handlerCategories(category)}}>{category}</button>
                        )}
                      )}
                    </div>
                  </div>
                  <div className="row">
                    {this.state.menu.map(({node}) => {
                      return(
                        <div key={node.id} className="col-12 col-md-6 my-3 d-flex mx-auto">
                          <div><Img fixed={node.menuimg.fixed} alt={node.menutitle}/></div>
                          <div className="flex-grow-1 px-3">
                            <div className="d-flex-justify-content-between">
                              <div className="row d-flex justify-content-between" style={{color: "var(--yellow)"}}>
                                <h5>{node.menutitle}</h5>
                                <h5>$ {node.menuprice}</h5>
                              </div>
                              <p className="text-left"><small>{node.menudescription.menudescription}</small></p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </section>
    );
  } else {
    return ( 
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                  <Title title="Sorry"/>
                  <p className="lead text-muted mb-5">Actually out of stock</p>
                </div>
              </div>
            </div>
          </section>
    );
  }
  }
}