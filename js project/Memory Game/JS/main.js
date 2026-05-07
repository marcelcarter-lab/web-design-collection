// Score And Name qnd screen splash -----------------------------------------------------------------------------------------
let nam = document.querySelector(".name");
let tries = document.querySelector(".tries");
let score = document.querySelector(".score");
let screen1 = document.querySelector(".screen");
let con = document.querySelector(".con");
let button = document.querySelector(".button");

let duration = 1000;
let duration2 = 500;
let container = document.querySelector(".block-game");
let blocks = Array.from(container.children);
let orderRange = [...Array(blocks.length).keys()];

function none() {
  screen1.style.cssText = "display :none;";
  con.style.cssText = "display :none;";
  button.style.cssText = "display :none;";
}

function start() {
  let userName = prompt("What's Your Name?");
  if (userName == "" || userName == null) {
    nam.innerHTML += " Unkown";
    none();
  } else {
    nam.innerHTML += ` ${userName}`;
    none();
  }
  setTimeout(() => {
    blocks.forEach((selectedBlock) =>{
      selectedBlock.classList.add("transform")
    })
  }, duration2);
  setTimeout(() => {
    blocks.forEach((selectedBlock) =>{
      selectedBlock.classList.remove("transform")
    })
  }, duration);
}

// image.onclick = function () {
//   score.innerHTML = Number.parseInt(score.innerHTML) + 1;
// };
//--------------------------------------------------------------------------------------------------------------------------
// Cartes-------------------------------------------------------------------------------------------------------------------

shuffle(orderRange);

// add css property to game blocks
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  block.addEventListener("click", function () {
    flipBlock(block);
  });
});
// flip card
function flipBlock(selectedBlock) {
  selectedBlock.classList.add("transform");

  let flipedblock = blocks.filter((fliped) =>
    fliped.classList.contains("transform")
  );

  if (flipedblock.length === 2) {
    stopClicking();

    matchedblock(flipedblock[0], flipedblock[1]);
  }
}
//stop clicking function
function stopClicking() {
  container.classList.add("no-clicking");

  setTimeout(() => {
    container.classList.remove("no-clicking");
  }, duration);
}
// checked matched block
let matched = [];
function matchedblock(firstblock, secondblock) {
  let score = document.querySelector(".score");

  if (firstblock.dataset.pro === secondblock.dataset.pro) {
    firstblock.classList.remove("transform");
    secondblock.classList.remove("transform");

    firstblock.classList.add("match");
    secondblock.classList.add("match");

    firstblock.classList.add("no-clicking");
    secondblock.classList.add("no-clicking");

    document.getElementById("success").play();

    matched.push(firstblock);
    matched.push(secondblock);

    if (matched.length === blocks.length) {
      setTimeout(() => {
        document.getElementById("alert").classList.remove("none");
      }, duration);
    }
  } else {
    score.innerHTML = Number.parseInt(score.innerHTML) + 1;

    setTimeout(() => {
      firstblock.classList.remove("transform");
      secondblock.classList.remove("transform");
    }, duration);

    document.getElementById("fail").play();
  }
}
//after matching all block
function allmatched() {
  if (matched.length === blocks.length) {
    shuffle(orderRange);
    matched.forEach((match, index) => {
      match.classList.remove("match");
      match.classList.remove("no-clicking");

      match.style.order = orderRange[index];

      match.addEventListener("click", function () {
        flipBlock(match);
      });
      matched = [];
    });
  }
}
//Replay game
function replaygame() {
  document.getElementById("alert").classList.add("none");
  setTimeout(() => {
    allmatched();
  }, duration);
  score.innerHTML = Number(0);
}
// canceling replay
function cancel() {
  document.getElementById("alert").classList.add("none");
  setTimeout(() => {
    document.querySelector(".canceling").classList.remove("none");
  }, duration);
}
//remove pop up
function removepopUp() {
  document.querySelector(".canceling").classList.add("none");
}
// shuffle function
function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
  }
  return array;
}
//--------------------------------------------------------------------------------------------------------------------------
