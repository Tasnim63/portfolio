import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import bannerimage from "../../assets/images/banner_image.png";
import image from '../../assets/my_image.png';
import CV from '../../assets/Tamanna Akter (2).pdf';
import "./HomeBanner.css";

function HomeBanner() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section class=" text-white text-sm-start  p-5" id="home">
        <div class="container">
          <div class="d-sm-flex banner_content mb-5  align-content-center justify-content-between">
            <div className="  mt-5 pt-5">
              <h6 style={{ fontSize: "17px" }}>Hello I'm </h6>
              <h2
                className=" my-2"
                style={{
                  color: "#cebbf4",
                  fontSize: "45px",
                  fontFamily: "'Lobster', cursive",
                }}
              >
                Tamanna
              </h2>
              <h5 className="text-light">React Js Developer</h5>
              <div className="cta d-flex">
                <div className="outer button">
                  <a className="btn" href={CV} download >
                    Download_CV
                  </a>
                  <span></span>
                  <span></span>
                </div>
               
              </div>
            </div>
            <div>
              <img className="img-fluid " src={bannerimage} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class=" text-white text-sm-start py-5">
        <div class="container">
          <div class="row  banner_content  align-content-center justify-content-between">
          <div className='col-lg-6 '>
              <img className=" img-fluid " src={image} alt="" />
            </div>
            <div  className=" about_info col-lg-6 ">
           
              <h2
                className=" my-2"
                style={{
                  color: "#80C0CF",
                  fontSize: "45px",
                  fontFamily: "'Lobster', cursive",
                }}
              >
                About Me
              </h2>
              <h6 className="text-light">  I am a junior React js  developer with solid knowledge in
              different technologies & enough experience in creating & designing
              super responsive websites.
             I am comfort in Html 5 , CSS 3,tailwind,daisyUi components ,
              Bootstrap 5 , JavaScript, ES6, Rest API, React JS React Bootstrap,
              React Router, Firebase Authentication ,node js ,mongodb and
              express js.</h6>
             
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
