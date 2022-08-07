import { AiFillGithub } from "react-icons/ai";
import "./BioDetails.css";

export const BioDetails = () => {
  return (
    <div className="container-bio-details">
      <div className="details-top">
        <span className="title-details">Skills</span>
        <li>- Web development</li>
        <li>- UI/UX design</li>
        <li>- Digital marketing</li>
      </div>
      <div className="details-bot">
        <span className="title-details">On the web</span>
        <br />
        <AiFillGithub className="bot-icon" />
      </div>
    </div>
  );
};
