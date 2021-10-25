import React, { useState } from "react";
import SideNavForProfile from "../Components/SideNavForProfile";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/features/user";
import SelectLocation from "../Components/SelectLocation";
import PhoneNumberField from "../Components/PhoneNumberField";
import axios from "axios";
function EditProfile() {
  const { userData } = useSelector((state) => state.user);
  const [user, setUser] = useState(userData);
  const [imagePath, setImagePath] = useState(userData.profilePic);
  const [profilePic, setProfilePic] = useState(null);
  // const [phone, setPhone] = useState(userData.phone);
  // const [options, setOptions] = useState("+91");
  const dispatch = useDispatch();
  let formData = new FormData();
  // const combinePhoneWithCode = () => {
  //   const phoneNumber = options + "" + phone;
  //   setUser({ ...user, phone: phoneNumber });
  // };
  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    }
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePath(URL.createObjectURL(event.target.files[0]));
      setProfilePic(event.target.files[0]);
      // setUser({ ...user, profilePic: event.target.files[0] })
    }
  };
  const uploadImage = (e) => {
    e.preventDefault();
    const tempform = new FormData();
    tempform.append("photos", profilePic);
    axios
      .post("/app/upload/files", tempform)
      .then((res) => setUser({ ...user, profilePic: res.data.image[0] })).then((e) => updateProfile(e))
      .catch((err) => alert(err));
  };
  const handlePhoneInput = (e) => {
    setUser({ ...user, phone: e });
  };
  const updateProfile = () => {
    console.log("user added", user);
    // uploadImage();
    console.log("user added", user);
    dispatch(editUser(JSON.stringify(user)));

    // formData.append(
    //   "profilePic",
    //   "https://storage.googleapis.com/hoyiyodeegaan-da4ae.appspot.com/file_6e21e842-2e98-451d-aae3-1fc483820b84.jpg?"
    // );
    // formData.append("profilePic", profilePic);
    // formData.append("name", user.name);
    // formData.append("phone", user.phone);
    // formData.append("email", user.email);
    // formData.append("location", user.location);
    // formData.append("about", user.about);
    // formData.append("language", "ENG");
    // formData.append("loginType", "PHONE NUMBER");
    // formData.append("socialId", "helllo");
    // formData.append("rating", "2");
    // const data = JSON.parse(formData);

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

  return (
    <main>
      <section className="static review marginbottom">
        <div className="container">
          <div className="heading">
            <h2 className="inner-title">My dashboard</h2>
          </div>
          <SideNavForProfile />
          <div className="col-sm-9 rightitems">
            <form onSubmit={uploadImage}>
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
                    required
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Shamsha Ahmed"
                    onChange={handleInput}
                  />
                </div>
                <div className="col-sm-6 leftnoxes phone">
                  <label className="label">Mobile number</label>
                  {/* <select
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
                    required
                    value={phone}
                    type="text"
                    className="form-control"
                    placeholder="70201761"
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={combinePhoneWithCode}
                  /> */}
                  <PhoneNumberField
                    value={user.phone}
                    onChange={handlePhoneInput}
                    name="phone"
                    placeholder="70201761"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="fillwidths">
                <div className="col-sm-12 leftnoxes">
                  <label className="label">Email ID</label>
                  <input
                    required
                    value={user.email}
                    name="email"
                    type="email"
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
                    required
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
                {/* <input
                  required
                  value={user.location}
                  name="location"
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
                  onChange={handleInput}
                /> */}
                <SelectLocation
                  onChange={handlePhoneInput}
                  className="form-control"
                  value={user.location}
                  onChange={handleInput}
                  name="location"
                />
                {/* <button className="search">
                  <i className="fa fa-search"></i>
                </button> */}
              </div>
              <div className="fillwidths btns">
                <button className="btn btn-outline-warning">
                  <span className="d-none d-md-block">Cancel</span>
                </button>
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-warning"
                >
                  <span className="d-none d-md-block">Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EditProfile;
