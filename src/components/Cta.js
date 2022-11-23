import { useState } from "react";

export default function Cta() {
  const [isValid, setIsValid] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const validateEmail = function (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <>
      <div className="cta">
        <h4 className="cta__headline">Get early access today</h4>
        <p className="cta__text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="cta__submit">
          <input
            onChange={(e) => setInputVal(e.target.value)}
            type="text"
            placeholder="email@example.com"
            className="cta__submit--input"
          />
          <p
            className={
              isValid ? "cta__submit--error" : "cta__submit--error show"
            }
          >
            Error, please check your email
          </p>
          <button
            onClick={() => setIsValid(validateEmail(inputVal))}
            className="cta__submit--btn btn"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </>
  );
}
