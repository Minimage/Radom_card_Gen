/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomSuite = Math.floor(Math.random() * 3);

  //Will need to turn 1:Ace and 11-13 into Jack, Queen and King
  let randomNumber = Math.floor(Math.random() * 9) + 1;
  let num = document.getElementById("number");
  num.innerHTML = randomNumber;

  const classes = ["♦", "♥", "♠", "♣"];
  let suite = classes[randomSuite];
  let topSuite = document.getElementById("top");
  let botSuite = document.getElementById("bot");
  topSuite.innerHTML = suite;
  botSuite.innerHTML = suite;
};
