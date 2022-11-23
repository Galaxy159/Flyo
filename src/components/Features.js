import access from "../images/icon-access-anywhere.svg";
import security from "../images/icon-security.svg";
import collaboration from "../images/icon-collaboration.svg";
import anyFile from "../images/icon-any-file.svg";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="features__item">
          <img src={access} alt="Access" className="features__item--icon" />
          <h2 className="features__item--headline">
            Access your files, anywhere
          </h2>
          <p className="features__item--text">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="features__item">
          <img src={security} alt="Security" className="features__item--icon" />
          <h2 className="features__item--headline">Security you can trust</h2>
          <p className="features__item--text">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="features__item">
          <img
            src={collaboration}
            alt="Collaboration"
            className="features__item--icon"
          />
          <h2 className="features__item--headline">Real-time collaboration</h2>
          <p className="features__item--text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="features__item">
          <img src={anyFile} alt="Any file" className="features__item--icon" />
          <h2 className="features__item--headline">Store any type of file</h2>
          <p className="features__item--text">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </>
  );
}
