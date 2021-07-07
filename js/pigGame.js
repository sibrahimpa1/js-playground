"use strict";

const player = document.querySelectorAll(".player");
const newGame = document.querySelector(".new");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const diceValue = document.querySelector(".dice span");

roll.addEventListener("click", function() {
  let currScoreEl = document.querySelector(".active .current span");
  const random = Math.trunc(Math.random() * 6 + 1);
  diceValue.innerText = random;

  if (random === 1) togglePlayer("zero");
  else currScoreEl.innerText = Number(currScoreEl.innerText) + random;
});

hold.addEventListener("click", function() {
  addScore();
  checkForWinner();
  togglePlayer("next");
});

const addScore = () => {
  let highScore = document.querySelector(".active .score");
  let newScore = document.querySelector(".active .current span");

  highScore.innerText =
    Number(highScore.innerText) + Number(newScore.innerText);
};

const togglePlayer = condition => {
  if (condition.includes("zero")) toggleSadSmiley();
  document.querySelector(".active .current span").innerText = "0";
  player.forEach((item, i) => {
    item.classList.toggle("active");
    diceValue.innerText = "";
  });
};

const toggleSadSmiley = () => {
  const activeSmiley = document.querySelector(".active .smiley");
  activeSmiley.classList.add("visible");
  activeSmiley.style.opacity = "1";

  const visibleSmiley = document.querySelector(".visible.smiley");
  setTimeout(function() {
    visibleSmiley.style.opacity = "0";
    visibleSmiley.classList.remove("visible");
  }, 1500);
};

newGame.addEventListener("click", function() {
  const allCurrents = document.querySelectorAll(".current span");
  const allScores = document.querySelectorAll(".score");
  diceValue.innerText = "";
  allCurrents.forEach((item, i) => {
    item.innerText = "0";
    item.innerText = "0";
  });
  allScores.forEach((item, i) => {
    item.innerText = "0";
    item.innerText = "0";
  });
  togglePlayer("new");
  const winners = document.querySelectorAll(".winner");
  const scores = document.querySelectorAll(".score");
  scores.forEach((item, i) => {
    item.style.color = "#413171";
  });
  winners.forEach((item, i) => {
    item.style.opacity = "0";
  });
});

const checkForWinner = () => {
  const scores = document.querySelectorAll(".score");
  scores.forEach((item, i) => {
    if (Number(item.innerText) >= 20) {
      item.style.color = "#de3397";
      item.closest(".player").querySelector(".winner").style.opacity = "1";
    }
  });
};
