import React from 'react';
function FAQ() {
    return <main>
      
    <section className="static">
      <div className="container">

          <div className="heading">
            <h2 className="inner-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="blue-box">
            <h5>What is Hoy Iyo Deegaan?</h5>
            <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui mollit id est laborum consequat. Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod incididunt ut labore. Lorem ipsum dolor sit consectetur et a elit, sedo eiusmod ali incididunt ut labore et magna. Ut enim ad minim veniam quis ullamco.</p>
          </div>

          <div className="panel">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span>Collapsible Group Item #1</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <span>Collapsible Group Item #2</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span>Collapsible Group Item #3</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          <span>Collapsible Group Item #4</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          <span>Collapsible Group Item #5</span>
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-md-12 col-lg-6">
                <div className="pic">
                  <img src="assets/images/faq.png" alt="faq" />
                </div>
              </div>

            </div>
          </div>

      </div>
    </section>

  </main>
}

export default FAQ;