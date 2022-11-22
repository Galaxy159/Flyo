import productive from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

export default function Content() {
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
          <h2 className="content__content--headline">
            Stay productive, wherever you are
          </h2>
          <p className="content__content--text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="content__content--text2">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="0#" className="content__content--link">
            See how Fylo works{" "}
            <span>
              <svg style={{ height: "16px", width: "16px", fill: "white" }}>
                <use xlinkHref={`${arrow}#arrow`}></use>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
