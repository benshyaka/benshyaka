import "./Mode.css";
import { RiSunFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import logo from "../../images/ben.png"

export default function Mode({ handleModeChange }) {
  return (
    <section className="">
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid ms-5">
          <a class="navbar-brand" href="#">
          <img className="img-fluid" src={logo} alt="Logo"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact me</a>
              </li>
              
            </ul>
            <button onClick={handleModeChange} className="container-icon">
              <RiSunFill className="mode-icon" />
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}
