import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./styles.css";

import AppNav from "./components/AppNav";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppNav />
      <Header text="Hello Coder" />
      <h2>Welcome to awesome React application development!</h2>
      <AppFooter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
