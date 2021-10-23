import React, { useState } from "react";
import SideNavForProfile from "../Components/SideNavForProfile";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/features/user";
function EditProfile() {
  const { userData } = useSelector((state) => state.user);

  const [user, setUser] = useState(userData);
  const [imagePath, setImagePath] = useState(null);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [phone, setPhone] = useState(user.phone);
  const [options, setOptions] = useState("+91");
  const dispatch = useDispatch();
  let formData = new FormData();
  const combinePhoneWithCode = () => {
    const phoneNumber = options + "" + phone;
    setUser({ ...user, phone: phoneNumber });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const updateProfile = () => {
    formData.set("profilePic", "url");
    // formData.set("profilePic", profilePic);
    formData.set("name", user.name);
    formData.set("phone", phone);
    formData.set("email", user.email);
    formData.set("location", user.location);
    formData.set("about", user.about);
    formData.set("language", "ENG");
    formData.set("loginType", "PHONE NUMBER");
    formData.set("socialId", "helllo");
    formData.set("rating", "2");
    dispatch(editUser(formData));
    // axios
    //   .put("/app/edit-user/yQr3xEkhsxd30DSzfgpc", formData, {
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZVd1UWFwUG1paWJXVVpRQTZWTGciLCJpYXQiOjE2MzMzNDQ4NTl9.UZPGzWZ4QNrLO9g5QVt0z96rpU8qTFs9Fuj-D7ntozg",
    //     },
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((error) => alert(error));
  };
  // image change event
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePath(URL.createObjectURL(event.target.files[0]));
      setProfilePic(event.target.files[0]);
    }
  };
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
              <h2 className="inner-title about">Edit profile</h2>
            </div>
            <div className="uploadsection">
              <span className="ppric">
                {imagePath ? (
                  <img src={imagePath} />
                ) : (
                  <img src="assets/images/big.png" />
                )}
              </span>
              <div className="uploadbs">
                <li>
                  <input type="file" onChange={onImageChange} />
                  <i className="fa fa-pencil"></i>
                  <span>Edit Image</span>
                </li>
                <li className="del" onClick={() => setImagePath(null)}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                  <span>Delete Image</span>
                </li>
              </div>
            </div>
            <div className="heading">
              <p className="intro size18">Personal info</p>
            </div>
            <div className="fillwidths">
              <div className="col-sm-6 leftnoxes">
                <label className="label">Name</label>
                <input
                  value={user.name}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Shamsha Ahmed"
                  onChange={handleInput}
                />
              </div>
              <div className="col-sm-6 leftnoxes phone">
                <label className="label">Mobile number</label>
                <select
                  value={options}
                  className="form-control"
                  onChange={(e) => setOptions(e.target.value)}
                >
                  <option value="+252" selected={options === +252}>
                    +252
                  </option>
                  <option value="+91" selected={options === +91}>
                    +91
                  </option>
                </select>
                <input
                  value={phone}
                  type="text"
                  className="form-control"
                  placeholder="70201761"
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={combinePhoneWithCode}
                />
              </div>
            </div>
            <div className="fillwidths">
              <div className="col-sm-12 leftnoxes">
                <label className="label">Email ID</label>
                <input
                  value={user.email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="shamsha.ad06@gmail.com"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="fillwidths">
              <div className="col-sm-12 leftnoxes">
                <label className="label">About</label>
                <textarea
                  value={user.about}
                  name="about"
                  className="form-control"
                  placeholder="Write description here..."
                  onChange={handleInput}
                ></textarea>
              </div>
            </div>
            <div className="heading">
              <p className="intro size18">Location</p>
            </div>
            <div className="fillwidths search">
              <input
                value={user.location}
                name="location"
                type="text"
                className="form-control"
                placeholder="Search Location"
                onChange={handleInput}
              />
              <button className="search">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="fillwidths btns">
              <button className="btn btn-outline-warning">
                <span className="d-none d-md-block">Cancel</span>
              </button>
              <button className="btn btn-warning" onClick={updateProfile}>
                <span className="d-none d-md-block">Save</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EditProfile;
