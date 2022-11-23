import hero from "../images/illustration-intro.png";
import bg from "../images/bg-curvy-mobile.svg";
import bgDesktop from "../images/bg-curvy-desktop.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__bg-pattern">
          <picture>
            <source media="(min-width: 1360px)" srcSet={bgDesktop} />
            <img src={bg} alt="" className="header__bg-pattern--img" />
          </picture>
        </div>
        <div className="header__hero">
          <img src={hero} alt="Hero" className="header__hero--img" />
        </div>
        <h1 className="header__headline">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="header__text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="header__btn btn">Get Started</button>
      </header>
    </>
  );
}
