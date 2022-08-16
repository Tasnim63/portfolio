import React from 'react'
import bannerimage from '../../assets/images/banner_image.png'
function HomeBanner() {
  return (
    <>
      <div className="home_banner">
        <div className="home_banner_content">
        <h5>Hello I'm </h5>
        <h1>Tamanna</h1>
        <h5 className="text-light">React Js Developer</h5>

        </div>
        <div className="home_banner_image">
            <img src={bannerimage} alt="" />
        </div>
      </div>
    </>
  )
}

export default HomeBanner
