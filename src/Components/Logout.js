import React from "react";
import Modal from "react-bootstrap/Modal";
function Logout({closePopUp, signupPopup, handleSignupPopup}) {
  return (
    <Modal
    id="Log"
      className="modal fade"
      show={signupPopup}
      onHide={handleSignupPopup}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <div dialogClassName="modal-dialog">
        <div contentClassName="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Are you sure want to logout?</h4>
          </div>
          <div className="modal-body">
            <div className="rating">
              <div className="ratingform LOGOUT">
                <button onClick={closePopUp} className="btn btn-warning submit">
                  <span>Yes</span>
                </button>
                <button
                  className="btn btn-outline-warning"
                  // className="close"
                //   data-dismiss="modal"
                onClick={handleSignupPopup}
                >
                  <span>No</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Logout;
