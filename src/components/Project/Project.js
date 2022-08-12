import React from "react";
import "./Project.css";
import utickets from "../../assets/utickets.PNG"
import kasa from "../../assets/kasa.png"
import humeeka from "../../assets/humeeka.PNG"
// import githublogo from "../../images/github.png"

function Project() {
  return (
    <section className="container container-project">
      <h5 className="pb-3">
            <span className="purple-text">
              My projects
            </span>
          </h5>
      <p className="purple-text">
        ‍💻 My Open Source Projects - On Github
      </p>
      <div className="row">
          <div className="card col-12 col-lg-3">
            <div className="project-box">
            <img src={utickets} alt="Utickets" className="img-fluid"/> <br></br>
              <span className="white-text pt-5">UTickets</span>
              <p className="gray-text text-box">
                Event ticketing app, it is build using Javascript technologies like NodeJs, ExpressJs, EJS and Postgress
              </p>
              <p>
                <a className="" target={"_blank"} rel="noreferrer" href="https://ubumweapp.herokuapp.com/">Link to UTickets</a>
              </p>
            </div>
          </div>

          <div className="card col-12 col-lg-3">
            <div className="project-box">
            <img src={kasa} alt="Utickets" className="img-fluid"/> <br></br>
              <span className="white-text">Kasa</span>
              <p className="gray-text text-box">
                I developed the online plants seeds selling system for the startup called Kasa.
              </p>
              <p>
                <a className="" target={"_blank"} rel="noreferrer" href="https://www.kasa.rw">Link to Kasa.rw</a>
              </p>
            </div>
          </div>

          <div className="card col-12 col-lg-3">
            <div className="project-box">
            <img src={humeeka} alt="Utickets" className="img-fluid"/> <br></br>
              <span className="white-text">Humeeka</span>
              <p className="gray-text text-box">
                I am the CEO and the Co-founder of a startup company Humeeka, it is an IOT Based application that monitors indoor air quality in realtime.
              </p>
              <p>
                <a className="" target={"_blank"} rel="noreferrer" href="https://humeeka.com">Link to Humeeka.com</a>
              </p>
            </div>
          </div>
      </div>
      

      <div className="project-details">
        {/* <img src={ImageTemp} alt="Project React Simple Portfolio" /> */}
        <div className="details-left">
          {/* <p className="gray-text">
            Mira el diseño de este proyecto en
            <span className="text-figma">
              <img className="icon-figma" src={FigmaIcon} alt="" />
              Figma
            </span>
          </p> */}
          <div className="details-stack">
            <span className="white-text">Skills and technologies</span>
            <ul className="gray-text">
              <li><b>Front-end Languages and Frameworks:</b>  HTML, CSS, JavaScript, React and JQuery</li>
              <li><b>Backend Technologies and Frameworks:</b>  JavaScript, NodeJS and ExpressJS</li>
              <li><b>Database Management Systems:</b>  MySQL, SQL SERVER and PostgreSQL, MongoDB</li>
              <li><b>Web Hosting Platforms:</b>  AWS, Google cloud platform, Heroku, and Microsoft Azure</li>
            </ul>
          </div>
          <p className=""> <span className="white-text">I also have Git and GitHub skills, as well as communication and teamworking.</span></p>

        </div>
      </div>
    </section>
  );
}

export default Project;
