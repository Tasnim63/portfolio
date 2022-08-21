import React, { useState } from "react";
import "./AllProjects.css";
import Menu from "./projectsimage";
export default function AllProjects() {
  const [cards, setCards] = useState(Menu);

  const filtterItem = (cateItem) => {
    const UpdateItem = Menu.filter((curEle) => {
      return curEle.catgory === cateItem;
    });

    setCards(UpdateItem);
  };

  return (
    <>
      {" "}
      <div className="project_card_area ">
        <h2 className=" mt-4 text-center mb-3   text-white">My Projects</h2>
        <div className="manu_tabs container my-4">
          <div className="menu_tab text-center  ">
            <a onClick={() => setCards(Menu)} className="btn about_btn  m-2">
              ALL
            </a>
            <a
              className="btn about_btn  m-2"
              onClick={() => filtterItem("html_css")}
            >
              MERN
            </a>
            <a
              onClick={() => filtterItem("HTML")}
              className="btn about_btn m-2"
            >
              RACT_JS{" "}
            </a>
            <a onClick={() => setCards(Menu)} className="btn about_btn  m-2">
              BOOTSTRAP
            </a>
            <a
              onClick={() => filtterItem("html_css")}
              className="btn about_btn  m-2"
            >
              HTML_CSS
            </a>
          </div>
        </div>

        {/* main section */}
        <div className="container ">
          <div className="row  m-0 p-0 justify-content-center   m-auto">
            {cards.map((card) => {
              const { image, name, code_Url, live_url, details } = card;
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
                            <a style={{ color: "#98d9e8" }} href={code_Url}>
                              SOURCE_CODE
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>

                            <a className="link_button me-lg-4 " href={live_url}>
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
      </div>
    </>
  );
}
