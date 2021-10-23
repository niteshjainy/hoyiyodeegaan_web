import React from "react";
import { Link } from "react-router-dom";
import SideNavForProfile from "../Components/SideNavForProfile";
function PostNewList2() {
  return (
    <main>
      <section className="static review marginbottom">
        <div className="container">
          <div className="heading">
            <h2 className="inner-title">My dashboard</h2>
          </div>
          <SideNavForProfile />
          <div className="col-sm-9 rightitems stepssecond">
            <div className="heading">
              <h2 className="inner-title about">Post new listing</h2>
            </div>
            <div className="setps">
              <span className="stepstext active">
                <em>1</em> Upload
              </span>
              <span className="line active"></span>
              <span className="stepstext active">
                <em>2</em> Details
              </span>
              <span className="line "></span>
              <span className="stepstext">
                <em>3</em> Preview
              </span>
            </div>
            <div className="borderbottom none">
              <p className="intro size18">Details (2/3)</p>
              <div className="uploadicbox">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width:"70%"}}
                  >
                    <span className="sr-only">70% Complete</span>
                  </div>
                </div>
              </div>
              <div className="filterwidths">
                <label>Title</label>
                <div className="radio">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>Select category</label>
                <div className="radio">
                  <li className="widths">
                    <div className="border">
                      <img src="assets/images/store.png" />
                      <span>Store</span>
                    </div>
                  </li>
                  <li className="widths">
                    <div className="border">
                      <img src="assets/images/category2.png" />
                      <span>Property</span>
                    </div>
                  </li>
                  <li className="widths">
                    <div className="border">
                      <img src="assets/images/category3.png" />
                      <span>Land</span>
                    </div>
                  </li>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>I would like to</label>
                <div className="radio">
                  <p>
                    <input type="radio" id="test1" name="radio-group" />
                    <label htmlFor="test1">Buy</label>
                  </p>
                  <p>
                    <input type="radio" id="test2" name="radio-group" />
                    <label htmlFor="test2">Rent</label>
                  </p>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>I would like to</label>
                <div className="radio">
                  <p>
                    <input type="radio" id="test4" name="radio-group1" />
                    <label htmlFor="test4">Range</label>
                  </p>
                  <p>
                    <input type="radio" id="test5" name="radio-group1" />
                    <label htmlFor="test5">Fixed</label>
                  </p>
                  <div className="col-sm-3 paddingleft">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Min Price"
                    />
                  </div>
                  <div className="col-sm-3 paddingright">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Max Price"
                    />
                  </div>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>Description</label>
                <div className="radio">
                  <textarea
                    className="form-control area"
                    placeholder="Enter description here.."
                  ></textarea>
                </div>
              </div>
              <div className="fillwidths search steps2">
                <label>Location</label>
                <div className="radio">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <button className="search">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="fillwidths search steps2">
                <label>Area(m)</label>
                <div className="radio">
                  <div className="col-sm-3 leftsearch">
                    L{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="col-sm-3 leftsearch">
                    W{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>No. of bedrooms</label>
                <div className="radio">
                  <li className="start">
                    <div className="rating">
                      <em>1</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>2</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>3</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>4</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5 +</em>
                    </div>
                  </li>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>No. of bathrooms</label>
                <div className="radio">
                  <li className="start">
                    <div className="rating">
                      <em>1</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>2</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>3</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>4</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5 +</em>
                    </div>
                  </li>
                </div>
              </div>
              <div className="filterwidths steps2">
                <label>No. of garages</label>
                <div className="radio">
                  <li className="start">
                    <div className="rating">
                      <em>1</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>2</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>3</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>4</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5</em>
                    </div>
                  </li>
                  <li className="start">
                    <div className="rating">
                      <em>5 +</em>
                    </div>
                  </li>
                </div>
              </div>
              <div className="filterwidths">
                <label>Amenities</label>
                <div className="radio">
                  <label className="containers">
                    Air conditioning
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Air conditioning
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Laundry
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Outdoor shower
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Refrigerator
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Swimming pool
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    Swimming pool
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="containers">
                    WiFi
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fillwidths btns">
                <button className="btn btn-outline-warning">
                  <span className="d-none d-md-block">Reset</span>
                </button>
                <Link to="/post_new_3"><button className="btn btn-warning">
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

export default PostNewList2;
