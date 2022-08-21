import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="head py-5">
        <div className="container py-5">
          <div className="card">
            <div className="card-body  py-3">
              <h1 className=" text-center py-3">contact us</h1>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                  <div className="row pt-3">
                    <div className="col-lg-1 offset-1  col-md-2 col-sm-2  col-2">
                   <span>
                   <i class="fas fa-map-marker-alt"></i>
                   </span>
                    </div>
                    <div className="col-lg-10 col-md-9  col-sm-9 col-9">
                      <h1>find us</h1>
                      hdhdhggfs
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-lg-1 offset-1  col-md-2 col-sm-2  col-2">
                        <span><i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div className="col-lg-10 col-md-9  col-sm-9 col-9">
                      <h1>Phone</h1>
                      hdhdhggfs
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <form>
                    <div className="form-row gap-1 d-lg-flex">
                      <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                        <label className="py-1">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                        <label className="py-1">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <label className="py-1" >Email</label>
                    <input style={{color:"red"}}
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                        />
                        <label className="py-1" >Your Message</label>
                        <textarea placeholder="Message" className="form-control mb-3" name="" id="" cols="10" rows="5"></textarea>
                      <div className=" d-flex align-items-center justify-content-between">
                      <div >
                       <input className="py-1 mx-1" type="checkbox"  name=" " id="" />
                        <label className="py-1"> I am not a robot</label>
                       </div>
                        <button className="btn  btn-primary  outline-none blur-none">Send Message</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
