import React from "react";
function FSLoader({isLoading}) {
    if(!isLoading) return null
  return (
    <div className="loader-container">
      <div className="loader-image-container">
        <img src="assets/images/loader.gif" />
      </div>
    </div>
  );
}

export default FSLoader;
