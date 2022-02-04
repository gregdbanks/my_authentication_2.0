import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";

function Home(props) {
  useEffect(() => {
    axios
      .get(API_BASE_URL + "me", {
        headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) },
      })
      .then(function (response) {
        if (response.status !== 200) {
          redirectToLogin();
        }
      })
      .catch(function (error) {
        redirectToLogin();
      });
  });
  function redirectToLogin() {
    props.history.push("/login");
  }
  return <div className="mt-2">Home page only user should see.</div>;
}

export default withRouter(Home);
