import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import { createGlobalStyle } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

require("file-loader?name=[name].[ext]!./index.html");

const GlobalStyle = createGlobalStyle`
  * 
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
`;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
