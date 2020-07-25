import React from "react";
import { Route } from "react-router-dom";
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
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/theislands" component={Islands} />
      <Route path="/rollthedice" component={Dice} />
    </div>
  );
}

export default App;
