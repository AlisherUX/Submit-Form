"use strict";

const reverse = () => {
  if (main == 0) {
    main = 1;
  } else {
    main = 0;
  }
};

const reverseLetter = () => {
  if (forLetter == 0) {
    forLetter = 1;
  } else {
    forLetter = 0;
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
  reverseLetter();
  if (forLetter == 0) {
    document.getElementById("catcher").innerHTML = value.toLowerCase();
  } else {
    document.getElementById("catcher").innerHTML = value.toUpperCase();
  }
}

const inputHandler = function (e) {
  catcher.innerHTML = e.target.value;
};

soundBtn.addEventListener("click", () => {
  reverse();
  if (main == 1) {
    document.querySelector(".sound-btn-item").style.display = "none";
  } else {
    document.querySelector(".sound-btn-item").style.display = "flex";
  }
});

int.addEventListener("input", inputHandler);

int.addEventListener("keyup", (el) => {
  if (el.keyCode == 13) {
    work();

    setTimeout(() => {
      btn.classList.remove("active");
    }, 300);
  }
});

int.addEventListener("keydown", (el) => {
  if (el.keyCode == 13) {
    work();
    btn.classList.toggle("active");
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

window.addEventListener("keydown", (el) => {
  console.log(el.keyCode);

  if (el.keyCode == 18) {
    alt.style.display = "flex";

    setTimeout(() => {
      alt.style.display = "none";
    }, 1000);
  } else if (el.keyCode == 17) {
    ctrl.style.display = "flex";

    reverse();
    if (main == 1) {
      document.querySelector(".sound-btn-item").style.display = "none";
    } else {
      document.querySelector(".sound-btn-item").style.display = "flex";
    }

    setTimeout(() => {
      ctrl.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 20) {
    caps.style.display = "flex";

    setTimeout(() => {
      caps.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 16) {
    shift.style.display = "flex";

    setTimeout(() => {
      shift.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 9) {
    tab.style.display = "flex";

    setTimeout(() => {
      tab.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 32) {
    probel.style.display = "flex";

    setTimeout(() => {
      probel.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 8) {
    loss.style.display = "flex";

    setTimeout(() => {
      loss.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 91) {
    windows.style.display = "flex";

    setTimeout(() => {
      windows.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 38) {
    up.style.display = "flex";

    setTimeout(() => {
      up.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 40) {
    down.style.display = "flex";

    setTimeout(() => {
      down.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 37) {
    left.style.display = "flex";

    setTimeout(() => {
      left.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 39) {
    right.style.display = "flex";

    setTimeout(() => {
      right.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 13) {
    enter.style.display = "flex";

    setTimeout(() => {
      enter.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 27) {
    esc.style.display = "flex";

    setTimeout(() => {
      esc.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 107) {
    plus.style.display = "flex";

    setTimeout(() => {
      plus.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 109) {
    minus.style.display = "flex";

    setTimeout(() => {
      minus.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 187) {
    equal.style.display = "flex";

    setTimeout(() => {
      equal.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 189) {
    botLine.style.display = "flex";

    setTimeout(() => {
      botLine.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 192) {
    textItems.style.display = "flex";

    setTimeout(() => {
      textItems.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 45) {
    bigZero.style.display = "flex";

    setTimeout(() => {
      bigZero.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 46) {
    del.style.display = "flex";

    setTimeout(() => {
    del.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 48) {
    zero.style.display = "flex";

    setTimeout(() => {
      zero.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 57 || el.keyCode == 33) {
    nine.style.display = "flex";

    setTimeout(() => {
      nine.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 56) {
    eight.style.display = "flex";

    setTimeout(() => {
      eight.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 55 || el.keyCode == 36) {
    seven.style.display = "flex";

    setTimeout(() => {
      seven.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 54) {
    six.style.display = "flex";

    setTimeout(() => {
      six.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 53 || el.keyCode == 12) {
    five.style.display = "flex";

    setTimeout(() => {
      five.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 52) {
    four.style.display = "flex";

    setTimeout(() => {
      four.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 51 || el.keyCode == 34) {
    three.style.display = "flex";

    setTimeout(() => {
      three.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 50) {
    two.style.display = "flex";

    setTimeout(() => {
      two.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 49 || el.keyCode == 35) {
    one.style.display = "flex";

    setTimeout(() => {
      one.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 106) {
    multiple.style.display = "flex";

    setTimeout(() => {
      multiple.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 111) {
    divide.style.display = "flex";

    setTimeout(() => {
      divide.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 144) {
    nl.style.display = "flex";

    setTimeout(() => {
      nl.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 220) {
    straightLine.style.display = "flex";

    setTimeout(() => {
      straightLine.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 191) {
    question.style.display = "flex";

    setTimeout(() => {
      question.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 222) {
    quote.style.display = "flex";

    setTimeout(() => {
      quote.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 186) {
    stopMark.style.display = "flex";

    setTimeout(() => {
      stopMark.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 190) {
    dot.style.display = "flex";

    setTimeout(() => {
      dot.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 188) {
    comma.style.display = "flex";

    setTimeout(() => {
      comma.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 219) {
    squareBracketFinish.style.display = "flex";

    setTimeout(() => {
      squareBracketFinish.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 221) {
    squareBracketStop.style.display = "flex";

    setTimeout(() => {
      squareBracketStop.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 112) {
    f1.style.display = "flex";

    setTimeout(() => {
      f1.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 113) {
    f2.style.display = "flex";

    setTimeout(() => {
      f2.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 114) {
    f3.style.display = "flex";

    setTimeout(() => {
      f3.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 115) {
    f4.style.display = "flex";

    setTimeout(() => {
      f4.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 116) {
    f5.style.display = "flex";

    setTimeout(() => {
      f5.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 117) {
    f6.style.display = "flex";

    setTimeout(() => {
      f6.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 118) {
    f7.style.display = "flex";

    setTimeout(() => {
      f7.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 119) {
    f8.style.display = "flex";

    setTimeout(() => {
      f8.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 120) {
    f9.style.display = "flex";

    setTimeout(() => {
      f9.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 121) {
    f10.style.display = "flex";

    setTimeout(() => {
      f10.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 122) {
    f11.style.display = "flex";

    setTimeout(() => {
      f11.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 123) {
    f12.style.display = "flex";

    setTimeout(() => {
      f12.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 145) {
    sl.style.display = "flex";

    setTimeout(() => {
      sl.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 19) {
    ps.style.display = "flex";

    setTimeout(() => {
      ps.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 65) {
    a.style.display = "flex";

    setTimeout(() => {
      a.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 66) {
    b.style.display = "flex";

    setTimeout(() => {
      b.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 67) {
    c.style.display = "flex";

    setTimeout(() => {
      c.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 68) {
    d.style.display = "flex";

    setTimeout(() => {
      d.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 69) {
    e.style.display = "flex";

    setTimeout(() => {
      e.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 70) {
    f.style.display = "flex";

    setTimeout(() => {
      f.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 71) {
    g.style.display = "flex";

    setTimeout(() => {
      g.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 72) {
    h.style.display = "flex";

    setTimeout(() => {
      h.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 73) {
    i.style.display = "flex";

    setTimeout(() => {
      i.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 74) {
    j.style.display = "flex";

    setTimeout(() => {
      j.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 75) {
    k.style.display = "flex";

    setTimeout(() => {
      k.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 76) {
    l.style.display = "flex";

    setTimeout(() => {
      l.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 77) {
    m.style.display = "flex";

    setTimeout(() => {
      m.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 78) {
    n.style.display = "flex";

    setTimeout(() => {
      n.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 79) {
    o.style.display = "flex";

    setTimeout(() => {
      o.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 80) {
    p.style.display = "flex";

    setTimeout(() => {
      p.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 81) {
    q.style.display = "flex";

    setTimeout(() => {
      q.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 82) {
    r.style.display = "flex";

    setTimeout(() => {
      r.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 83) {
    s.style.display = "flex";

    setTimeout(() => {
      s.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 84) {
    t.style.display = "flex";

    setTimeout(() => {
      t.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 85) {
    u.style.display = "flex";

    setTimeout(() => {
      u.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 86) {
    v.style.display = "flex";

    setTimeout(() => {
      v.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 87) {
    w.style.display = "flex";

    setTimeout(() => {
      w.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 88) {
    x.style.display = "flex";

    setTimeout(() => {
      x.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 89) {
    y.style.display = "flex";

    setTimeout(() => {
      y.style.display = "none";
    }, 1500);
  } else if (el.keyCode == 90) {
    z.style.display = "flex";

    setTimeout(() => {
      z.style.display = "none";
    }, 1500);
  }
});
