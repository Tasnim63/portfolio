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
          <a onClick={() => filtterItem("HTML")} className="btn about_btn m-2">
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
      <div className="container">
        <div className="row justify-content-center w-auto">
      
          {cards.map((card) => {
            const { id, image, name, url, details } = card;
            return (
              <>
                <div className="col-lg-4 col-md-6  my-3 ">
                  <div style={{background:"#180e2c"}}  class="card  h-100 border-0" >
                  <div className="image_inner">
                  <img src={image} class="card-img-top" alt="..." />
                  </div>
                    <div  class="card-body">
                      <h3 style={{color:"#c6b4ea"}}  class="card-title" >{name}</h3>
                      <p style={{color:"white"}} class="card-text my-3">
                       {details}
                      </p>
                    <div className="card-button d-flex justify-content-between">
                    <a   className="source_code_btn" href="#" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                         source_code
                      </a>
                      <a  className="live_site_btn" href="#" >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                       live_site
                      </a>
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