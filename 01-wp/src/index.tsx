import React from "react";
import ReactDOM from "react-dom";
import { LogoComponent } from './logoComponent';
import { Component } from "./component";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <Component />
    <LogoComponent />
  </div>,
  document.getElementById("root")
);