import "./Header.css";
import profile from "../../images/profile.jpg"

export default function Header() {
  return (
    <section className="header">
      <header>
        <div className="row d-flex justify-content-center align-items-center m-lg-2">
          <div className="col-lg-3">
            <img className="img-fluid rounded-3 w-75" src={profile} alt="Profile picture"/>
          </div>
          <div className="col-lg-6 ms-lg-5 p-2">
            <h1  className="header-title"> Hello! </h1>
            <h2 className="header-title">I'm Benjamin SHYAKA</h2>
            <div className="header-title-box ms-3 me-3">
              A Fullstack developer based in Rwanda
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
