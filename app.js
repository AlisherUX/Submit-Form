"use strict";

let btn = document.querySelector(".button");
let int = document.querySelector(".input");
let catcher = document.querySelector("#catcher");

const inputHandler = function (e) {
  catcher.innerHTML = e.target.value.toUpperCase();
};

int.addEventListener("input", inputHandler);

function work() {
  let value = int.value;
  document.getElementById("catcher").innerHTML = value;
}

int.addEventListener("keydown", () => {
  if (keyCode == 13) {
    work();
  }
});

