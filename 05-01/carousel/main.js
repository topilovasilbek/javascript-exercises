let main = document.querySelector(".main");

/* configuration */
let width = 220; // image width
let count = 3; // visible images count

let list = document.querySelector(".main");
let listElems = document.querySelectorAll(".item");

let position = 0; // ribbon scroll position

function prev() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0);
  Array.from(listElems).forEach((el) => {
    el.style.transform = `translateX(${position}px)`;
  });
}

function next() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  Array.from(listElems).forEach((el) => {
    el.style.transform = `translateX(${position}px)`;
  });
}
