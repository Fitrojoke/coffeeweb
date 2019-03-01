import React from "react"

export default function Footer () {
  return ( 
        <footer className="py-4 footer">
          <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto text-center text-yellow text-capitalize">
              <h3 className="lead text-muted">
                  all rights reserved &copy; {new Date().getFullYear().toString()}
              </h3>
            </div>
          </div>
          </div>
        </footer>
  );
}