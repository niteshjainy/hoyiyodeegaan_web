import React from "react";
function ContactUs() {
  return (
    <main>
      <section className="static">
        <div className="container">
          <div className="heading">
            <h2 className="inner-title contacthead">Contact Us</h2>
            <span className="smalltext">
              Just write us a message and our team will get back to you withing
              24 hours!
            </span>
          </div>
          <div className="contactmiddle">
            <div className="col-sm-6 contactleft">
              <img src="assets/images/contactleft.png" />
            </div>
            <div className="col-sm-6 contactright">
              <div className="paddingform">
                <form className="contact">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning submit">
                      <span>Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="greybgcontact">
        <div className="container">
          <div className="col-sm-4 ctcbottom">
            <span className="contactimg">
              <img src="assets/images/phone.png" />
            </span>
            <p className="callhead">Call us</p>
            <span className="cntactdetails">
              <a href="tel:+252 70201761">+252 70201761</a>,{" "}
              <a href="tel:+252 70803362 ">+252 70803362 </a>
            </span>
          </div>
          <div className="col-sm-4 ctcbottom">
            <span className="contactimg">
              <img src="assets/images/mail.png" />
            </span>
            <p className="callhead">Message us</p>
            <span className="cntactdetails">
              <a href="mailto:info@hayoiyodeegan.com">info@hayoiyodeegan.com</a>
            </span>
          </div>
          <div className="col-sm-4 ctcbottom">
            <span className="contactimg">
              <i>
                <img src="assets/images/instagram.png" />
              </i>
              <i>
                <img src="assets/images/facebook.png" />
              </i>
              <i>
                <img src="assets/images/twitter.png" />
              </i>
            </span>
            <p className="callhead">Follow us</p>
            <span className="cntactdetails">
              <a href="#">Instagram</a>,<a href="#">Facebook</a>,
              <a href="#">Twitter</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
