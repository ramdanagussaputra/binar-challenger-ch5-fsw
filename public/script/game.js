"use strict";

// ELEMENT
const rock = document.querySelector(".p1-rock");
const paper = document.querySelector(".p1-paper");
const scissor = document.querySelector(".p1-scissor");
const middle = document.querySelector(".middle");
const winner = document.querySelector(".winner-text");
const refresh = document.querySelector(".img-refresh");

// Com Value
let comValue;
const comGameValue = function () {
  const value = Math.trunc(Math.random() * 3) + 1;
  if (value === 1) {
    comValue = "rock";
  } else if (value === 2) {
    comValue = "paper";
  } else {
    comValue = "scissor";
  }
};

comGameValue();

// Active state
let active = true;

// Player selection function
const playerSelection = function (select) {
  select.classList.add("active");
  middle.classList.add("win");
  document.querySelector(`.com-${comValue}`).classList.add("active");
};

// Output evaluation function
const evaluation = function (select, selectString) {
  const p1Value = (select.value = selectString);
  let value;

  if (selectString === "rock") value = "paper";
  if (selectString === "paper") value = "scissor";
  if (selectString === "scissor") value = "rock";

  if (p1Value === comValue) {
    winner.textContent = "Draw";
  } else if (comValue === value) {
    winner.textContent = `COM \n WIN`;
  } else {
    winner.textContent = `PLAYER 1 \n WIN`;
  }
};

// Player 1 Rock
rock.addEventListener("click", function () {
  if (active) {
    playerSelection(rock);

    evaluation(rock, "rock");

    active = false;
  }
});

// Player 1 Paper
paper.addEventListener("click", function () {
  if (active) {
    playerSelection(paper);

    evaluation(paper, "paper");

    active = false;
  }
});

// Player 1 scissor
scissor.addEventListener("click", function () {
  if (active) {
    playerSelection(scissor);

    evaluation(scissor, "scissor");

    active = false;
  }
});

// Refresh
refresh.addEventListener("click", function () {
  active = true;
  rock.classList.remove("active");
  paper.classList.remove("active");
  scissor.classList.remove("active");
  middle.classList.remove("win");
  document.querySelector(`.com-${comValue}`).classList.remove("active");
  comGameValue();
});
