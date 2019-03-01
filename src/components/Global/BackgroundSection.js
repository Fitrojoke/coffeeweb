import React from "react"
import BackgroundImage from 'gatsby-background-image'
import "../style.css"


export default function BackgroundSection ({img, styleClass, title, children}) {
  return ( 
        <BackgroundImage  className={styleClass} fluid={img} >
            <h1 className="text-center text-white text-uppercase">{title}</h1>
            {children}
        </ BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  ttitle: "default title",
  styleClass: "default-background"
};