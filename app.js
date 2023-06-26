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

int.addEventListener("keydown", (el) => {
  if (el.keyCode == 13) {
    work();
  }else if(el.keyCode == 65){
    document.getElementById("a").play();
  }else if(el.keyCode == 66){
    document.getElementById("b").play();
  }else if(el.keyCode == 67){
    document.getElementById("c").play();
  }else if(el.keyCode == 68){
    document.getElementById("d").play();
  }else if(el.keyCode == 69){
    document.getElementById("e").play();
  }else if(el.keyCode == 70){
    document.getElementById("f").play();
  }else if(el.keyCode == 71){
    document.getElementById("g").play();
  }else if(el.keyCode == 72){
    document.getElementById("h").play();
  }else if(el.keyCode == 73){
    document.getElementById("i").play();
  }else if(el.keyCode == 74){
    document.getElementById("j").play();
  }else if(el.keyCode == 75){
    document.getElementById("k").play();
  }else if(el.keyCode == 76){
    document.getElementById("l").play();
  }else if(el.keyCode == 77){
    document.getElementById("m").play();
  }else if(el.keyCode == 78){
    document.getElementById("n").play();
  }else if(el.keyCode == 79){
    document.getElementById("o").play();
  }else if(el.keyCode == 80){
    document.getElementById("p").play();
  }else if(el.keyCode == 81){
    document.getElementById("q").play();
  }else if(el.keyCode == 82){
    document.getElementById("r").play();
  }else if(el.keyCode == 83){
    document.getElementById("s").play();
  }else if(el.keyCode == 84){
    document.getElementById("t").play();
  }else if(el.keyCode == 85){
    document.getElementById("u").play();
  }else if(el.keyCode == 86){
    document.getElementById("v").play();
  }else if(el.keyCode == 87){
    document.getElementById("w").play();
  }else if(el.keyCode == 88){
    document.getElementById("x").play();
  }else if(el.keyCode == 89){
    document.getElementById("y").play();
  }else if(el.keyCode == 90){
    document.getElementById("z").play();
  }
});
