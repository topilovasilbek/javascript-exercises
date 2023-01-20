/* document.body.oncontextmenu = () => false;

window.onkeydown = (e) => {
  if (e.keyCode === 44) uncopyable.style.color = "transparent";
  if (e.ctrlKey || e.shiftKeyw) return false;
};

window.onblur = function () {
  uncopyable.style.color = "transparent";
};
window.onfocus = function () {
  uncopyable.style.color = "#000";
};
 */

document.addEventListener("keyup", function (e) {
  let keyCode = e.keyCode ? e.keyCode : e.which;
  if (keyCode == 44) {
    stopPrntScr();
  }
});

function stopPrntScr() {
  var inpFld = document.createElement("input");
  inpFld.setAttribute("value", ".");
  inpFld.setAttribute("width", "0");
  inpFld.style.height = "0px";
  inpFld.style.width = "0px";
  inpFld.style.border = "0px";
  document.body.appendChild(inpFld);
  inpFld.select();
  document.execCommand("copy");
  inpFld.remove(inpFld);
}
function AccessClipboardData() {
  try {
    window.clipboardData.setData("text", "Access   Restricted");
  } catch (err) {}
}
setInterval("AccessClipboardData()", 300);
