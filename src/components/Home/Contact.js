import React from "react"
import Title from '../Global/Title'

export default function Contact () {
  return ( 
        <section className="py-5">
          <div className="container contact">
            <div className="row">
              <div className="col-10 col-sm-8 mx-auto text-center p-5">
                <Title title="Contact" />
                <form>
                  <div className="form-group d-flex v-middle">
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name"  className="form-control ml-5" id="name" placeholder="Jon Smith" />
                  </div>
                  <div className="form-group d-flex v-middle">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control ml-5" id="name" placeholder="mail@address.com"  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <textarea name="description" className="form-control" id="description" row="5" placeholder="Write your message here..."  />
                  </div>
                  <button className="btn text-uppercase btn-light btn-block" type="submit">Contact</button>
                </form>
              </div>
            </div>
          </div>
        </section>
  );
}