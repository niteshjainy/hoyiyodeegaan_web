import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
function SideNavForProfile() {
    const location = useLocation();
const url = location.pathname 
    return <div className="col-sm-3 leftmenuitesms">
    <li className={url === "/edit_profile" ? "activelist" : ""}>
    <Link to="/edit_profile">
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <span>My profile</span>
        </Link>
    </li>
    <li className={url === "/post_new_1" || url === "/post_new_2" || url === "/post_new_3" ? "activelist" : ""}>
      <Link to="/post_new_1">
        <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        <span>Post new listing</span>
      </Link>
    </li>
    <li>
      <a href="">
        <i className="fa fa-list" aria-hidden="true"></i>
        <span>My listings</span>
      </a>
    </li>
    <li>
      <a href="">
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <span>Shortlisted</span>
      </a>
    </li>
    <li>
      <a href="">
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <span>My reviews</span>
      </a>
    </li>
    <li>
      <a href="">
        <i className="fa fa-bell-o" aria-hidden="true"></i>
        <span>Notifications</span>
      </a>
    </li>
  </div>
}

export default SideNavForProfile;