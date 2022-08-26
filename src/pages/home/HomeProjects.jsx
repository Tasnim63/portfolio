import React, { useState } from "react";
import Menu from "../projects/projectsimage";
export default function HomeProjects() {
  const [cards, setCards] = useState(Menu);
console.log(setCards);
  // if (cards.length) {
  //   cards.length = 3;
  // }
  return (
    <>
      <h2
        style={{
          color: "#80C0CF",
          fontSize: "45px",
          fontFamily: "'Lobster', cursive",
        }}
        className=" text-center pt-5"
      >
        My Best Projects
      </h2>
      {/* main section */}
      <div className="container ">
        <div className="row  m-0 p-0 justify-content-center   m-auto">
          {cards.map((card) => {
            const { image, name, code, live, details } = card;
            return (
              <>
                <div className="col-lg-4 col-md-6 my-3">
                  <div style={{ background: "#173137" }} class="card h-100 ">
                    <div className="image_inner">
                      <img src={image} class="card-img-top" alt="..." />
                    </div>

                    <div class="card-body">
                      <h3 style={{ color: "#a9dfeb" }} class="card-title">
                        {name}
                      </h3>

                      <p style={{ color: "white" }} class="card-text pt-2 ">
                        {details}
                      </p>
                      <div className="button_area pt-2 ">
                        <div className=" card_button  ">
                          <a
                            className="btn"
                            style={{ color: "#98d9e8" }}
                            href={code}
                          >
                            SOURCE_CODE
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>

                          <a
                            className=" link_button me-lg-4 "
                            href={live}
                           
                          >
                            live_site
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
