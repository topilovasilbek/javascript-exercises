let kick = document.getElementsByClassName("kick")[0];
let ball = document.getElementsByClassName("ball")[0];
let pusher = document.getElementsByClassName("pusher")[0];
let keeper = document.getElementsByClassName("keeper")[0];
let bodyLayer = document.getElementsByClassName("body-layer")[0];
let modalEl = document.getElementsByClassName("modal")[0];

// User is pressing Ctrl key or not
let isPressing = false;
let isPressable = true;

function keyDown(event) {
  if (event.which === 17 && isPressable) {
    isPressing = true;
    kick.classList.add("visible");
  }
}

function keyUp(event) {
  if (event.which === 17 && isPressable) {
    isPressing = false;
    kick.classList.remove("visible");
  }
}

function modal(text) {
  isPressable = false;
  setTimeout(() => {
    bodyLayer.classList.add("visible");
    keeper.style.animationPlayState = "paused";
    modalEl.innerHTML = text;
  }, 500);
  setTimeout(() => {
    bodyLayer.style.backgroundColor = "#fff";
    bodyLayer.innerHTML = "";
  }, 3000);
  setTimeout(() => {
    ball.style.top = "calc(50% - 43px)";
    ball.style.left = "80%";
    ball.style.transform = null;
    keeper.style.animationPlayState = "running";
    isPressable = true;
  }, 3300);
  setTimeout(() => {
    bodyLayer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    bodyLayer.classList.remove("visible");
  }, 3600);
  setTimeout(() => {
    bodyLayer.appendChild(modalEl);
  }, 3900);
}

function onClickBall(e) {
  if (!isPressing || e.offsetX <= 27) return false;
  // modal();
  isPressing = false;
  pusher.classList.add("push");
  setTimeout(() => {
    kick.classList.remove("visible");
    moveBall({ x: e.offsetX, y: e.offsetY });
  }, 300);
  setTimeout(() => pusher.classList.remove("push"), 350);
}

function moveBall({ x, y }) {
  // console.log(x, y);
  if (x > 27) {
    yPos = 100 - y * 2;
    xPos = (x * 100) / 54 - 80;
    console.log(yPos);
    if (yPos < 7.5) yPos = 7.5;
    if (xPos < 10) xPos = 3;
    ball.style.top = `${yPos}%`;
    ball.style.left = `${xPos}%`;
    ball.style.transform = `translate(-50%, -80%)`;
    if (40 <= yPos && yPos <= 60 && xPos === 3) {
      modal("GOAL SAVED!");
    } else if (xPos === 3 || yPos === 7.5) {
      modal("OUT!");
    } else {
      modal("BALL ON THE WAY!");
    }
  }
}

// Event Listeners
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);
ball.addEventListener("click", onClickBall);
