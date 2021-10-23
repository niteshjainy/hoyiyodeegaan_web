import React from "react";
import { Link } from "react-router-dom";
import SideNavForProfile from "../Components/SideNavForProfile";
function PostNewList1() {
  return (
    <main>
      <section className="static review marginbottom">
        <div className="container">
          <div className="heading">
            <h2 className="inner-title">My dashboard</h2>
          </div>
          <SideNavForProfile />
          <div className="col-sm-9 rightitems">
            <div className="heading">
              <h2 className="inner-title about">Post new listing</h2>
            </div>
            <div className="setps">
              <span className="stepstext active">
                <em>1</em> Upload
              </span>
              <span className="line active"></span>
              <span className="stepstext">
                <em>2</em> Details
              </span>
              <span className="line"></span>
              <span className="stepstext">
                <em>3</em> Preview
              </span>
            </div>
            <div className="borderbottom none">
              <p className="intro size18">Upload (1/3)</p>
              <div className="uploadicbox">
                <div className="border">
                  <div className="imgborder">
                    <img src="assets/images/uploadbig.png" />
                  </div>
                  <div className="uploadbs listingupload">
                    <input type="file" />
                    <span>Click here to upload image/video</span>
                  </div>
                </div>
                <div className="infotext">
                  <img src="assets/images/detailsinfo.png" />
                  <span>
                    You can upload maximum 5 Images and 1 video. <br />
                    Maximum upload size should be __ MB.
                  </span>
                </div>
              </div>
              <div className="fillwidths btns">
                <button className="btn btn-outline-warning">
                  <span className="d-none d-md-block">Reset</span>
                </button>
                <Link to="/post_new_2"><button className="btn btn-warning">
                  <span className="d-none d-md-block">Next</span>
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PostNewList1;
