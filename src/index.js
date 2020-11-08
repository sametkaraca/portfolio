import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
  <HttpsRedirect>
    <Router>
      <App />
    </Router>
  </HttpsRedirect>,
  document.getElementById("root")
);

//Github Update
