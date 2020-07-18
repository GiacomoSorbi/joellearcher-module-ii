import React, { useState } from "react";
import DieImage1 from "./images/dice_1.png";
import DieImage2 from "./images/dice_2.png";
import DieImage3 from "./images/dice_3.png";
import DieImage4 from "./images/dice_4.png";
import DieImage5 from "./images/dice_5.png";
import DieImage6 from "./images/dice_6.png";

function Dice() {
  const [diceValue, setDiceValue] = useState(1);
  const [dice2Value, setDice2Value] = useState(6);

  function rollDice() {
    setDiceValue(Math.floor(Math.random() * 6) + 1);
    setDice2Value(Math.floor(Math.random() * 6) + 1);
  }

  function getDice(num) {
    if (num === 1) {
      return DieImage1;
    } else if (num === 2) {
      return DieImage2;
    } else if (num === 3) {
      return DieImage3;
    } else if (num === 4) {
      return DieImage4;
    } else if (num === 5) {
      return DieImage5;
    } else if (num === 6) {
      return DieImage6;
    }
  }

  return (
    <div className="dice-game">
      <header className="dice-game-header">
        <div>
          <img src={getDice(diceValue)} className="die" alt="Die one" />
          <img src={getDice(dice2Value)} className="die" alt="Die two" />
        </div>
        <span>{diceValue + dice2Value}</span>
        <button className="button" onClick={rollDice}>
          roll the dice!
        </button>
      </header>
    </div>
  );
}

export default Dice;
