/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomSuite = Math.floor(Math.random() * 4);

  //Will need to turn 1:Ace and 11-13 into Jack, Queen and King
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let num = document.getElementById("number");
  num.innerHTML = randomNumber;

  if (randomNumber == 1) {
    num.innerHTML = "A";
  }
  if (randomNumber == 11) {
    num.innerHTML = "J";
  }
  if (randomNumber == 12) {
    num.innerHTML = "Q";
  }
  if (randomNumber == 13) {
    num.innerHTML = "K";
  }

  const classes = ["♦", "♥", "♠", "♣"];
  let suite = classes[randomSuite];
  let topSuite = document.getElementById("top");
  let botSuite = document.getElementById("bot");
  topSuite.innerHTML = suite;
  botSuite.innerHTML = suite;

  if (randomSuite == 1) {
    topSuite.style.color = "red";
    botSuite.style.color = "red";
    num.style.color = "red";
  }
};
