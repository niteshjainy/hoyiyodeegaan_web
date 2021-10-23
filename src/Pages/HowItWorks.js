import React from "react";
function HowItWorks() {
  return (
    <main>
      <section className="static review">
        <div className="container">
          <div className="heading">
            <h2 className="inner-title about">How it works</h2>
          </div>
          <div className="middle">
            <span className="smalltext">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              mollit id est laborum consequat. Lorem ipsum dolor sit amet
              adipiscing elit, sed do eiusmod incididunt ut labore.
            </span>
            <div className="fullwidths">
              <div className="col-sm-2 aboutimg">
                <img src="assets/images/worksicon1.png" />
              </div>
              <div className="col-sm-10 aboutright">
                <p className="intro">Add Property</p>
                <span className="smalltext">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui mollit id est laborum consequat. Lorem ipsum dolor sit
                  amet adipiscing elit, sed do eiusmod incididunt ut labore.
                </span>
              </div>
            </div>
            <div className="fullwidths">
              <div className="col-sm-2 aboutimg">
                <img src="assets/images/worksicon2.png" />
              </div>
              <div className="col-sm-10 aboutright">
                <p className="intro">Search Property</p>
                <span className="smalltext">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui mollit id est laborum consequat. Lorem ipsum dolor sit
                  amet adipiscing elit, sed do eiusmod incididunt ut labore.
                </span>
              </div>
            </div>
            <div className="fullwidths">
              <div className="col-sm-2 aboutimg">
                <img src="assets/images/worksicon3.png" />
              </div>
              <div className="col-sm-10 aboutright">
                <p className="intro">Select property and make deal</p>
                <span className="smalltext">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui mollit id est laborum consequat. Lorem ipsum dolor sit
                  amet adipiscing elit, sed do eiusmod incididunt ut labore.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;
