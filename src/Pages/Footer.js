import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 box">
          <div className="widget">
            <a className="bottom-logo" href="index.html">
              <img src="assets/images/logo.png" alt="logo" />
            </a>
            <h5>Follow us on</h5>
            <ul className="social-links d-flex mb-0">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 box">
          <div className="widget">
            <h5>Explore</h5>
            <ul className="bottom-links mb-0">
              <li>
                <Link to="/about_us" >About us</Link>
              </li>
              <li>
              <Link to="/how_it_works" >How it works</Link>
              </li>
              <li><Link to="/faq" >FAQs</Link>
              </li>
              <li>
              <Link to="/contact_us" >Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 box">
          <div className="widget">
            <h5>Useful links</h5>
            <ul className="bottom-links mb-0">
              <li>
                <Link to="/terms_Conditions" >Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/terms_Conditions" >Support</Link>
              </li>
              <li>
              <Link to="/policy" >Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 box">
          <div className="widget">
            <h5>Download the app</h5>
            <ul className="bottom-links mb-0">
              <li>
                <a href="#">
                  <img src="assets/images/app-store.png" alt="appstore" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="assets/images/google-play.png"
                    alt="googleplay"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2021 Hoy Iyo Deegaan - All rights reserved{" "}
      </p>
    </div>
  </footer>
}

export default Footer;