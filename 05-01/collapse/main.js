arrow.onclick = (e) => {
  e.target.classList.toggle("down");
  let cBody = e.target.parentElement.nextElementSibling;
  cBody.classList.toggle("opened");
  if (cBody.classList.contains("opened"))
    cBody.style.height = `${cBody.scrollHeight}px`;
  else cBody.style.height = `0px`;
};
