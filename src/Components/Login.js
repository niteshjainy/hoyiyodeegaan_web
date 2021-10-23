import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import firebase from "../Firebase";
import { createUser, Toggleloader } from "../redux/features/user";
const Login = ({ clickLoginPopup, handleClose, setClickLoginPopup }) => {
  const [loginPopup, setLoginPopup] = useState(true);
  const [options, setOptions] = useState("+91");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleOTPChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  //auth config
  const captchaVerifier = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = (e) => {
    setOtp(new Array(6).fill(""));
    e.preventDefault();
    captchaVerifier();

    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        setLoginPopup(false);
        window.confirmationResult = confirmationResult;
        console.log("otp sent", confirmationResult);
      })
      .catch((error) => {
        resetCaptcha();
        window.confirmationResult = null;
        console.log("otp sent ", error);
      });
  };
  const resetCaptcha = () => {
    window.recaptchaVerifier.render().then(function (widgetId) {
      window.grecaptcha.reset(widgetId);
    });
  };

  const onSubmitOTP = () => {
    let result = 0;
    otp.map((i) => {
      result = result * 10 + Number(i);
    });
    window.confirmationResult
      .confirm(result)
      .then((result) => {
        dispatch(
          createUser(
            JSON.stringify({
              email: "",
              name: "",
              phone: number,
              loginType: "PHONE NUMBER",
              socialId: "",
              profilePic: "",
              location: "",
              about: "",
              language: "ENG",
            })
          )
        );
        setLoginPopup(true);
        setClickLoginPopup(false);
        <Redirect to="/" />;
      })
      .catch((error) => {
        console.log("user error", error);
      });
  };

  return (
    <Modal
      id="myModal1"
      className="modal fade"
      show={clickLoginPopup}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <div id="sign-in-button" style={{ display: "none" }}></div>
      <div dialogClassName="modal-dialog">
        <div contentClassName="modal-content">
          <div className="col-sm-6 loginbg">
            <span className="images">
              <img src="assets/images/logingbg.png" />
            </span>
          </div>
          <div className="col-sm-6 loginbgright">
            {loginPopup ? (
              <div id="login" className="widthfull">
                <div className="modal-header">
                  <div className="realtive">
                    <h4 className="modal-title">Log in to your account</h4>
                    <button
                      type="button"
                      className="close"
                      onClick={handleClose}
                    >
                      <img src="assets/images/crox.png" />
                    </button>
                  </div>
                  {/* <span className="signuptext">
              Don’t have an account? <a id="Sign">Sign up</a>
            </span> */}
                </div>
                <div className="modal-body">
                  <div className="rating">
                    <div className="ratingform">
                      <div className="col-sm-12 leftnoxes phone">
                        <label className="label">Mobile number</label>
                        <select
                          value={options}
                          className="form-control"
                          onChange={(e) => setOptions(e.target.value)}
                        >
                          <option value="+252" selected={options === +252}>
                            +252
                          </option>
                          <option value="+91" selected={options === +91}>
                            +91
                          </option>
                        </select>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="70201761"
                          required
                          onChange={(e) =>
                            setNumber(options + "" + e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="ratingform loginform">
                      <button
                        className="btn btn-warning submit"
                        onClick={onSignInSubmit}
                      >
                        <span>Login</span>
                      </button>
                    </div>
                    <div className="fblinks">
                      <div className="col-sm-6 fb">
                        <a href="#">
                          <img src="assets/images/face.png" alt="facebook" />
                        </a>
                      </div>
                      <div className="col-sm-6 google">
                        <a href="#">
                          <img src="assets/images/google.png" alt="google" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div id="otp" className="widthfull">
                <div className="modal-header">
                  <div className="realtive">
                    <h4 className="modal-title">Enter OTP to Login</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      onClick={handleClose}
                    >
                      <img src="assets/images/crox.png" />
                    </button>
                  </div>
                  <span className="signuptext">
                    OTP has been sent to {number}
                  </span>
                </div>
                <div className="modal-body">
                  <div className="rating">
                    <div className="ratingform">
                      <div className="col-sm-12 leftnoxes">
                        <label className="label">Enter OTP</label>
                        <div className="otpinput">
                          {otp.map((data, index) => (
                            <input
                              value={data}
                              keyboardtype="numeric"
                              className="form-control"
                              maxLength="1"
                              key={index}
                              onChange={(e) => handleOTPChange(e.target, index)}
                              onFocus={(e) => e.target.select()}
                            />
                          ))}
                        </div>
                        <div className="text-center resendotp">
                          <span className="font-weight-bold text-danger cursor">
                            <a onClick={onSignInSubmit}>Resend</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ratingform loginform">
                      <button
                        className="btn btn-warning submit"
                        onClick={onSubmitOTP}
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div id="signup" className="widthfull">
        <div className="modal-header">
          <div className="realtive">
            <h4 className="modal-title">Create a new account</h4>
            <button type="button" className="close" data-dismiss="modal">
              <img src="assets/images/crox.png" />
            </button>
          </div>
          <span className="signuptext">
            Already have an account? <a id="log">Log in</a>
          </span>
        </div>
        <div className="modal-body">
          <form className="rating">
            <div className="ratingform">
              <div className="col-sm-12 leftnoxes">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div className="ratingform">
              <div className="col-sm-12 leftnoxes">
                <label className="label">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email ID"
                />
              </div>
            </div>
            <div className="ratingform">
              <div className="col-sm-12 leftnoxes phone">
                <label className="label">Mobile number</label>
                <select className="form-control">
                  <option>+252</option>
                  <option>+252</option>
                  <option>+252</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="70201761"
                />
              </div>
            </div>
            <div
              className="ratingform loginform"
              style={{ marginTop: "0px" }}
            >
              <button type="submit" className="btn btn-warning submit">
                <span>Register</span>
              </button>
            </div>
            <div className="fblinks">
              <div className="col-sm-6 fb">
                <a href="#">
                  <img src="assets/images/face.png" alt="facebook" />
                </a>
              </div>
              <div className="col-sm-6 google">
                <a href="#">
                  <img src="assets/images/google.png" alt="google" />
                </a>
              </div>
            </div>
            <div className="termslinks">
              By registering, you accept <a>Terms & conditions</a> &{" "}
              <a>Privacy policies.</a>
            </div>
          </form>
        </div>
      </div> */}
          {/* <div
        id="signupotp"
        className="widthfull"
        style={{ display: "none" }}
      >
        <div className="modal-header">
          <div className="realtive">
            <h4 className="modal-title">Verify Account</h4>
            <button type="button" className="close" data-dismiss="modal">
              <img src="assets/images/crox.png" />
            </button>
          </div>
          <span className="signuptext">
            OTP for account verification has been sent to your mobile
            number <a>+252 70606552</a>.
          </span>
        </div>
        <div className="modal-body">
          <form className="rating">
            <div className="ratingform">
              <div className="col-sm-12 leftnoxes">
                <label className="label">Enter OTP</label>
                <div className="otpinput">
                  <input
                    type="text"
                    className="form-control"
                    minLength="1"
                    maxLength="1"
                    autoFocus
                  />
                  <input
                    type="text"
                    className="form-control"
                    minLength="1"
                    maxLength="1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    minLength="1"
                    maxLength="1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    minLength="1"
                    maxLength="1"
                  />
                </div>
                <div className="text-center resendotp">
                  <span className="font-weight-bold text-danger cursor">
                    <a>Resend</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="ratingform loginform">
              <button type="submit" className="btn btn-warning submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default Login;
