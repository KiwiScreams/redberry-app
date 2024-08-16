import { useState } from "react";
import "./Panel.css";
const Panel = ({
  onHide,
  showPanel,
  onFormSubmit = () => {},
  onPanelSubmit,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    onHide();
    setIsClosing(false);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
    if (!emailRegex.test(email)) {
      setError("მეილი უნდა მთავრდებოდეს @redberry.ge-ით");
    } else {
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      onFormSubmit();
      setLoginSuccess(true);
    }
  };
  const handleOK = () => {
    setIsSubmitted(true);
    onPanelSubmit();
  };
  return (
    <>
      {showPanel && !isSubmitted && (
        <div className="overlay" onAnimationEnd={() => setIsClosing(false)}>
          <section className={`auth-panel ${isClosing ? "closing" : ""}`}>
            <button className="x" onClick={handleClose}>
              <i className="fa-solid fa-x"></i>
            </button>

            {!loginSuccess && (
              <>
                <h3>შესვლა</h3>
                <div className="input-container">
                  <label htmlFor="email">ელ-ფოსტა</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Example@redberry.ge"
                    value={email}
                    onChange={handleEmailChange}
                    className={error ? "error-input" : "input"}
                  />
                  {error && (
                    <div className="error-message" style={{ color: "red" }}>
                      <i className="fa-solid fa-circle-exclamation"></i>
                      {error}
                    </div>
                  )}
                </div>
              </>
            )}
            {loginSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4>წარმატებული ავტორიზაცია</h4>

                <button className="submit" onClick={handleOK}>
                  დასრულება
                </button>
              </div>
            ) : (
              <button
                className="submit"
                onClick={handleSubmit}
                disabled={error !== null || email.trim() === ""}
              >
                შესვლა
              </button>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Panel;
