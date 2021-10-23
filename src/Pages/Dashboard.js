import React from "react";
import { Link } from "react-router-dom";
function Dashboard() {
  return <main>
  <section className="static review marginbottom welcomebg">
      <div className="container">
          <p className="helo">Hello Shamsha,</p>
          <p className="weldash">Welcome to Hoy Iyo Deegaan!</p>
          <span className="textbelow">Please set up your profile and let us know about you.</span>
          <Link to="/edit_profile"><a className="btn btn-warning set">
                        <span>Set up your profile</span>
                      </a></Link>
          {/* <a className="btn btn-warning set" href="profilesetup.html"><span>Set up your profile</span></a> */}
      </div>
  </section>
</main>
}

export default Dashboard;
