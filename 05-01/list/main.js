const messages = [
  {
    id: "asdlkm",
    title: "Horse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sequi voluptatem, ullam voluptas, accusamus ipsa placeat qui harum asperiores, corporis repellendus sunt eos saepe repudiandae deserunt dignissimos alias facilis nostrum.",
  },
  {
    id: "dsv344",
    title: "Donkey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sequi voluptatem, ullam voluptas, accusamus ipsa placeat qui harum asperiores, corporis repellendus sunt eos saepe repudiandae deserunt dignissimos alias facilis nostrum.",
  },
  {
    id: "vcbdf34",
    title: "Cat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sequi voluptatem, ullam voluptas, accusamus ipsa placeat qui harum asperiores, corporis repellendus sunt eos saepe repudiandae deserunt dignissimos alias facilis nostrum.",
  },
];

function removeMessage(data, id) {
  putToDom(data.filter((item) => item.id !== id));
}

let container = document.createElement("div");
container.classList.add("container");
document.body.prepend(container);

function putToDom(data) {
  console.log(data);
  if (!data.length) {
    container.innerHTML = "No Messages";
    container.style.cssText = `
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700
    `
    return;
  }
  container.innerHTML = "";
  data.forEach((item, index) => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerHTML = item.title;

    let description = document.createElement("p");
    description.innerHTML = item.description;

    let close = document.createElement("div");
    close.classList.add("close");
    close.onclick = () => removeMessage(data, item.id);
    close.innerHTML = "[<b>&times;</b>]";

    itemDiv.append(titleDiv, description, close);
    container.append(itemDiv);
  });
}
putToDom(messages);
