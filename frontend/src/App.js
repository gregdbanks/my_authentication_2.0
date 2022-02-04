import React, { useState } from "react";
import "./App.css";

import PrivateRoute from "./utils/PrivateRoute";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div className="App">
        <Header title={title} updateTitle={updateTitle} />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <SignUp
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/signup">
              <SignUp
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/login">
              <Login showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
          <Alert errorMessage={errorMessage} hideError={updateErrorMessage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
