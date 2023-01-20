const text = document.getElementById("text");
const input = document.getElementById("input");
input.oncopy = () => false;
input.onpaste = () => false;
input.oncontextmenu = () => false;
input.onselectstart = () => false;

let words =
  "The man passed along to the boy knowledge, history, memories, color, pain, laughter, love, and truth. Every time you place this book in the hands of a child, you do the same thing. It is very risky.";

function putWords() {
  text.innerHTML = "";
  words.split("").map((item) => {
    text.innerHTML += `<span class='letter'>${item}</span>`;
  });
}
putWords();

let globalLength = 0;
let inputText = "";

input.onkeydown = (e) => {
  console.log(e);
  if (e.keyCode > 36 && e.keyCode < 41) return false;
  let eKey = e.key === "Shift" ? "" : e.key;
  if (e.keyCode === 8) {
    let matchedSpan = Array.from(document.getElementsByClassName("letter"))[
      inputText.length - 1
    ];
    matchedSpan.classList.remove("right");
    matchedSpan.classList.remove("wrong");
    inputText = inputText.slice(0, inputText.length - 1);
    globalLength = globalLength - 1;
  } else {
    inputText = e.target.value + eKey;
    if (inputText.length > globalLength) {
      let matchedSpan = Array.from(document.getElementsByClassName("letter"))[
        inputText.length - 1
      ];
      if (matchedSpan.innerHTML === eKey) {
        matchedSpan.classList.add("right");
      } else {
        matchedSpan.classList.add("wrong");
      }
    }
    globalLength = inputText.length;
  }
};
