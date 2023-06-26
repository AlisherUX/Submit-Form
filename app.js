"use strict";

let btn = document.querySelector(".button");
let int = document.querySelector(".input");
let catcher = document.querySelector("#catcher");
let soundBtn = document.querySelector(".sound-btn");
let main = 0;
let forLetter = 0;

const reverse = () => {
  if (main == 0) {
    main = 1
  } else {
    main = 0
  }
};

const reverseLetter = () => {
  if (forLetter == 0) {
    forLetter = 1
  } else {
    forLetter = 0
  }
};

const playStop = (el) => {
  if (main == 0) {
    el.stop();
  } else {
    el.play();
  }
};

function work() {
  let value = int.value;
  reverseLetter()
  if (forLetter == 0) {
    document.getElementById("catcher").innerHTML = value.toLowerCase();
  }else{
    document.getElementById("catcher").innerHTML = value.toUpperCase();
  }
}

const inputHandler = function (e) {
  catcher.innerHTML = e.target.value;
};

soundBtn.addEventListener("click", () => {
  reverse();
  if (main == 0) {
    document.querySelector(".sound-btn-item").style.display = "flex";
  } else {
    document.querySelector(".sound-btn-item").style.display = "none";
  }
});

int.addEventListener("input", inputHandler);

int.addEventListener("keydown", (el) => {
  if (el.keyCode == 13) {
    work();
  } else if (el.keyCode == 65) {
    playStop(document.getElementById("a"));
  } else if (el.keyCode == 66) {
    playStop(document.getElementById("b"));
  } else if (el.keyCode == 67) {
    playStop(document.getElementById("c"));
  } else if (el.keyCode == 68) {
    playStop(document.getElementById("d"));
  } else if (el.keyCode == 69) {
    playStop(document.getElementById("e"));
  } else if (el.keyCode == 70) {
    playStop(document.getElementById("f"));
  } else if (el.keyCode == 71) {
    playStop(document.getElementById("g"));
  } else if (el.keyCode == 72) {
    playStop(document.getElementById("h"));
  } else if (el.keyCode == 73) {
    playStop(document.getElementById("i"));
  } else if (el.keyCode == 74) {
    playStop(document.getElementById("j"));
  } else if (el.keyCode == 75) {
    playStop(document.getElementById("k"));
  } else if (el.keyCode == 76) {
    playStop(document.getElementById("l"));
  } else if (el.keyCode == 77) {
    playStop(document.getElementById("m"));
  } else if (el.keyCode == 78) {
    playStop(document.getElementById("n"));
  } else if (el.keyCode == 79) {
    playStop(document.getElementById("o"));
  } else if (el.keyCode == 80) {
    playStop(document.getElementById("p"));
  } else if (el.keyCode == 81) {
    playStop(document.getElementById("q"));
  } else if (el.keyCode == 82) {
    playStop(document.getElementById("r"));
  } else if (el.keyCode == 83) {
    playStop(document.getElementById("s"));
  } else if (el.keyCode == 84) {
    playStop(document.getElementById("t"));
  } else if (el.keyCode == 85) {
    playStop(document.getElementById("u"));
  } else if (el.keyCode == 86) {
    playStop(document.getElementById("v"));
  } else if (el.keyCode == 87) {
    playStop(document.getElementById("w"));
  } else if (el.keyCode == 88) {
    playStop(document.getElementById("x"));
  } else if (el.keyCode == 89) {
    playStop(document.getElementById("y"));
  } else if (el.keyCode == 90) {
    playStop(document.getElementById("z"));
  }
});
