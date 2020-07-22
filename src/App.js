import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/style_all.css";
import "./css/home.css";
import "./css/islands.css";
import "./css/dice.css";
import Navbar from "./components/nav_bar";
import Home from "./components/home";
import Islands from "./components/theislands";
import Dice from "./components/rollthedice";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Where To Go" />
        <Route exact path="/" component={Home} />
        <Route path="/theislands" component={Islands} />
        <Route path="/rollthedice" component={Dice} />
      </div>
    </BrowserRouter>
  );
}

export default App;