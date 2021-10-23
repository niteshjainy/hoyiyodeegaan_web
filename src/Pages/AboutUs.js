import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function AboutUs() {
    return <main>
    <section className="static review marginbottom">
        <div className="container">
            <div className="heading">
                <h2 className="inner-title about">About us</h2>
            </div>
            <div className="middle">
                <p className="intro">Introduction</p>
                <span className="smalltext">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui mollit id est laborum consequat. Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod incididunt ut labore. Lorem ipsum dolor sit consectetur et a adipiscing elit, sed do eiusmod ali incididunt ut labore et magna. Ut enim ad minim veniam quis ullamco.
                </span>
                <div className="fullwidths">
                    <div className="col-sm-4 aboutimg">
                        <img src="assets/images/aboutleft.png"/>
                    </div>
                    <div className="col-sm-8 aboutright">
                        <p className="intro">Why Hoy Iyo Deegaan?</p>
                        <span className="smalltext">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui mollit id est laborum consequat. Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod incididunt ut labore. Lorem ipsum dolor sit consectetur et a adipiscing elit, seddo eiusmod ali incididunt ut labore et magna. Ut enim ad minim veniam quis ullamco. Excepteur sint occaecat cupid non proident, sunt in culpa qui mollit id est laborum consequat.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="bluebox">
        <div className="container">
            <div className="row">
                <div className="col-sm-7 boxlefts">
                    <p className="intro">Our mission</p>
                    <span className="smalltext">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui mollit id est laborum consequat. Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod incididunt ut labore. Lorem ipsum dolor sit consectetur et a adipiscing elit, sed do eiusmod ali incididunt ut labore et magna. Ut enim ad minim veniam quis ullamco. Excepteur sint occaecat cupid non proident, sunt in culpa.
                    </span>
                </div>
               <div className="col-sm-5 btnrights">
                    <div className="icons">
                        <i className="col-sm-3 icnimg">
                            <img src="assets/images/marketplace.png"/>
                        </i>
                        <div className="col-sm-9 texticon">
                            <p className="intro">Make efficient housing marketplace</p>
                        </div>
                    </div>
                    <div className="icons">
                        <i className="col-sm-3 icnimg">
                            <img src="assets/images/agent.png"/>
                        </i>
                        <div className="col-sm-9 texticon">
                            <p className="intro">Get local agents to your side</p>
                        </div>
                    </div>
                    <div className="icons">
                        <i className="col-sm-3 icnimg">
                            <img src="assets/images/support.png"/>
                        </i>
                        <div className="col-sm-9 texticon">
                            <p className="intro">Advanced technical support</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
    </section>
    <section className="hand-picked whitebg">
        <div className="container">
            <div className="row">
                <h1 className="mainheading">Reviews by our users</h1>
                <div className="slider">
                <OwlCarousel
                  items={3}
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
                    
                </div>
            </div>  
        </div> 
    </section>
</main>
}

export default AboutUs;