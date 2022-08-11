import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: 2016,
      description: "Advanced diploma",
    },
    {
      year: 2022,
      description: "Bachelor's degree",
    },
    {
      year: 2022,
      description: "Andela training",
    }
  ];

  return (
    <section className="container container-lines">
      <p className="purple-text">
        📚 Bio <span className="purple-smoke-text"></span>{" "}
      </p>
      <div className="line"></div>
      {bios.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year} : </span>
          {""}
          <span className="gray-text" data-tip="React-tooltip">
            {e.description}
          </span>
          <ReactTooltip place="top" effects="float" className="custom-theme">
            <BioDetails />
          </ReactTooltip>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
