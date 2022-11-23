import productive from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";
import { useState } from "react";

export default function Content() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="content">
        <div className="content__hero">
          <img
            src={productive}
            alt="Productive people"
            className="content__hero--img"
          />
        </div>
        <div className="content__content">
          <h3 className="content__content--headline">
            Stay productive, wherever you are
          </h3>
          <p className="content__content--text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="content__content--text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div
            className="content__content--cta"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="0#" className="content__content--cta-link">
              See how Fylo works{" "}
            </a>
            <svg
              className="content__content--cta-icon"
              style={isHovered ? { fill: "white" } : {}}
            >
              <use xlinkHref={`${arrow}#arrow`}></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
