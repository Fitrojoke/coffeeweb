import React from "react"

export default function Title ({ title, classing }) {
  return ( 
        <h3 className={classing}>{title}</h3>
  );
}