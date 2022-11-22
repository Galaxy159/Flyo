export default function Cta() {
  return (
    <>
      <div className="cta">
        <h3 className="cta__headline">Get early access today</h3>
        <p className="cta__text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="cta__submit">
          <input
            type="text"
            placeholder="email@example.com"
            className="cta__submit--input"
          />
          <button className="cta__submit--btn">Get Started For Free</button>
        </div>
      </div>
    </>
  );
}
