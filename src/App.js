import React, { useEffect, useState } from "react";
import Index from "./Pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import firebase from "./Firebase";
import AboutUs from "./Pages/AboutUs";
import HowItWorks from "./Pages/HowItWorks";
import FAQ from "./Pages/FAQ";
import ContactUs from "./Pages/ContactUs";
import TANDC from "./Pages/TermAndCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setIdToken, updateToken } from "./redux/features/user";
import { useLocation } from "react-router-dom";
import EditProfile from "./Pages/EditProfile";
import PostNewList1 from "./Pages/PostNewList1";
import PostNewList2 from "./Pages/PostNewList2";
import PostNewList3 from "./Pages/PostNewList3";
function App() {
  const { userToken, isLoading, userData } = useSelector((state) => state.user);
  const [userObject, setUserObject] = useState(userData);
  const dispatch = useDispatch();
 
// updating token on refresh
  useEffect(() => {
    if (Object.entries(userData).length === 0) {
      if (Object.entries(userObject).length > 1) {
        dispatch(addUser(userObject));
      }
    }
  }, [userObject]);

  useEffect(() => {
    if (Object.entries(userObject).length === 0) {
      const USER = JSON.parse(localStorage.getItem("user"));
      if(USER){
        setUserObject(USER);
      }
    }
  }, [userData]);
  // function for scrolling on top
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  // user token checking
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateToken(JSON.stringify(user)));
      }
    });
  }, [userToken]);

  return (
    <Router>
      <ScrollToTop />
      {/* <FSLoader isLoading={isLoading} /> */}
      <Header />
      <Switch>
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/how_it_works" component={HowItWorks} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/contact_us" component={ContactUs} />
        <Route exact path="/terms_Conditions" component={TANDC} />
        <Route exact path="/policy" component={PrivacyPolicy} />
        <Route exact path="/edit_profile" component={EditProfile} />
        <Route exact path="/post_new_1" component={PostNewList1} />
        <Route exact path="/post_new_2" component={PostNewList2} />
        <Route exact path="/post_new_3" component={PostNewList3} />
        <Route exact path="/my_dashboard" component={Dashboard} />
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
