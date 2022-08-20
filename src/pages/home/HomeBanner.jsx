import AOS from "aos";
import React, { useEffect } from "react";
import bannerimage from "../../assets/images/banner_image.png";
import "./HomeBanner.css";
import 'aos/dist/aos.css'
function HomeBanner() {
useEffect(()=>{
  AOS.init();
},[])

  return (
    <>
      <div className="container home_banner">
        <div  className="home_banner_content">
          <h6>Hello I'm </h6>
          <h2>Tamanna</h2>
          <h5 className="text-light">React Js Developer</h5>
        </div>
        <div
        
          
       
       
      
        >
          <img src={bannerimage} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
