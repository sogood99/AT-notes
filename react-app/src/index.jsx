import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Latex from "./latex";

ReactDOM.render(
  <React.StrictMode>
    <Latex>
      <App />
    </Latex>
  </React.StrictMode>,
  document.getElementById("root")
);
