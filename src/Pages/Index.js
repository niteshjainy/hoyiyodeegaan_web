import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Index() {

  return (
    // <div className="homepage">
      <main>
        <section className="banner header-space">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-9">
                <div className="box">
                  <h1>We make spotlight on your property!</h1>
                  <form>
                    <div className="form-row">
                      <div className="col-sm-4 col-md-5">
                        <label htmlFor="validationCustom01">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="Enter address, zip, city or state"
                        />
                      </div>
                      <div className="col-sm-4 col-md-3">
                        <label htmlFor="validationCustom02">Category</label>
                        <select
                          className="custom-select"
                          id="validationCustom02"
                        >
                          <option selected>Select Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-sm-4 col-md-3">
                        <label htmlFor="validationCustom03">Type</label>
                        <select
                          className="custom-select"
                          id="validationCustom03"
                        >
                          <option selected>Select Type</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-md-1 find">
                        <button className="search-btn">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <p>
                    In oculis quidem se esse admonere interesse enim maxim
                    placeat, fe possimus, omnis. Et quidem faciunt, ut labore et
                    harum exercitus. Si sine metu degendae praesidia morte.
                  </p>
                  <button className="btn btn-warning">
                    <span>Get Started Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hand-picked greybg">
          <div className="container">
            <div className="row">
              <h1 className="mainheading">Hand picked for you</h1>
              <span className="headingbottom">
                Here are some recommendations based on your current location or
                previous search history.
              </span>
              <div className="slider">
                <OwlCarousel
                  items={3}
                  className="owl-theme"
                  loop
                  id="owl-carousel"
                  nav
                  margin={20}
                  className="owl-carousel owl-theme"
                >
                  {/* <div
                    id="owl-carousel"
                    className="owl-carousel owl-theme"
                    class="owl-carousel owl-theme"
                  > */}
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand1.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/redheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">House for sale</span>
                        <span className="rate">$1,500,000 - $1,800,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Property
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            300 x 200 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Ahmed Ali</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">1 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand2.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/greyheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">Store for rent</span>
                        <span className="rate">$600,000 - $800,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Store
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            300 x 200 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist1.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Shaimah CP</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">2 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand3.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/greyheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">Land for Sale</span>
                        <span className="rate">$2,000,000 - $4,000,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Land
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            800 x 500 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist3.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Abdul Sayed</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">5 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand1.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/redheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">House for sale</span>
                        <span className="rate">$1,500,000 - $1,800,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Property
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            300 x 200 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Ahmed Ali</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">1 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand2.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/greyheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">Store for rent</span>
                        <span className="rate">$600,000 - $800,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Store
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            300 x 200 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist1.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Shaimah CP</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">2 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="inner">
                      <span className="images">
                        <a href="details.html">
                          <img src="assets/images/Tophand3.png" />
                        </a>
                        <a href="">
                          <i>
                            <img src="assets/images/greyheart.png" />
                          </i>
                        </a>
                      </span>
                      <div className="paddings">
                        <span className="house">Land for Sale</span>
                        <span className="rate">$2,000,000 - $4,000,000</span>
                        <div className="apartmentslisting">
                          <div className="lower">
                            <i>
                              <img src="assets/images/location.png" />
                            </i>
                            Mogadishu, Somalia
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/property.png" />
                            </i>
                            Land
                          </div>
                          <div className="lower">
                            <i>
                              <img src="assets/images/meter.png" />
                            </i>
                            800 x 500 (m)
                          </div>
                        </div>
                        <div className="profilebox">
                          <div className="circleimg">
                            <img src="assets/images/profilelist3.png" />
                          </div>
                          <div className="profiletittle">
                            <p className="tittle">Abdul Sayed</p>
                            <div className="rating">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i
                                className="fa fa-star grey"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                          <div className="ratingcalender">
                            <span className="ratingcal">
                              <img src="assets/images/calendarrating.png" />
                              <span className="ratext">5 day ago</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </OwlCarousel>

                <span className="viewall">
                  <a href="Listing.html">
                    {" "}
                    View all recommendations
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="hand-picked whitebg">
          <div className="container">
            <div className="row">
              <h1 className="mainheading">Categories</h1>
              <span className="headingbottom">
                We have the most simple step for our users to filter listings by
                selecting a category.
              </span>
              <div className="slider">
                <div className="row">
                  <div className="col-sm-4 boxes">
                    <div className="innerpadding">
                      <span className="cateicons">
                        <img src="assets/images/categories1.png" />
                      </span>
                      <span className="cathead">Find stores</span>
                      <span className="catetext">
                        In oculis quidem se esse admonere interesse enim maxim
                        placeat.
                      </span>
                      <button className="btn btn-warning">
                        <a href="Listing.html"><span>View more</span></a>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-4 boxes">
                    <div className="innerpadding">
                      <span className="cateicons">
                        <img src="assets/images/categories2.png" />
                      </span>
                      <span className="cathead">Find property</span>
                      <span className="catetext">
                        In oculis quidem se esse admonere interesse enim maxim
                        placeat.
                      </span>
                      <button className="btn btn-warning">
                        <a href="Listing.html"><span>View more</span></a>
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-4 boxes">
                    <div className="innerpadding">
                      <span className="cateicons">
                        <img src="assets/images/categories3.png" />
                      </span>
                      <span className="cathead">Find land</span>
                      <span className="catetext">
                        In oculis quidem se esse admonere interesse enim maxim
                        placeat.
                      </span>
                      <button className="btn btn-warning">
                            <a href="Listing.html"><span>View more</span></a>
                      </button>
                    </div>
                  </div>
                </div>
                <span className="viewall">
                  <a href="Listing.html">
                    {" "}
                    View all recommendations
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bluebox">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 boxlefts">
                <p className="buyhead">
                  Buy or rent your property easily on Hoy Iyo Deegaan!
                </p>
                <span className="boxleftstexts">
                  100% reliable, easy steps and fast response.
                </span>
              </div>
              <div className="col-sm-3 btnrights">
                <button className="btn btn-warning">
                  <span>Post Property</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="hand-picked whitebg">
          <div className="container">
            <div className="row">
              <h1 className="mainheading">You’re in good hands</h1>
              <span className="headingbottom">
                Hoy Iyo Deegaan has helped around 1 million of people find
                properties in the past 4 years. Here’s what they have to say.
              </span>
              <div className="slider">
                {/* <div id="testimonial" className="owl-carousel owl-theme"> */}
                <OwlCarousel
                  items={2}
                  className="owl-theme"
                  loop
                  id="testimonial"
                  nav
                  margin={30}
                  className="owl-carousel owl-theme"
                >
                  <div className="item">
                    <div className="paddingsiner">
                      <div className="col-sm-3 picprofile">
                        <img src="assets/images/testprofile.png" />
                      </div>
                      <div className="col-sm-9 rightext">
                        <p className="tittle">Yasir Mohamed</p>
                        <span className="testmonilasmall">Buyer, Somalia</span>
                        <div className="rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star grey" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-sm-12 fulltext">
                        <p className="text">
                          Hoy Iyo Deegaan has a better response rate compared to
                          any of their competitors. Recommendations through
                          search feature is very useful to find your dream home!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paddingsiner">
                      <div className="col-sm-3 picprofile">
                        <img src="assets/images/testprofile1.png" />
                      </div>
                      <div className="col-sm-9 rightext">
                        <p className="tittle">Noora Hussen</p>
                        <span className="testmonilasmall">Seller, Somalia</span>
                        <div className="rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star grey" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-sm-12 fulltext">
                        <p className="text">
                          This site enables to reach far more diverse audience
                          compared to traditional advertising media. The whole
                          process is smooth. UI is simple & easy to understand.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paddingsiner">
                      <div className="col-sm-3 picprofile">
                        <img src="assets/images/testprofile.png" />
                      </div>
                      <div className="col-sm-9 rightext">
                        <p className="tittle">Yasir Mohamed</p>
                        <span className="testmonilasmall">Buyer, Somalia</span>
                        <div className="rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star grey" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-sm-12 fulltext">
                        <p className="text">
                          Hoy Iyo Deegaan has a better response rate compared to
                          any of their competitors. Recommendations through
                          search feature is very useful to find your dream home!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paddingsiner">
                      <div className="col-sm-3 picprofile">
                        <img src="assets/images/testprofile1.png" />
                      </div>
                      <div className="col-sm-9 rightext">
                        <p className="tittle">Noora Hussen</p>
                        <span className="testmonilasmall">Seller, Somalia</span>
                        <div className="rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star grey" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-sm-12 fulltext">
                        <p className="text">
                          This site enables to reach far more diverse audience
                          compared to traditional advertising media. The whole
                          process is smooth. UI is simple & easy to understand.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </OwlCarousel>

                <span className="viewall">
                  <a href="rating.html">
                    {" "}
                    View all testimonials
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    // </div>
  );
}

export default Index;
