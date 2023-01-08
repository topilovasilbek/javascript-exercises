let layer = document.querySelector(".layer");
let ball = document.querySelector(".ball");

// Function works on click to target football field
function onConClick(e) {
  console.log(e.offsetX, e.offsetY);
  let x = e.offsetX;
  let y = e.offsetY;
  if (x < 10 || x > 855 || y < 10 || y > 555) {
    return null;
  }
  if (x < 34) x = 34;
  if (y < 34) y = 34;
  if (x > 832) x = 832;
  if (y > 530) y = 530;
  ball.style.left = `${x - 25}px`;
  ball.style.top = `${y - 25}px`;
}

// Event Listeners
layer.addEventListener("click", onConClick);
