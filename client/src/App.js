import React from "react";
import logo from "../src/assets/images/nike_sneakers-brandlogo.net.png";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";

function App() {
  return (
    <div>
       <Nav></Nav>
        
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Can you kick it?</p>
            </header>
          </div>
    </div>
       
        
  );
}

export default App;
