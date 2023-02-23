/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./assets";

console.log(
  "====================================================================="
);
console.log(
  "= Hi there! Feel free to contact me by email igolopolosov@gmail.com ="
);
console.log(
  "====================================================================="
);

ReactDOM.render(<App />, document.getElementById("entry-point"));
