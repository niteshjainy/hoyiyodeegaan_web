import React, { useState } from "react";
import Logout from "../Components/Logout";
import Login from "../Components/Login";
import { useLocation } from "react-router";
import { deleteToken } from "../redux/features/user";
import { useDispatch, useSelector } from "react-redux";
import firebase from "./../Firebase";
import { Link } from "react-router-dom";

function Header() {
  const [signupPopup, setSignupPopup] = useState(false);
  const [clickLoginPopup, setClickLoginPopup] = useState(false);
  const handleClose = () => setClickLoginPopup(false);
  const handleShow = () => setClickLoginPopup(true);
  const handleSignupPopup = () => setSignupPopup(false);
  const dispatch = useDispatch();
  const { userToken, userData} = useSelector((state) => state.user);
const userName = userData ? userData.name ? userData.name : "Hi There" : "NA"
  const signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch(deleteToken());
      })
      .catch(function (error) {
        console.log("logout error ", error);
      });
  };
  const closePopUp = () => {
    handleSignupPopup();
    signOutUser();
  };
  const location = useLocation();
  return (
    <div className={location.pathname != "/" ? "" : "homepage"}>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="/">
              <a
                className="navbar-brand d-flex align-items-center"
                href="index.js"
              >
                <img src="assets/images/logo.png" alt="logo" />
                <img
                  className="ml-2 d-none d-sm-block"
                  src="assets/images/logo-text.png"
                  alt="logo-text"
                />
              </a>
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link dropdown-toggle globe" data-toggle="dropdown">
                    <img src="assets/images/globe.png" class="deskwhite" alt="globe" />
                    <img src="assets/images/globeyellow.png" class="deskyellow" alt="globe" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">English (ENG)</a>
                  </li>
                  <li>
                    <a href="#">Somali (SOM)</a>
                  </li>
                </ul>
              </li>
              {userToken ? (
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img src="assets/images/bell.png" alt="notification" />
                    <em className="red">1</em>
                  </a>
                  <ul className="dropdown-menu dash noyificationul">
                    <li>
                      <i className="croxbtn">
                        <img src="assets/images/crox.png" />
                      </i>
                      <img src="assets/images/notifimg.png" />
                      <div className="notiright">
                        <span className="nothead">Azma Fallah</span>
                        <span className="nottime">10:40 am</span>
                        <span className="notitx">
                          Excepteur sint occaecat...
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="croxbtn">
                        <img src="assets/images/crox.png" />
                      </i>
                      <img src="assets/images/notifimg.png" />
                      <div className="notiright">
                        <span className="nothead">Azma Fallah</span>
                        <span className="nottime">10:40 am</span>
                        <span className="notitx">
                          Excepteur sint occaecat...
                        </span>
                      </div>
                    </li>
                    <li>
                      <a className="Viewall" href="Notification.html">
                        View All
                      </a>
                    </li>
                  </ul>
                </li>
              ) : null}
              {!userToken ? (
                <li className="nav-item">
                  <a
                    className="nav-link btn btn-outline-warning"
                    onClick={handleShow}
                  >
                    <span className="d-none d-md-block">Sign up / Login</span>
                    <span className=" d-block d-md-none">
                      <i className="fa fa-sign-in"></i>
                    </span>
                  </a>
                </li>
              ) : null}
              <li className="nav-item">
                <a className="nav-link btn btn-warning" href="#">
                  <span className="d-none d-md-block">Post Property</span>
                  <span className=" d-block d-md-none">
                    <i className="fa fa-home"></i>
                  </span>
                </a>
              </li>
              {userToken ? (
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle btn btn-outline-warning padding"
                    data-toggle="dropdown"
                  >
                    <i>
                      <img src="assets/images/user.png" />
                    </i>
                    <span>{userName}</span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu dash">
                    <li>
                      <Link to="/my_dashboard">
                        <img src="assets/images/layout.png" />
                        My dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => setSignupPopup(true)}
                        // data-toggle="modal"
                        // data-target="#Log"
                        style={{ cursor: "pointer" }}
                      >
                        <img src="assets/images/logout.png" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </header>
      <Login
        clickLoginPopup={clickLoginPopup}
        handleClose={handleClose}
        setClickLoginPopup={setClickLoginPopup}
      />
      <Logout
        closePopUp={closePopUp}
        signupPopup={signupPopup}
        handleSignupPopup={handleSignupPopup}
      />
    </div>
  );
}

export default Header;
