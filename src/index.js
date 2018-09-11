import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header text="Hello Coder" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
