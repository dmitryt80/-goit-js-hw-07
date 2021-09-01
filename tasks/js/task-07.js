const rangeToggle = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeToggle.addEventListener("input", textSizeToggle);

function textSizeToggle() {
  text.style.fontSize = rangeToggle.value + "px";
}