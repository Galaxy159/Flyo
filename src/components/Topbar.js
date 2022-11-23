import logo from "../images/logo.svg";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar__logo">
          <img src={logo} alt="Logo" className="topbar__logo--img" />
        </div>
        <nav className="topbar__links">
          <a href="#0" className="topbar__links--link">
            Features
          </a>
          <a href="#0" className="topbar__links--link">
            Team
          </a>
          <a href="#0" className="topbar__links--link">
            Sign In
          </a>
        </nav>
      </div>
    </>
  );
}
