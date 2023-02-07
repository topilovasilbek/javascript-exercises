const text = document.getElementById("text");
const input = document.getElementById("input");
input.oncopy = () => false;
input.onpaste = () => false;
input.oncontextmenu = () => false;
input.onselectstart = () => false;

let words =
  "The man passed along to the boy knowledge, history, memories, color, pain, laughter, love, and truth. Every time you place this book in the hands of a child, you do the same thing. It is very risky.";

function putWords() {
  text.innerHTML = words;
}
putWords();

let range = new Range();

let span = document.createElement("span");
span.style.color = "right";
let txt = text.innerText;
let span2 = document.createElement("span");
span2.style.color = "wrong";

let count = 0;
input.oninput = (e) => {
  console.log(e, count, text.lastChild);
  console.log(e.data, words[count]);
  if (e.data === words[count]) {
    let range = new Range();
    range.setStart(text.lastChild, 0);
    range.setEnd(text.lastChild, count + 1);
    range.deleteContents()
    console.log(range);
  }
  count++;
  /* if (count >= words.length) return;
  if (e.target.value !== "") ++count;
  if (e.data === " " && e.data === txt[count]) e.target.value = "";
  range.setStart(text.lastChild, 0);
  range.setEnd(text.lastChild, count);
  range.surroundContents(span); */
  // let range = new Range();
  // range.setStart(text.firstChild, 0);
  // range.setEnd(text.firstChild, count);
  // if (text.innerText[range.endOffset - 1] === e.data && e.data===' ') {
  //   e.target.value = '';
  // } if (text.innerText[range.endOffset - 1] === e.data) {
  //   let range = new Range();
  //   range.setStart(text.lastChild, count - 1);
  //   range.setEnd(text.lastChild, count);
  //   range.surroundContents(document.createElement('span'))
  //   console.log(range);
  // }
};

/* let words =
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
}; */
