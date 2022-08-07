import "./About.css";
import iconImage from "../../images/logo.png";
import githublogo from "../../images/github.png"


export const About = () => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Hello! call me ben{" "}
          <span className="purple-smoke-text">- Introducciòn</span>{" "}
        </span>
        <p className="gray-text">
          I am a young full stack developer based in Rwanda. I build websites, {" "} <br></br>
          I am a quick learner who is continually adapting to new technologies; 
          I am familiar with javascript and its most well-known frameworks.
          I'm obsessed with pixel-perfect, gorgeous interfaces and well-implemented UX.
        </p>
        <a className="" target={"_blank"} href="https://docs.google.com/document/d/1UdbNbu-poO-ep-rzcxXc6NgYEoKfFiAi/edit#">Take a look at my CV {"->"} </a>
        <a className="" target={"_blank"} href="https://github.com/benshyaka">
          <img className="img-fluid" width={24} src={githublogo} alt="abajo" /> {"  "} Visit my github
        </a>
        <span className="white-text">
          <h5>Services i provide</h5>
        </span>
        <div className="row d-flex">
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title">Web development</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Any website type</h6>
              <p className="card-text">
                I design proffesional quality websites with 24/7 security monitoring and hosting
              </p>
              
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Any design type</h6>
              <p className="card-text">
                Design most stuning user friendly prototypes and informatin arctecture
              </p>
              
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title">Digital marketing</h5>
              <h6 className="card-subtitle mb-2 text-muted ">Any social medias</h6>
              <p className="card-text">
                Design most stuning user friendly prototypes and informatin arctecture
              </p>
            </div>
          </div>
        </div>
          
      </div>
    </section>
  );
};
