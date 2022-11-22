import logo from "../images/logo.svg";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar__logo">
          <img src={logo} alt="Logo" className="topbar__logo--img" />
        </div>
        <nav className="topbar__nav">
          <a href="#0" className="topbar__nav--link">
            Features
          </a>
          <a href="#0" className="topbar__nav--link">
            Team
          </a>
          <a href="#0" className="topbar__nav--link">
            Sign In
          </a>
        </nav>
      </div>
    </>
  );
}
