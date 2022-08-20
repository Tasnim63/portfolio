import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import bannerimage from "../../assets/images/banner_image.png";
import "./HomeBanner.css";
import  CV from '../../assets/Tamanna.docx (9).853c97871d925bee71ba.853c97871d925bee71ba (4).pdf'
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
    </>
  );
}

export default HomeBanner;
