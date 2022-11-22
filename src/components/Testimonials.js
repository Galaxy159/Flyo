import quotation from "../images/bg-quotes.png";
import avatar1 from "../images/profile-1.jpg";
import avatar2 from "../images/profile-2.jpg";
import avatar3 from "../images/profile-3.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials__quotation">
          <img
            src={quotation}
            alt="Quotation mark"
            className="testimonials__quotation--img"
          />
        </div>
        <div className="testimonials__content">
          <div className="testimonials__item">
            <p className="testimonials__item--text">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="testimonials__item--person">
              <div className="testimonials__item--person-avatar">
                <img
                  src={avatar1}
                  alt="Avatar"
                  className="testimonials__item--person-avatar-img"
                />
              </div>
              <p className="testimonials__item--person-name">Satish Patel</p>
              <p className="testimonials__item--person-position">
                Founder & CEO, Huddle
              </p>
            </div>
          </div>
          <div className="testimonials__item">
            <p className="testimonials__item--text">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="testimonials__item--person">
              <div className="testimonials__item--person-avatar">
                <img
                  src={avatar2}
                  alt="Avatar"
                  className="testimonials__item--person-avatar-img"
                />
              </div>
              <p className="testimonials__item--person-name">Bruce McKenzie</p>
              <p className="testimonials__item--person-position">
                Founder & CEO, Huddle
              </p>
            </div>
          </div>
          <div className="testimonials__item">
            <p className="testimonials__item--text">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="testimonials__item--person">
              <div className="testimonials__item--person-avatar">
                <img
                  src={avatar3}
                  alt="Avatar"
                  className="testimonials__item--person-avatar-img"
                />
              </div>
              <p className="testimonials__item--person-name">Iva Boyd</p>
              <p className="testimonials__item--person-position">
                Founder & CEO, Huddle
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
