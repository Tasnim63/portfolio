import React from 'react'
import image from '../../assets/my_image.png';
import './AboutDetails.css'
export default function AboutDetails() {
  return (
    <>

       <section class=" text-white text-sm-start py-5">
        <div class="container">
          <div class="row  banner_content  align-content-center justify-content-between">
          <div className='col-lg-6 '>
              <img className=" img-fluid " src={image} alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className=" about_info col-lg-6 ">
           
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
  )
}
